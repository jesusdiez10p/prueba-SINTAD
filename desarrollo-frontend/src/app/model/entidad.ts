import { Contribuyente } from "./contribuyente";
import { Documento } from "./documento";

export class Entidad {
    id!: number;
    documento!: Documento;
    nroDocumento!: string;
    razonSocial!: string;
    nombreComercial!: string;
    contribuyente!: Contribuyente;
    direccion!: string;
    telefono!: string;
    estado!: number;
}