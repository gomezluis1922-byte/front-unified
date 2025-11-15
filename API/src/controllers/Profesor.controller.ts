import * as ProfesorDao from '../dao/Profesor.dao';
import { Profesor } from '../models/Profesor';

export const getProfesores = async (): Promise<Profesor[]> => {
    try {
        let p = await ProfesorDao.Listar();
        return p;
    } catch (error) {
        throw error;
    }
}

export function getPRofesor() {
    throw new Error('Function not implemented.');
}
