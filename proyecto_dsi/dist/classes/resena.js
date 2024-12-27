export class Resena {
    comentario;
    premium;
    fechaResena;
    puntaje;
    vino = null;
    constructor(comentario, premium, fechaResena, puntaje) {
        this.comentario = comentario;
        this.premium = premium;
        this.fechaResena = fechaResena;
        this.puntaje = puntaje;
    }
    establecerVino(vino) {
        this.vino = vino;
    }
    esPremium() {
    }
    esTuUsuario() {
    }
    mostrarNombre() {
    }
    getPuntaje() {
        return this.puntaje;
    }
    sosDeSommelier() {
        if (this.premium) {
            return true;
        }
        return false;
    }
    esEnPeriodoFecha(desde, hasta) {
        const fecha = new Date(this.fechaResena);
        const desdeEnDate = new Date(desde);
        const hastaEnDate = new Date(hasta);
        if (fecha >= desdeEnDate && fecha <= hastaEnDate) {
            return true;
        }
        else {
            return false;
        }
    }
    getPuntajeSomm() {
        if (this.sosDeSommelier()) {
            return this.puntaje;
        }
        // nunca va a retornar 0, pero para no tener que hacer la validacion por el tipo de dato
        return 0;
    }
}
