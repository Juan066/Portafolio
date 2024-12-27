import { Enofilo } from "./enofilo.js";

export class Siguiendo {

    private fechaInicio: string;
    private fechaFin: string;
    private amigo:Enofilo | null=null
    constructor(fechaInicio: string, fechaFin: string, premium: boolean ) {
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
    }
    establecerAmigo(amigo:Enofilo){
        this.amigo= amigo
    }
    sosDeAmigo() {
    }
    sosDeBodega() {
    }
    sosDeSommelier() {
    }
    
}