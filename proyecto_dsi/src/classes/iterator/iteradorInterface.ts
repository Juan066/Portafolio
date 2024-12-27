export interface IIterador {
    primero():void
    siguiente():void
    haTerminado():boolean
    elementoActual():Object | null
// con ? para indicar que no es necesario que se implemente el metodo en las clases que implementen la interfaz
    comprobarFiltro?(filtro: Object[]):boolean

}