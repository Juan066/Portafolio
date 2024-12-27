import supabase from './supaBaseClient.js';
import { Vino } from '../classes/vino.js';
import { Bodega } from '../classes/bodega.js';
import { Maridaje } from '../classes/maridaje.js';
import { Resena } from '../classes/resena.js';
import { Varietal } from '../classes/varietal.js';
import { RegionVitivinicola } from '../classes/regionVitivinicola.js';
import { Pais } from '../classes/pais.js';
import { Provincia } from '../classes/provincia.js';
import { TipoUva } from '../classes/tipoUva.js';
export class VinoSuperbase {
    paisInstance = null;
    provinciaInstances = new Map();
    bodegaInstances = new Map();
    regionVitivinicolaInstances = new Map();
    tipoUvaInstances = new Map();
    async getAllPaises() {
        const { data: paisesEntities, error } = await supabase
            .from('pais')
            .select(`
            *,
            provincia: provincia (*)
           
        `);
        if (error) {
            console.error("Error al obtener los países:", error);
            return [];
        }
        const paises = paisesEntities.map((paisEntity) => {
            // Obtener instancia única de Pais usando getPaisInstance
            const pais = this.getPaisInstance(paisEntity);
            // Iterar sobre las provincias y establecerlas en el país usando getProvinciaInstance
            paisEntity.provincia.forEach((provinciaEntity) => {
                const provincia = this.getProvinciaInstance(provinciaEntity); // Obtener instancia única de Provincia
                pais.establecerProvincia(provincia); // Asociar la provincia con el país, evitando duplicados
            });
            return pais;
        });
        return paises;
    }
    async getAllProvincias() {
        const { data: provinciasEntities, error } = await supabase
            .from('provincia')
            .select(`
                *,
                pais: pais (*),
                regionVitivinicola: regionvitivinicola (*)
            `);
        if (error) {
            console.error("Error al obtener las provincias:", error);
            return [];
        }
        const provincias = provinciasEntities.map((provinciaEntity) => this.getProvinciaInstance(provinciaEntity));
        return provincias;
    }
    async getAllVinos() {
        const { data: vinosEntities, error } = await supabase
            .from('vino')
            .select(`
                *,
                bodega: bodega (
                    *,
                    regionVitivinicola: regionvitivinicola (
                        *,
                        provincia: provincia (
                            *,
                            pais: pais (*)
                        )
                    )
                ),
                maridaje (*),
                resena (*),
                varietal (*, tipouva: tipouva (*))
            `);
        if (error) {
            console.error("Error al obtener los vinos:", error);
            return [];
        }
        const vinos = await Promise.all(vinosEntities.map((vinoEntity) => this.mapToVino(vinoEntity)));
        console.log('el vino arreglado', vinos);
        return vinos;
    }
    async mapToVino(vinoEntity) {
        const bodega = this.getBodegaInstance(vinoEntity.bodega);
        const varietales = vinoEntity.varietal.map((varietalEntity) => {
            const tipoUva = this.getTipoUvaInstance(varietalEntity.tipouva);
            return new Varietal(varietalEntity.descripcion, varietalEntity.porcentajecomposicion, tipoUva);
        });
        const maridajes = Array.isArray(vinoEntity.maridaje)
            ? vinoEntity.maridaje.map((maridajeEntity) => new Maridaje(maridajeEntity.descripcion, maridajeEntity.nombre))
            : [];
        const resenas = vinoEntity.resena.map((resenaEntity) => new Resena(resenaEntity.comentario, resenaEntity.premium, resenaEntity.fecharesena, resenaEntity.puntaje));
        const vino = new Vino(vinoEntity.anada, vinoEntity.imagenetiqueta, vinoEntity.nombre, vinoEntity.notadecatabodega, vinoEntity.precioars, maridajes, varietales, bodega);
        resenas.forEach((resena) => vino.agregarResena(resena));
        return vino;
    }
    getPaisInstance(paisEntity) {
        if (!this.paisInstance) {
            this.paisInstance = new Pais(paisEntity.nombre);
        }
        return this.paisInstance;
    }
    getProvinciaInstance(provinciaEntity) {
        if (!this.provinciaInstances.has(provinciaEntity.id)) {
            const pais = this.getPaisInstance(provinciaEntity.pais);
            const provincia = new Provincia(provinciaEntity.nombre);
            pais.establecerProvincia(provincia);
            this.provinciaInstances.set(provinciaEntity.id, provincia);
        }
        return this.provinciaInstances.get(provinciaEntity.id);
    }
    getRegionVitivinicolaInstance(regionEntity) {
        if (!this.regionVitivinicolaInstances.has(regionEntity.id)) {
            const provincia = this.getProvinciaInstance(regionEntity.provincia);
            const region = new RegionVitivinicola(regionEntity.descripcion, regionEntity.nombre);
            provincia.establecerRegion(region);
            this.regionVitivinicolaInstances.set(regionEntity.id, region);
        }
        return this.regionVitivinicolaInstances.get(regionEntity.id);
    }
    getBodegaInstance(bodegaEntity) {
        if (!this.bodegaInstances.has(bodegaEntity.id)) {
            const region = this.getRegionVitivinicolaInstance(bodegaEntity.regionVitivinicola);
            const bodega = new Bodega(bodegaEntity.coordenadasubicacion, bodegaEntity.descripcion, bodegaEntity.historia, bodegaEntity.nombre, bodegaEntity.periodoactualizacion, region);
            this.bodegaInstances.set(bodegaEntity.id, bodega);
        }
        return this.bodegaInstances.get(bodegaEntity.id);
    }
    getTipoUvaInstance(tipoUvaEntity) {
        if (!this.tipoUvaInstances.has(tipoUvaEntity.id)) {
            const tipoUva = new TipoUva(tipoUvaEntity.descripcion, tipoUvaEntity.nombre);
            this.tipoUvaInstances.set(tipoUvaEntity.id, tipoUva);
        }
        return this.tipoUvaInstances.get(tipoUvaEntity.id);
    }
}
