import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import "dotenv/config";

const secretKey = process.env.JWT_SECRET_KEY;
console.log("04");
export const login = (req: Request, res: Response) => {
  // Aquí deberías verificar las credenciales del usuario.
  // Si las credenciales son válidas, genera un token JWT y lo devuelve.
  console.log("05");
  const username = req.body.username;
  const password = req.body.password;

  // Ejemplo: Verificar credenciales (reemplázalo con tu lógica de autenticación)
  console.log("03");
  if (username === 'lunes' && password === '123') {
    console.log("02");
    const token = jwt.sign({ username }, secretKey as string, { expiresIn: '1h' });
    res.json({ token });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
};

// Otras funciones relacionadas con la autenticación pueden ir aquí...
