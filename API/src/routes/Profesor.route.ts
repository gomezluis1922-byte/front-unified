import * as ProfesorController from '../controllers/Profesor.controller';
import express from 'express';

const router = express.Router();

router.get('/', (_, rs) => {
    ProfesorController.getProfesores()
        .then(obj => {
            rs.json(obj);
        })
        .catch(e => {
            console.error(e);
            rs.status(500);
        })
});

export default router;