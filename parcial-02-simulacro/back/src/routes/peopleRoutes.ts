import express from 'express';
import * as peopleController from '../controllers/peopleController';
import authenticateJWT from '../middlewares/authenticateJWT';

const router = express.Router();

// Rutas para personas
router.get('/search', authenticateJWT, peopleController.search);
router.post('/', authenticateJWT, peopleController.add);
router.delete('/:id', authenticateJWT, peopleController.remove);
router.get('/', authenticateJWT, peopleController.getAll);
router.get('/:id', authenticateJWT, peopleController.getById);



export default router;
