import { Request, Response } from 'express';
import { Company } from '../models/companyModel';
import { companyHasPeople } from './peopleController';

// Guardar en memoria
const companies: Company[] = [];

export const add = (req: Request, res: Response) => {
  const { nombre, sitioweb, notas } = req.body;

  // Validar que los campos requeridos estén presentes
  if (!nombre || !sitioweb ) {
    return res.status(400).json({ success: false, message: 'Todos los campos son obligatorios!' });
  }

  // Crear una nueva persona
  const newCompany: Company = {
    id: companies.length + 1,
    nombre,
    sitioweb,
    notas: notas || [], // Puede ser un array vacío
  };

  // Agregar la nueva persona al array
  companies.push(newCompany);

  res.status(201).json({ success: true, newCompany });
};




export const remove = (req: Request, res: Response) => {
  const { id } = req.params;
  const companyId = parseInt(id, 10);
  if (isNaN(companyId)) {
    return res.status(400).json({ message: 'ID de empresa no válido.' });
  }
  const index = companies.findIndex(company => company.id === companyId);
  if (index === -1) {
    return res.status(404).json({ message: 'Empresa no encontrada.' });
  }
  // Verificar si la empresa tiene personas asociadas
  if (companyHasPeople(companyId)) {
    return res.status(400).json({ message: 'No se puede eliminar la empresa porque tiene personas asociadas.' });
  }
  // Eliminar la empresa
  const deletedCompany = companies.splice(index, 1)[0];
  res.json({ success: true, deletedCompany });
};



export const getAll = (req: Request, res: Response) => {
  res.json({ success: true, companies });
};




export const getById = (req: Request, res: Response) => {
  const { id } = req.params;

  const companyId = parseInt(id, 10);
  if (isNaN(companyId)) {
    return res.status(400).json({ message: 'ID de persona no válido.' });
  }

  const company = companies.find(p => p.id === companyId);

  if (!company) {
    return res.status(404).json({ message: 'Persona no encontrada.' });
  }

  res.json({ company });
};