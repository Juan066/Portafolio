export class Siguiendo {
    fechaInicio;
    fechaFin;
    amigo = null;
    constructor(fechaInicio, fechaFin, premium) {
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
    }
    establecerAmigo(amigo) {
        this.amigo = amigo;
    }
    sosDeAmigo() {
    }
    sosDeBodega() {
    }
    sosDeSommelier() {
    }
}
