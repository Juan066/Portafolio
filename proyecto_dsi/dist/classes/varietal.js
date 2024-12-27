export class Varietal {
    descripcion;
    porcentajeComposicion;
    tipoUva;
    constructor(descripcion, porcentajeComposicion, tipoUva) {
        this.descripcion = descripcion;
        this.porcentajeComposicion = porcentajeComposicion;
        this.tipoUva = tipoUva;
    }
    conocerTipoUva() {
    }
    esDeTipoUva() {
    }
    mostrarPorcentaje() {
    }
    getDescripcion() {
        return this.descripcion;
    }
}
