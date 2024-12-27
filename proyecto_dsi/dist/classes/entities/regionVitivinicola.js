export class RegionVitivinicola {
    descripcion;
    nombre;
    constructor(descripcion, nombre) {
        this.descripcion = descripcion;
        this.nombre = nombre;
    }
    conocerBodega() {
    }
    contarBodegas() {
    }
    getNombre() {
        return this.nombre;
    }
    obtenerProvincia(provincias) {
        for (const provincia of provincias) {
            if (provincia.tieneRegion(this.nombre)) {
                return provincia;
            }
        }
    }
    buscarPais(provincias, paises) {
        const provincia = this.obtenerProvincia(provincias);
        if (provincia) {
            const pais = provincia.obtenerPais(paises);
            return pais;
        }
    }
}
