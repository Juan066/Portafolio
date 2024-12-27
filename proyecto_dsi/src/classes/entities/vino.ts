import { Maridaje } from "./maridaje.js";
import { Resena } from "./resena.js";
import { Varietal } from "./varietal.js";
import { Bodega } from "./bodega.js";
import { IteradorResena } from "../iterator/iteradorResena.js";
import { Provincia } from "./provincia.js";
import { Pais } from "./pais.js";
export class Vino {

    private anada: number;
    private imagenEtiqueta: string;
    private nombre: string;
    private notaDeCataBodega: string;
    private precioArs: number;
    private maridaje: Maridaje[];
    private resena: Resena[] = [];
    private varietal: Varietal[]
    private bodega: Bodega

    constructor(anada: number, imagenEtiqueta: string, nombre: string,notaDeCataBodega: string, precioArs: number, maridaje: Maridaje[],varietal: Varietal[], bodega: Bodega) {
        this.anada = anada;
        this.imagenEtiqueta = imagenEtiqueta;
        this.nombre = nombre;
        this.notaDeCataBodega = notaDeCataBodega;
        this.precioArs = precioArs;
        this.maridaje = maridaje;
        this.varietal = varietal
        this.bodega = bodega

    }

    agregarResena(resenaNueva:Resena){
        this.resena.push(resenaNueva)
        resenaNueva.establecerVino(this)
    }
    mostrarResena(vinoPasado:Vino){
        console.log(vinoPasado.resena)
    }
    calcularRanking() {
    }
    compararEtiqueta() {
    }
    esDeBodega() {
    }
    esDeRegioVitvinicola() {
    }

    getNombre(){
        return this.nombre
    }
    getPrecioSugerido(){
        return this.precioArs
    }

    buscarDatosBodega(provincias: Provincia[], paises: Pais[]){
        const nombreBodega = this.bodega.getNombre()
        // el regionProvPais es un obtejo
        const regionProvinciaPais = this.bodega.buscarRegionProvinciaPais(provincias, paises)
        
        return {nombreBodega, regionProvinciaPais}
    }
    
    buscarVarietal(){
        let varietales = []
        for(let i=0; i< this.varietal.length; i ++){
            let varietal = this.varietal[i].getDescripcion()
            varietales.push(varietal)
        }
        return varietales
    }

    // a esta no se usa mas, por el iterador
    conocerResenasEnPeriodoGral(desde:string, hasta:string){
        let puntajes = []
        for(let i=0; i< this.resena.length; i ++){
            let esDePeriodo = this.resena[i].esEnPeriodoFecha(desde, hasta)
            if(esDePeriodo){
                let punt = this.resena[i].getPuntaje()
                puntajes.push(punt)
            }
        }
        return puntajes
    }

    
    conocerResenas(desde:string, hasta:string){
        let puntajesGral = []

        for(let i=0; i< this.resena.length; i ++){
            let esDePeriodo = this.resena[i].esEnPeriodoFecha(desde, hasta)
            if(esDePeriodo){
                let punt = this.resena[i].getPuntaje()
                puntajesGral.push(punt)
            }
        }
        return puntajesGral
    }

    crearIterador(resena:Resena[], filtro:string[]){
        return new IteradorResena(resena, filtro);
    }

    conocerResenasEnPeriodo(desde:string, hasta: string){
        let puntajesSomm = []
        let puntajesGen = []
        // Iterador
        let iteradorResena = this.crearIterador(this.resena, [desde, hasta]);
        iteradorResena.primero()
        while(iteradorResena.haTerminado() == false){

            let resenaActual = iteradorResena.elementoActual()
            if(resenaActual){
                let puntGen = resenaActual.getPuntaje()
                let puntSomm = resenaActual.getPuntajeSomm()

                puntajesSomm.push(puntSomm)
                puntajesGen.push(puntGen)
            }
            iteradorResena.siguiente()
        }
        return {puntajesGen, puntajesSomm}
    }
}