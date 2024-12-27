import { tomarConfirmacionGenerarReporte, tomarCancelacionGenerarReporte } from "../../main.js";

export interface VinoEncontrado {
    nombreVino: string;
    promedioSomm: number;
    promedioGral: number;
    precioSugeridoVino: number;
    datosBodega: {
        nombreBodega: string,
        regionProvinciaPais: {
                region: string,
                pais?: string
        }
    };
    varietales: string[];
}
// la estructura que deben respetar los datos pasado como objeto del formulario del html al main
export interface Reporte {
    fechaDesde: string;
    fechaHasta: string;
    tipoResena: string;
    formaVisualizacion: string;
}

function validacionFecha(desde: string, hasta: string){
    const fechaDesde = new Date(desde);
    const fechaHasta = new Date(hasta);
    const fechaActual = new Date();
    if (fechaDesde > fechaHasta || fechaActual < fechaDesde || fechaActual < fechaHasta) {
        return false; 
    }
    return true;
}

// Selecciona el botón de cancelar y los elementos que se ocultan o muestran
const botonCancelar = document.getElementById("cancelarGeneracionReporte") as HTMLButtonElement;
const formulario = document.getElementById("reporteForm") as HTMLElement;
const msjCancelacion = document.getElementById("msjCancelacion") as HTMLElement;
const volverAlInicio = document.getElementById("volverInicio") as HTMLButtonElement;
const tablaContainer = document.getElementById("tablaVinos") as HTMLElement;
let msjError = document.getElementById('msjError') as HTMLElement
let msjAlt = document.getElementById('msjAlt') as HTMLElement


const form = document.getElementById('reporteForm')!;

form.addEventListener('submit', function(e) {
    e.preventDefault()
    let fechaDesde = (document.getElementById('fechaDesde') as HTMLInputElement).value;
    let fechaHasta = (document.getElementById('fechaHasta') as HTMLInputElement).value;
    let tipoResena = (document.getElementById('tipoResena') as HTMLOptionElement).value;
    let formaVisualizacion = (document.getElementById('tipoVisualizacion') as HTMLOptionElement).value
    const msjError = document.getElementById('msjError') as HTMLElement

    let msjAlt = document.getElementById('msjAlt') as HTMLElement

    const fechaValida = validacionFecha(fechaDesde, fechaHasta);
    if(!fechaValida){
        msjAlt.style.display = 'none'
        msjError.innerHTML = "Fechas invalidas"
        msjError.style.display = 'block'
        tablaContainer.style.display = 'none'
    }else{
        const reporte: Reporte = {
            fechaDesde: fechaDesde,
            fechaHasta: fechaHasta,
            tipoResena: tipoResena,
            formaVisualizacion: formaVisualizacion
        };
        if(tipoResena != '1' || formaVisualizacion != '1'){
            msjAlt!.style.display = 'block'
        }
    
        const vec = tomarConfirmacionGenerarReporte(reporte)
    
        if (vec.length > 0 ) {
            msjCancelacion.style.display = "none"; 
            msjError.style.display = 'none'
            msjAlt.style.display = 'none'
            tablaContainer.style.display = 'block'
    
            generarTablaVinos(vec)
        }else{
            tablaContainer.style.display = "none"
            msjError.innerHTML = "No se encontraron vinos para las opciones seleccionadas"
            msjError.style.display = 'block'
        }
    }
  

});


function generarTablaVinos(vinos:VinoEncontrado[]){

    const tablaContainer = document.getElementById('tablaVinos');
    if (tablaContainer) {
        let tablaHTML = '<table class="table table-striped">';
        tablaHTML += `
            <thead>
                <tr>
                    <th>N°</th>
                    <th>Nombre Vino</th>
                    <th>Promedio Sommelier</th>
                    <th>Promedio General</th>
                    <th>Precio Sugerido</th>
                    <th>Bodega</th>
                    <th>Varietales</th>
                    <th>Region</th>
                    <th>Pais</th>
                </tr>
            </thead>
            <tbody>
        `;

        vinos.forEach((vino, index) => {
            const varietales = vino.varietales.join(', ')
            const datosBodega = vino.datosBodega
            const Region = datosBodega.regionProvinciaPais
            tablaHTML += `
                <tr>
                    <td>${index + 1}</td>
                    <td>${vino.nombreVino}</td>
                    <td>${vino.promedioSomm}</td>
                    <td>${vino.promedioGral}</td>
                    <td>$${vino.precioSugeridoVino}</td>
                    <td>${datosBodega.nombreBodega}</td>
                    <td>${varietales}</td>
                    <td>${Region.region}</td>
                    <td>${Region.pais ?? 'N/A'}</td>
                </tr>
            `;
        });
        tablaHTML += '</tbody></table>';
        tablaContainer.innerHTML = tablaHTML;

    } else {
        console.error('No se encontró ningún elemento con el id "tablaVinos"');
    }

}

if (botonCancelar && formulario && msjCancelacion && volverAlInicio && tablaContainer) {
    msjCancelacion.style.display = "none";

    botonCancelar.addEventListener("click", () => {
        formulario.style.display = "none";  
        msjCancelacion.style.display = "block"; 
        tablaContainer.style.display = "none"
        msjAlt.style.display = "none"
        msjError.style.display = "none"
        tablaContainer.innerHTML = ""
        
    });

    volverAlInicio.addEventListener("click", () => {
        window.location.href = "index.html"; 

    });
} else {
    console.error("Error: Uno o más elementos necesarios no se encontraron en el DOM.");
}