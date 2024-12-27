import { Pais } from "./pais.js";
import { RegionVitivinicola } from "./regionVitivinicola.js";
export class Provincia {

    private nombre: string;
    private regiones: RegionVitivinicola[] = []
  
    constructor(nombre: string) {
        this.nombre = nombre; 
    }
    contarRegiones() {
    }
    mostrarRegiones() {
    }
    
    establecerRegion(region:RegionVitivinicola){
        this.regiones.push(region);
    } 

    tieneRegion(regionNombre: string): boolean {
        return this.regiones.some(region => region.getNombre() === regionNombre);
    }
    getNombre(){
        return this.nombre
    }
    obtenerPais(paises: Pais[]) {
        for (const pais of paises) {
            if (pais.tieneProvincia(this)) {
                return pais.getNombre();
            }
        }
    }

}