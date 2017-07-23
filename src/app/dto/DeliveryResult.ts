/**
 * Created by javier on 7/23/17.
 */
export class DeliveryResult {
    constructor(
        public id_deliv?: number,
        public ubicacion_deliv?: string,
        public dni?: number,
        public estado_deliv?: string,
        public fecha_deliv?: string,
        public horaEstimada_deliv?: string,
        public cod_carta_deliv?: string
    ) {
    }

}