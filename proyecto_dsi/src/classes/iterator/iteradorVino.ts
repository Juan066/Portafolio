import { IIterador } from "./iteradorInterface.js";
import { Vino } from "../entities/vino.js";

export class IteradorVino implements IIterador{

    private listaVino: Vino[]
    private actual: number
    constructor(listaVino:Vino[]){
        this.listaVino = listaVino
        this.actual = 0
    }

    primero(): void {
        this.actual = 0
    }

    siguiente(): void {
        this.actual++
    }
    haTerminado(): boolean {
        // true o false dependiendo de si la posicion actual es mayor o igual a la longitud del array 
        return this.actual >= this.listaVino.length
        
    }
    //vinos con resena 
    elementoActual(): Vino  {
        return this.listaVino[this.actual]
    }


}