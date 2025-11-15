import * as MaterialController from '../controllers/Material.controller';
import express from 'express';

const router = express.Router();

router.get('/', (_, rs) => {
    MaterialController.getMateriales()
        .then(obj => {
            rs.json(obj);
        })
        .catch(e => {
            console.error(e);
            rs.status(500);
        })
});

export default router;