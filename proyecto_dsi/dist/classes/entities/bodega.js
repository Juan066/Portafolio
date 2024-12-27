export class Bodega {
    coordenadasUbicacion;
    descripcion;
    historia;
    nombre;
    periodoActualizacion;
    regionVitivinicola;
    constructor(coordenadasUbicacion, descripcion, historia, nombre, periodoActualizacion, region) {
        this.coordenadasUbicacion = coordenadasUbicacion;
        this.descripcion = descripcion;
        this.historia = historia;
        this.nombre = nombre;
        this.periodoActualizacion = periodoActualizacion;
        this.regionVitivinicola = region;
    }
    contarResenias() {
    }
    mostrarTodosVinos() {
    }
    getNombre() {
        return this.nombre;
    }
    buscarRegionProvinciaPais(provincias, paises) {
        const region = this.regionVitivinicola.getNombre();
        const pais = this.regionVitivinicola.buscarPais(provincias, paises);
        return { region, pais };
    }
}
