import { IteradorResena } from "./iteradorResena.js";
export class Vino {
    anada;
    imagenEtiqueta;
    nombre;
    notaDeCataBodega;
    precioArs;
    maridaje;
    resena = [];
    varietal;
    bodega;
    constructor(anada, imagenEtiqueta, nombre, notaDeCataBodega, precioArs, maridaje, varietal, bodega) {
        this.anada = anada;
        this.imagenEtiqueta = imagenEtiqueta;
        this.nombre = nombre;
        this.notaDeCataBodega = notaDeCataBodega;
        this.precioArs = precioArs;
        this.maridaje = maridaje;
        this.varietal = varietal;
        this.bodega = bodega;
    }
    agregarResena(resenaNueva) {
        this.resena.push(resenaNueva);
        resenaNueva.establecerVino(this);
    }
    mostrarResena(vinoPasado) {
        console.log(vinoPasado.resena);
    }
    calcularRanking() {
    }
    compararEtiqueta() {
    }
    esDeBodega() {
    }
    esDeRegioVitvinicola() {
    }
    getNombre() {
        return this.nombre;
    }
    getPrecioSugerido() {
        return this.precioArs;
    }
    buscarDatosBodega(provincias, paises) {
        const nombreBodega = this.bodega.getNombre();
        // el regionProvPais es un obtejo
        const regionProvinciaPais = this.bodega.buscarRegionProvinciaPais(provincias, paises);
        return { nombreBodega, regionProvinciaPais };
    }
    buscarVarietal() {
        let varietales = [];
        for (let i = 0; i < this.varietal.length; i++) {
            let varietal = this.varietal[i].getDescripcion();
            varietales.push(varietal);
        }
        return varietales;
    }
    // a esta no se usa mas, por el iterador
    conocerResenasEnPeriodoGral(desde, hasta) {
        let puntajes = [];
        for (let i = 0; i < this.resena.length; i++) {
            let esDePeriodo = this.resena[i].esEnPeriodoFecha(desde, hasta);
            if (esDePeriodo) {
                let punt = this.resena[i].getPuntaje();
                puntajes.push(punt);
            }
        }
        return puntajes;
    }
    conocerResenas(desde, hasta) {
        let puntajesGral = [];
        for (let i = 0; i < this.resena.length; i++) {
            let esDePeriodo = this.resena[i].esEnPeriodoFecha(desde, hasta);
            if (esDePeriodo) {
                let punt = this.resena[i].getPuntaje();
                puntajesGral.push(punt);
            }
        }
        return puntajesGral;
    }
    crearIterador(resena, filtro) {
        return new IteradorResena(resena, filtro);
    }
    conocerResenasEnPeriodo(desde, hasta) {
        let puntajesSomm = [];
        let puntajesGen = [];
        // Iterador
        let iteradorResena = this.crearIterador(this.resena, [desde, hasta]);
        iteradorResena.primero();
        while (iteradorResena.haTerminado() == false) {
            let resenaActual = iteradorResena.elementoActual();
            if (resenaActual) {
                let puntGen = resenaActual.getPuntaje();
                let puntSomm = resenaActual.getPuntajeSomm();
                puntajesSomm.push(puntSomm);
                puntajesGen.push(puntGen);
            }
            iteradorResena.siguiente();
        }
        return { puntajesGen, puntajesSomm };
    }
}
