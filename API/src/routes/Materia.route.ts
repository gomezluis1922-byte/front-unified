import * as MateriaController from '../controllers/Materia.controller';
import express from 'express';

const router = express.Router();

router.get('/', (_, rs) => {
    MateriaController.getMaterias()
        .then(obj => {
            rs.json(obj);
        })
        .catch(e => {
            console.error(e);
            rs.status(500);
        })
});

export default router;