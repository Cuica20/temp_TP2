/**
 * Created by javier on 7/18/17.
 */
export class Mesa {
    constructor(
        public cod_mesa?: number,
        public nombre_mesa?: string,
        public disponibilidad?: boolean,
        public fecha_mesa?: Date,
        public hora_mesa?: string,
        public sugerencia_mesa?: string,
        public reservadoPor_mesa?: number

    ) {
    }
}