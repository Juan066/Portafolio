import { GestorReporteRankingVinos } from "./classes/control/gestorReporteRankingVinos.js";
import { Vino } from "./classes/entities/vino.js";
import { VinoSuperbase } from "./services/VinosParseadosService.js";
import { Provincia } from "./classes/entities/provincia.js";
import { Pais } from "./classes/entities/pais.js";
import { Reporte } from "./public/ts/app.js";

let vinos: Vino[] = [];
let paises: Pais[] = []
let provincias: Provincia[] = []
// creo instancia de conexion con la bd, y traigo todos los vinos, paises y provincias para trabajar
const vinoService = new VinoSuperbase();
vinos = await vinoService.getAllVinos()
paises = await vinoService.getAllPaises();
provincias = await vinoService.getAllProvincias();


// instancia del gestor al que le paso los metodos
let gestorReporte = new GestorReporteRankingVinos(vinos)

export function tomarConfirmacionGenerarReporte(reporte: Reporte) {
    let datosReporte = reporte
    // esta validacion tambien esta en el front. Se retorna array vacio porque la funcion de app.ts que 
    if (datosReporte.formaVisualizacion != '1' || datosReporte.tipoResena != '1') {
        console.info('No se encuentra disponible la funcionalidad de reporte con estas opciones. Intente para Sommelier y Excel')
        return []
    }
    let topDiez = gestorReporte.tomarConfirmacionGenerarReporte(datosReporte, vinos, provincias, paises);

    console.log(topDiez)
    return topDiez
};
export function tomarCancelacionGenerarReporte() {
    gestorReporte.tomarCancelacionGenerarReporte()
}
export function informarGeneracion(vinos: any) {
    // front muestra directamente el la tabla
    console.log('Se ha generado correctamente el ranking')
}

export function noSeEncuentrasResenasSommelier() {
    console.log()
    tomarConfirmacionDeLectura()
}
export function tomarConfirmacionDeLectura() {
    gestorReporte.tomarConfirmacionDeLectura()
}


