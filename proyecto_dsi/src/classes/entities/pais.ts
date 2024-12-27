import { Provincia } from "./provincia.js";
export class Pais {

    private nombre: string;
    private provincias: Provincia[] =[]
   
    constructor(nombre: string) {
        this.nombre = nombre;        
    }
    establecerProvincia(provincia:Provincia){
        this.provincias.push(provincia)
    }
    
    contarBodegas() {
    }
    
    getNombre(){
        return this.nombre
    }

    tieneProvincia(provincia:Provincia){
        return this.provincias.some(p => p.getNombre() === provincia.getNombre());
    }
}