/**
 * Created by javier on 6/12/17.
 */
export class Pedido{
    constructor(
        public idPedido?: number,
        public cliente?: string,
        public pedido?: string,
        public direccion?: string,
        public horaLlegada?: string
    ){}
}