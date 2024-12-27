import { Pais } from "./pais.js";
import { Provincia } from "./provincia.js";
import { RegionVitivinicola } from "./regionVitivinicola.js";
export class Bodega {

    private coordenadasUbicacion: string;
    private descripcion: string;
    private historia: string;
    private nombre: string;
    private periodoActualizacion: string;
    private regionVitivinicola: RegionVitivinicola;

    constructor(coordenadasUbicacion: string, descripcion: string, historia: string, nombre: string, periodoActualizacion: string, region: RegionVitivinicola) {
        this.coordenadasUbicacion = coordenadasUbicacion;
        this.descripcion = descripcion;
        this.historia = historia;
        this.nombre = nombre;
        this.periodoActualizacion = periodoActualizacion
        this.regionVitivinicola = region
        
    }
  
    contarResenias() {
    }
    mostrarTodosVinos() {
    }
    
    getNombre(){
        return this.nombre
    }

    buscarRegionProvinciaPais(provincias: Provincia[], paises: Pais[]){
        
        const region = this.regionVitivinicola.getNombre()
        const pais = this.regionVitivinicola.buscarPais(provincias, paises)
       return {region, pais}
        
    }
}