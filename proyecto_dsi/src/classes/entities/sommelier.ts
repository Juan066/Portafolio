import { Usuario } from "./usuario.js";
import { Resena } from "./resena.js";
import { Certificacion } from "./certificacion.js";
export class Sommelier {

    private fechaValidacion: string;
    private nombre: string;
    private notaPresentacion: string;
    private usuario: Usuario;
    private resena: Resena;
    private certificacion: Certificacion | null = null


    constructor(fechaValidacion: string, nombre: string, notaPresentacion: string, usuario: Usuario, resena: Resena) {
        this.fechaValidacion = fechaValidacion;
        this.nombre = nombre;
        this.notaPresentacion = notaPresentacion;
        this.usuario = usuario;
        this.resena = resena;
    }

    establecerCertificacion(certificacion:Certificacion){
        this.certificacion= certificacion
    }
    conocerCertificaciones() {
    }
    validarSommelier() {
    }
      
}