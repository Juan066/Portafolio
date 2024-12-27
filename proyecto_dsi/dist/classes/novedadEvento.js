export class NovedadEvento {
    codigoDescuentoPremium;
    descipcion;
    esSoloPremium;
    // que tipo?????? poara la fechaHora
    fechaHoraEvento;
    nombreEvento;
    constructor(codigoDescuentoPremium, descipcion, esSoloPremium, fechaHoraEvento, nombreEvento) {
        this.codigoDescuentoPremium = codigoDescuentoPremium;
        this.descipcion = descipcion;
        this.esSoloPremium = esSoloPremium;
        this.fechaHoraEvento = fechaHoraEvento;
        this.nombreEvento = nombreEvento;
    }
    esPremium() {
    }
    estaEnPeriodo() {
    }
    mostrarDescripcion() {
    }
}
