import { Request, Response } from 'express';
import { Company } from '../models/companyModel';

// Guardar en memoria
const companies: Company[] = [];

export const searchCompanies = (req: Request, res: Response) => {
  // Implementa la lógica para buscar empresas si es necesario
  // ...
  res.json({ results: companies });
};

// Otras funciones del controlador...
