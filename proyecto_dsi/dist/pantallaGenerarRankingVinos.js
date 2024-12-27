// import { crearVinosAutomaticos, crearResenaAleatoria} from "./crearVinos";
import { GestorReporteRankingVinos } from "./classes/gestorReporteRankingVinos.js";
import { vinosArray } from "./arrayVinos.js";
// array de todos los vinos. A futuro meterlo en .json y usar 'fs' de node
// const vinosArray: Vino[] = vinosData
// const vinos:Vino[] = []
// instancia del gestor al que le paso los metodos
let gestorReporte = new GestorReporteRankingVinos(vinosArray);
// let pantalla = new Pantalla(gestorReporte)
export function tomarConfirmacionGenerarReporte(reporte) {
    let datosReporte = reporte;
    gestorReporte.tomarConfirmacionGenerarReporte(datosReporte, vinosArray);
}
;
export function informarGeneracion(vinos) {
    // de aca, les encargo para que muestre en el front en una tabla los vinos en el top 10 con la info solicitada.
}
// const reporte:Reporte = {
//     fechaDesde: "13/12/2013",
//     fechaHasta: "10/12/2024",
//     tipoResena: "1",
//     formaVisualizacion: "excel",
// }
// gestorReporte.tomarConfirmacionGenerarReporte(reporte, vinosArray);
