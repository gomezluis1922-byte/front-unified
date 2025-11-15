import * as CarreraController from '../controllers/Carrera.controller';
import express from 'express';

const router = express.Router();

router.get('/', (_, rs) => {
    CarreraController.getCarreras()
        .then(obj => {
            rs.json(obj);
        })
        .catch(e => {
            console.error(e);
            rs.status(500);
        })
});

export default router;