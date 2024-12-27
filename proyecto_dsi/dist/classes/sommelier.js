export class Sommelier {
    fechaValidacion;
    nombre;
    notaPresentacion;
    usuario;
    resena;
    certificacion = null;
    constructor(fechaValidacion, nombre, notaPresentacion, usuario, resena) {
        this.fechaValidacion = fechaValidacion;
        this.nombre = nombre;
        this.notaPresentacion = notaPresentacion;
        this.usuario = usuario;
        this.resena = resena;
    }
    establecerCertificacion(certificacion) {
        this.certificacion = certificacion;
    }
    conocerCertificaciones() {
    }
    validarSommelier() {
    }
}
