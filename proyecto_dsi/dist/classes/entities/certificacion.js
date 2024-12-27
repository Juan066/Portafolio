export class Certificacion {
    adjuntoURL;
    descripcion;
    fechaFin;
    fechaInicio;
    institucionOtorgante;
    nombre;
    constructor(adjuntoURL, descripcion, fechaFin, fechaInicio, institucionOtorgante, nombre) {
        this.adjuntoURL = adjuntoURL;
        this.descripcion = descripcion;
        this.fechaFin = fechaFin;
        this.fechaInicio = fechaInicio;
        this.institucionOtorgante = institucionOtorgante;
        this.nombre = nombre;
    }
    esEnPeriodo() {
    }
    mostrarInstitucion() {
    }
    verAdjunto() {
    }
}
