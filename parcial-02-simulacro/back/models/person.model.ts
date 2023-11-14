export class Person {
    id: number;
    nombres: string;
    apellidos: string;
    email: string;
    telefono: string;
    empresa: string;
    notas: string;
  
    constructor(
      id: number,
      nombres: string,
      apellidos: string,
      email: string,
      telefono: string,
      empresa: string,
      notas: string
    ) {
      this.id = id;
      this.nombres = nombres;
      this.apellidos = apellidos;
      this.email = email;
      this.telefono = telefono;
      this.empresa = empresa;
      this.notas = notas;
    }
  }
  