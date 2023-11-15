import express from 'express';
import * as companyController from '../controllers/companyController';
import authenticateJWT from '../middlewares/authenticateJWT';

const router = express.Router();

// Rutas para empresas
router.get('/search', authenticateJWT, companyController.searchCompanies);
// ... (agrega más rutas según sea necesario)

export default router;
