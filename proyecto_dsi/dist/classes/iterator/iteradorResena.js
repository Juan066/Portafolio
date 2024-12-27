export class IteradorResena {
    listaResena;
    actual;
    filtro;
    constructor(listaResena, filtro) {
        this.listaResena = listaResena;
        this.actual = 0;
        this.filtro = filtro;
    }
    primero() {
        this.actual = 0;
    }
    siguiente() {
        this.actual++;
    }
    haTerminado() {
        return this.actual >= this.listaResena.length;
    }
    elementoActual() {
        let elemActual = this.listaResena[this.actual];
        if (this.comprobarFiltro(this.filtro)) {
            return elemActual;
        }
        return null;
    }
    // el filtro para las resenas es que se hayan realizado en el periodo ingresado y que hayan sido hechas por un sommelier 
    comprobarFiltro(filtro) {
        let elemActual = this.listaResena[this.actual];
        if (elemActual.esEnPeriodoFecha(filtro[0], filtro[1]) && elemActual.sosDeSommelier()) {
            return true;
        }
        return false;
    }
}
