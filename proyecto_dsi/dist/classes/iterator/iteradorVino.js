export class IteradorVino {
    listaVino;
    actual;
    constructor(listaVino) {
        this.listaVino = listaVino;
        this.actual = 0;
    }
    primero() {
        this.actual = 0;
    }
    siguiente() {
        this.actual++;
    }
    haTerminado() {
        // true o false dependiendo de si la posicion actual es mayor o igual a la longitud del array 
        return this.actual >= this.listaVino.length;
    }
    //vinos con resena 
    elementoActual() {
        return this.listaVino[this.actual];
    }
}
