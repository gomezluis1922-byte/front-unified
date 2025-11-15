import * as EstudianteController from '../controllers/Estudiante.controller';
import express from 'express';

const router = express.Router();

router.get('/', (_, rs) => {
    EstudianteController.getEstudiantes()
        .then(obj => {
            rs.json(obj);
        })
        .catch(e => {
            console.error(e);
            rs.status(500);
        })
});

export default router;