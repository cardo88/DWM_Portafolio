import { Request, Response } from 'express';
import { Person } from '../models/peopleModel';

// Guardar en memoria
const people: Person[] = [];



export const add = (req: Request, res: Response) => {
  const { nombre, apellido, email, telefono, empresa, notas } = req.body;

  // Validar que los campos requeridos estén presentes
  if (!nombre || !apellido || !email || !telefono || !empresa) {
    return res.status(400).json({ success: false, message: 'Todos los campos son obligatorios!' });
  }

  // Crear una nueva persona
  const newPerson: Person = {
    id: people.length + 1,
    nombre,
    apellido,
    email,
    telefono,
    empresa,
    notas: notas || [], // Puede ser un array vacío
  };

  // Agregar la nueva persona al array
  people.push(newPerson);

  res.status(201).json({ success: true, newPerson });
};




export const remove = (req: Request, res: Response) => {
  const { id } = req.params;

  // Encuentra la persona en el array por su ID
  const index = people.findIndex(person => person.id === parseInt(id, 10));

  if (index !== -1) {
    // Si la persona existe, la elimina del array
    const deletedPerson = people.splice(index, 1)[0];
    res.json({ success: true, deletedPerson });
  } else {
    res.status(404).json({ success: false, message: 'Persona no encontrada' });
  }
};


export const search = (req: Request, res: Response) => {
  const { firstName, lastName } = req.query;
  const results = people.filter(person => {
    const matchFirstName = (person.nombre as string || '').toLowerCase().includes((firstName as string || '').toLowerCase());
    const matchLastName = (person.apellido as string || '').toLowerCase().includes((lastName as string || '').toLowerCase());
    return matchFirstName && matchLastName;
  });
  res.json({ results });
};



export const getAll = (req: Request, res: Response) => {
  res.json({ success: true, people });
};




export const getById = (req: Request, res: Response) => {
  const { id } = req.params;

  const personaId = parseInt(id, 10);
  if (isNaN(personaId)) {
    return res.status(400).json({ message: 'ID de persona no válido.' });
  }

  const persona = people.find(p => p.id === personaId);

  if (!persona) {
    return res.status(404).json({ message: 'Persona no encontrada.' });
  }

  res.json({ persona });
};


export const companyHasPeople = (companyId: number): boolean => {
  // Verificar si hay personas asociadas a la compañía
  return people.some(persona => persona.empresa === companyId);
};