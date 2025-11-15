import * as EstudianteDao from '../dao/Estudiante.dao';
import { Estudiante } from '../models/Estudiante';

export const getEstudiantes = async (): Promise<Estudiante[]> => {
    try {
        let p = await EstudianteDao.Listar();
        return p;
    } catch (error) {
        throw error;
    }
}

export function getEstudiante() {
    throw new Error('Function not implemented.');
}
