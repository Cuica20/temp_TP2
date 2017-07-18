/**
 * Created by javier on 7/18/17.
 */
export class Cliente {
    constructor(
        public dni?: number,
        public nombre?: string,
        public ap_paterno?: string,
        public ap_materno?: string,
        public correo?: string,
        public telefono?: string

    ) {
    }
}