export class Pais {
    nombre;
    provincias = [];
    constructor(nombre) {
        this.nombre = nombre;
    }
    establecerProvincia(provincia) {
        this.provincias.push(provincia);
    }
    contarBodegas() {
    }
    getNombre() {
        return this.nombre;
    }
    tieneProvincia(provincia) {
        return this.provincias.some(p => p.getNombre() === provincia.getNombre());
    }
}
