// import { Injectable } from '@nestjs/common';
import { AppDataSource } from '../database/database.js';
import { VinoEntity } from '../entities/VinoEntity.js';
import { Vino } from '../classes/vino.js';
import { Bodega } from '../classes/bodega.js';
import { Maridaje } from '../classes/maridaje.js';
import { Resena } from '../classes/resena.js';
import { Varietal } from '../classes/varietal.js';
import { RegionVitivinicola } from '../classes/regionVitivinicola.js';
import { Pais } from '../classes/pais.js';
import { Provincia } from '../classes/provincia.js';
import { TipoUva } from '../classes/tipoUva.js';
// @Injectable()
export class VinoRepository {
    paisInstance = null;
    provinciaInstances = new Map();
    bodegaInstances = new Map();
    regionVitivinicolaInstances = new Map();
    tipoUvaInstances = new Map();
    async getAllVinos() {
        console.log('hola');
        // mover a database ??????  || agregar validacion de que si esta incializada
        await AppDataSource.initialize()
            .then(() => console.log('Base de datos conectada correctamente.'))
            .catch((err) => console.error('Error de conexión a la base de datos:', err));
        const vinosEntities = await AppDataSource.getRepository(VinoEntity).find({
            relations: [
                'bodega',
                'bodega.regionVitivinicola',
                'bodega.regionVitivinicola.provincia',
                'bodega.regionVitivinicola.provincia.pais',
                'maridajes',
                'resenas',
                'varietales',
                'varietales.tipoUva'
            ],
        });
        const vinos = await Promise.all(vinosEntities.map(async (vinoEntity) => this.mapToVino(vinoEntity)));
        // console.log('vinos', vinos)
        return vinos;
    }
    async mapToVino(vinoEntity) {
        const bodega = this.getBodegaInstance(await vinoEntity.bodega);
        const varietales = (await vinoEntity.varietales).map((varietalEntity) => {
            const tipoUva = this.getTipoUvaInstance(varietalEntity.tipoUva);
            return new Varietal(varietalEntity.descripcion, varietalEntity.porcentajeComposicion, tipoUva);
        });
        // const maridajes = vinoEntity.maridajes.map(maridajeEntity => new Maridaje(maridajeEntity.descripcion));
        // const resenas = vinoEntity.resenas.map(resenaEntity => new Resena(resenaEntity.comentario, resenaEntity.puntaje));
        // const bodegaEntity = await vinoEntity.bodega;
        // const regionEntity = bodegaEntity.regionVitivinicola;
        // const provinciaEntity = regionEntity.provincia;
        // const paisEntity = provinciaEntity.pais;
        // const pais = await this.getPaisInstance(paisEntity);
        // const provincia = await this.getProvinciaInstance(provinciaEntity, pais);
        // const region = await this.getRegionInstance(regionEntity, provincia);
        // const bodega = await this.getBodegaInstance(bodegaEntity, region);
        // provincia.establecerRegion(region)
        // const paisEntity = (await vinoEntity.bodega).regionVitivinicola.provincia.pais;
        // const pais = new Pais(paisEntity.nombre);
        // const regionVitivinicolaEntity =  (await vinoEntity.bodega).regionVitivinicola;
        // const regionVitivinicola = new RegionVitivinicola(regionVitivinicolaEntity.descripcion, regionVitivinicolaEntity.nombre);
        // const provinciaEntity = (await vinoEntity.bodega).regionVitivinicola.provincia;
        // // const provincia = new Provincia(provinciaEntity.nombre, regionVitivinicola);
        // const provincia = new Provincia(provinciaEntity.nombre);
        // const bodega = new Bodega(
        //     (await vinoEntity.bodega).coordenadasUbicacion, 
        //     (await vinoEntity.bodega).descripcion,
        //     (await vinoEntity.bodega).historia,
        //     (await vinoEntity.bodega).nombre,
        //     (await vinoEntity.bodega).periodoActualizacion,
        //     regionVitivinicola,
        // );
        const maridajes = (await vinoEntity.maridajes).map(maridajeEntity => new Maridaje(maridajeEntity.descripcion, maridajeEntity.nombre));
        // const varietales = (await vinoEntity.varietales).map((varietalEntity) => {
        //     const tipoUva = new TipoUva(
        //         varietalEntity.tipoUva.descripcion,
        //         varietalEntity.tipoUva.nombre
        //     );
        //     return new Varietal(varietalEntity.descripcion, varietalEntity.porcentajeComposicion, tipoUva);
        // });
        // const varietales = (await vinoEntity.varietales).map(async (varietalEntity) => {
        //     const tipoUvaEntity = varietalEntity.tipoUva;
        //     const tipoUva = await this.getTipoUvaInstance(tipoUvaEntity);
        //     return new Varietal(
        //         varietalEntity.descripcion,
        //         varietalEntity.porcentajeComposicion,
        //         tipoUva
        //     );
        // });
        const resenas = (await vinoEntity.resenas).map(resenaEntity => new Resena(resenaEntity.comentario, resenaEntity.premium, resenaEntity.fechaResena, resenaEntity.puntaje));
        const vino = new Vino(vinoEntity.anada, vinoEntity.imagenEtiqueta, vinoEntity.nombre, vinoEntity.notaDeCataBodega, vinoEntity.precioArs, maridajes, await Promise.all(varietales), bodega);
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
            // busco el pais que ya existe para meterle la provincia
            const pais = this.getPaisInstance(provinciaEntity.pais);
            // creo la nueva provincia si no existe
            const provincia = new Provincia(provinciaEntity.nombre);
            // meto la provincia al array de Pais
            pais.establecerProvincia(provincia);
            // guardo en el map la provincia para la proxima iteracion
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
            const bodega = new Bodega(bodegaEntity.coordenadasUbicacion, bodegaEntity.descripcion, bodegaEntity.historia, bodegaEntity.nombre, bodegaEntity.periodoActualizacion, region);
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
