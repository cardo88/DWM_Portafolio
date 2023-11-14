const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// Middleware para verificar la autenticación
const authenticateJWT = (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) return res.sendStatus(401);

  jwt.verify(token, 'secret', (err, user) => {
    if (err) return res.sendStatus(403);

    req.user = user;
    next();
  });
};

// Rutas de ejemplo
app.get('/', (req, res) => {
  res.json({ message: 
    ' Bienvenido al Backend de este webapp! \n Puedes usar: \n > acceder con /login \n > Agregar Persona con /people \n > Eliminar Persona con /people/:id \n > Buscar Persona con /people/search? \n y alguna cosa más...' });
});

// ... Agrega aquí las rutas para la agenda de contactos ...

app.listen(PORT, () => {
  console.log(`Info msg: app.js >> back server url: http://localhost:${PORT}`);
});





// -------- rutas para la agenda de contactos

const contacts = {
  people: [],
  companies: []
};

// Ruta para agregar persona
app.post('/people', authenticateJWT, (req, res) => {
  const person = req.body;
  contacts.people.push(person);
  res.json({ message: 'Person added successfully' });
});

// Ruta para eliminar persona
app.delete('/people/:id', authenticateJWT, (req, res) => {
  const personId = req.params.id;
  res.json({ message: 'Person deleted successfully' });
});

// Ruta para buscar personas por nombre y apellido
app.get('/people/search', authenticateJWT, (req, res) => {
  const { firstName, lastName } = req.query;

  const results = contacts.people.filter(person => {
    const matchFirstName = firstName ? person.firstName.toLowerCase().includes(firstName.toLowerCase()) : true;
    const matchLastName = lastName ? person.lastName.toLowerCase().includes(lastName.toLowerCase()) : true;

    return matchFirstName && matchLastName;
  });
  res.json({ results });
});






//----Implementar seguridad


// Ruta para autenticación
app.post('/login', (req, res) => {
  // Implementa la lógica de autenticación y generación de token aquí
  const username = req.body.username;
  const password = req.body.password;

  if (username === 'user' && password === 'pass') {
    const token = jwt.sign({ username }, 'secret');
    res.json({ token });
  } else {
    res.sendStatus(401);
  }
});
