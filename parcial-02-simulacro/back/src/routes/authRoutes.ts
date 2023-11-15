import express from 'express';
import * as authController from '../controllers/authController';
import authenticateJWT from '../middlewares/authenticateJWT';

const router = express.Router();

// Ruta para iniciar sesión
router.post('/login', authController.login);


// router.post('/login', (req, res, next) => {
//     console.log('Request to /login received');
//     next();
//   }, authController.login);

export default router;
