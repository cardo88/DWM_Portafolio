import express from 'express';
import * as companyController from '../controllers/companyController';
import authenticateJWT from '../middlewares/authenticateJWT';

const router = express.Router();

// Rutas para empresas
router.post('/', authenticateJWT, companyController.add);
router.delete('/:id', authenticateJWT, companyController.remove);
router.get('/', authenticateJWT, companyController.getAll);
router.get('/:id', authenticateJWT, companyController.getById);


export default router;
