export class CobroPremium {
    esAnual;
    fechaPago;
    monto;
    nroOperacionMercadoPago;
    constructor(esAnual, fechaPago, monto, nroOperacionMercadoPago) {
        this.esAnual = esAnual;
        this.fechaPago = fechaPago;
        this.monto = monto;
        this.nroOperacionMercadoPago = nroOperacionMercadoPago;
    }
}
