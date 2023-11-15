import express from 'express';
import bodyParser from 'body-parser';
import peopleRoutes from './routes/peopleRoutes';
import companyRoutes from './routes/companyRoutes';
import authenticateJWT from './middlewares/authenticateJWT';
import loginRouter from './routes/loginRoutes';
import protectedRouter from './routes/protectedRoutes';
import cors from 'cors';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

// Rutas para autenticación
app.use("/api", loginRouter);
app.use("/api", protectedRouter);

// Verificar la autenticación
// app.use(authenticateJWT);  //<<<<<<<------ esta linea de codigo me hizo perder una noche entera!!!!!

// Rutas para personas
app.use('/people', peopleRoutes);

// Rutas para empresas
app.use('/companies', companyRoutes);




// Rutas de ejemplo
app.get('/', (req, res) => {
  res.json({ message: 
    ' Bienvenido al Backend de este webapp! Disponibles /api, /people y /companies' });
});

app.listen(PORT, () => {
  console.log(`Info msg: app.js >> back server url: http://localhost:${PORT}`);
});
