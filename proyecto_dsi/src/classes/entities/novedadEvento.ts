export class NovedadEvento {

    private codigoDescuentoPremium: number;
    private descipcion: string;
    private esSoloPremium: boolean;
    // que tipo?????? poara la fechaHora
    private fechaHoraEvento: any;
    private nombreEvento: string;

    constructor(codigoDescuentoPremium: number, descipcion: string, esSoloPremium: boolean ,fechaHoraEvento: any, nombreEvento: string) {
        this.codigoDescuentoPremium = codigoDescuentoPremium;
        this.descipcion = descipcion;
        this.esSoloPremium = esSoloPremium;
        this.fechaHoraEvento = fechaHoraEvento;
        this.nombreEvento = nombreEvento
    }
    esPremium() {
    }
    estaEnPeriodo() {
    }
    mostrarDescripcion() {
    }
    
}