import * as MateriaDao from '../dao/Materia.dao';
import { Materia } from '../models/Materia';

export const getMaterias = async (): Promise<Materia[]> => {
    try {
        let p = await MateriaDao.Listar();
        return p;
    } catch (error) {
        throw error;
    }
}

export function getMateria() {
    throw new Error('Function not implemented.');
}