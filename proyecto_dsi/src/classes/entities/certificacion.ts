export class Certificacion {

    private adjuntoURL: string;
    private descripcion: string;
    private fechaFin: string;
    private fechaInicio: string;
    private institucionOtorgante: string;
    private nombre: string;

    constructor(adjuntoURL: string, descripcion: string, fechaFin: string,fechaInicio: string, institucionOtorgante: string, nombre:string) {
        this.adjuntoURL = adjuntoURL;
        this.descripcion = descripcion;
        this.fechaFin = fechaFin;
        this.fechaInicio = fechaInicio;
        this.institucionOtorgante = institucionOtorgante;
        this.nombre = nombre
    }
    esEnPeriodo() {
    }
    mostrarInstitucion() {
    }
    verAdjunto() {
    }
   
}