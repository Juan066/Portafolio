export class CobroPremium {

    private esAnual: boolean;
    private fechaPago: string;
    private monto: number;
    private nroOperacionMercadoPago: number;

    constructor(esAnual: boolean, fechaPago: string, monto: number, nroOperacionMercadoPago: number) {
        this.esAnual = esAnual;
        this.fechaPago = fechaPago;
        this.monto = monto;
        this.nroOperacionMercadoPago = nroOperacionMercadoPago;
    }   
   
}