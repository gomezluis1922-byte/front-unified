import * as CarreraDao from '../dao/Carrera.dao';
import { Carrera } from '../models/Carrera';

export const getCarreras = async (): Promise<Carrera[]> => {
    try {
        let p = await CarreraDao.Listar();
        return p;
    } catch (error) {
        throw error;
    }
}

export function getCarrera() {
    throw new Error('Function not implemented.');
}
