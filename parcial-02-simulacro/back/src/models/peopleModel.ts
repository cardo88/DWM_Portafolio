import { Company } from "./companyModel";

export interface Person {
    id: number;
    nombre: string;
    apellido: string;
    email: string;
    telefono: string;
    empresa: Company;
    notas: string[];
  }