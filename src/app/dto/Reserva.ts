/**
 * Created by javier on 7/17/17.
 */
export class Reserva {

    constructor(
        public cod_reserva?: number,
        public dni?: number,
        public nombre?: string,
        public ap_paterno?: string,
        public correo?: string,
        public fecha_reserva?: string,
        public nombre_local?: string,
        public hora?: string,
        public telefono?: string,
        public cantidad_personas?: string,
        public cod_mesa?: number,
        public cod_mesa_anterior?: number,
        public nombre_mesa?: string,
        public comentario?: string,
        public tipo_reserva?: string,
        public estado?: string,
        public motivo?: string,

    ) {
    }

}