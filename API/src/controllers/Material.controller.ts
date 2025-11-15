import * as MaterialDao from '../dao/Material.dao';
import { Material } from '../models/Material';

export const getMateriales = async (): Promise<Material[]> => {
    try {
        let p = await MaterialDao.Listar();
        return p;
    } catch (error) {
        throw error;
    }
}

export function getMaterial() {
    throw new Error('Function not implemented.');
}