import { IIterador } from "./iteradorInterface.js";
import { Resena } from "../entities/resena.js";

export class IteradorResena implements IIterador{

    private listaResena: Resena[]
    private actual: number
    private filtro: string[]
    constructor(listaResena:Resena[], filtro:string[]){
        this.listaResena = listaResena
        this.actual = 0
        this.filtro = filtro
    }
    primero(): void {
        this.actual = 0
    }
    siguiente(): void {
        this.actual++
    }
    haTerminado(): boolean {
        return this.actual >= this.listaResena.length
    }
    elementoActual(): Resena |null  {
        let elemActual = this.listaResena[this.actual]
        if (this.comprobarFiltro(this.filtro)){
            return elemActual
        }
        return null
    }

    // el filtro para las resenas es que se hayan realizado en el periodo ingresado y que hayan sido hechas por un sommelier 
    comprobarFiltro(filtro: string[]): boolean {
        let elemActual = this.listaResena[this.actual]
        if (elemActual.esEnPeriodoFecha(filtro[0], filtro[1]) && elemActual.sosDeSommelier()){
        return true;
        }
        return false;

    }
    
}