import * as CorreoController from '../controllers/Correo.controller';
import express from 'express';

const router = express.Router();

router.get('/', (_, rs) => {
    CorreoController.getCorreos()
        .then(obj => {
            rs.json(obj);
        })
        .catch(e => {
            console.error(e);
            rs.status(500);
        })
});

export default router;