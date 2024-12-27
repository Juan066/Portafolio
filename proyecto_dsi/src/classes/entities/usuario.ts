import { CobroPremium } from "./cobroPremium.js";
export class Usuario {

    private contrasena: string;
    private nombre: string;
    private premium: boolean;
    private cobroPremium:CobroPremium | null=null

    constructor(contrasena: string, nombre: string, premium: boolean ) {
        this.contrasena = contrasena;
        this.nombre = nombre;
        this.premium = premium;
    }
    establecerCobroPremium(cobroPremium:CobroPremium){
        this.cobroPremium= cobroPremium
    }
    esPremium() {
    }
    esTuUsuario() {
    }
    mostrarNombre() {
    }
    
}