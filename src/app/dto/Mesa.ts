/**
 * Created by javier on 7/18/17.
 */
export class Mesa {
    constructor(
        public cod_mesa?: string,
        public disponibilidad?: boolean,
        public ambiente?: string,
        public sugerencia?: string,
        public reservado_dni?: boolean

    ) {
    }
}