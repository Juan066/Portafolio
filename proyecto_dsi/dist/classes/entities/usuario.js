export class Usuario {
    contrasena;
    nombre;
    premium;
    cobroPremium = null;
    constructor(contrasena, nombre, premium) {
        this.contrasena = contrasena;
        this.nombre = nombre;
        this.premium = premium;
    }
    establecerCobroPremium(cobroPremium) {
        this.cobroPremium = cobroPremium;
    }
    esPremium() {
    }
    esTuUsuario() {
    }
    mostrarNombre() {
    }
}
