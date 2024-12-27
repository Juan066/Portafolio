import { GestorReporteRankingVinos } from "../control/gestorReporteRankingVinos.js";
export class Pantalla {
    private gestor: GestorReporteRankingVinos<any> ;

    
    constructor(gestor:GestorReporteRankingVinos<any> ,){
        this.gestor = gestor;
    }

    // constructor(apellido: string,  imagenPerfil: string, nombre: string) {
    //     this.apellido = apellido;
    //     this.imagenPerfil = imagenPerfil;
    //     this.nombre = nombre;
    // }

    generarRankingVinos() {
    }
    solicitarFechaDesdeHasta() {
    } 
    tomarFechaDesdeHasta() {
    } 
    solicitarTiposResenas() {
    } 
    tomarTipoResena() {
    } 
    solicitarFormaVisualizacion() {
    } 
    tomarTipoVisualizacion() {
    } 
    solicitarConfirmacionGenerarReporte() {
    } 
    tomarConfirmacionGenerarReporte() {
    } 
    informarGeneracion() {
    } 
}