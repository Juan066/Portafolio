import { Pais } from "./pais.js";
import { Provincia } from "./provincia.js";
export class RegionVitivinicola {

    private descripcion: string;
    private nombre: string;

    constructor(descripcion: string, nombre: string) {
        this.descripcion = descripcion;
        this.nombre = nombre;        
    }
    
    conocerBodega() {
    }
    contarBodegas() {
    }
 
    getNombre(){
        return this.nombre
    }
    obtenerProvincia(provincias: Provincia[]){
        for (const provincia of provincias) {
            if (provincia.tieneRegion(this.nombre)) {
                return provincia;
            }
        }
    }
    buscarPais(provincias: Provincia[], paises: Pais[]){
        const provincia = this.obtenerProvincia(provincias);
        if (provincia) {
            const pais = provincia.obtenerPais(paises);
            return pais;
        }
    }
        
    }
   

  
    
