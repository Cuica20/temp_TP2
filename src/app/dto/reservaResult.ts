/**
 * Created by javier on 7/13/17.
 */

export class ReservaResult {

    constructor(
        public cod_reserva?: string,
        public dni?: string,
        public nombre?: string,
        public apellido?: string,
        public correo?: string,
        public fecha?: string,
        public local?: string,
        public hora?: string,
        public telefono?: string,
        public cantidad?: string,
        public mesa?: string,
        public comentario?: string,
        public tipoReserva?: string,
        public estado?: string
    ) {
    }

}