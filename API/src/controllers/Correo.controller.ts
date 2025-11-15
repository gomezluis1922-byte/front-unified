import * as CorreoDao from '../dao/Correo.dao';
import { Correo } from '../models/Correo';

export const getCorreos = async (): Promise<Correo[]> => {
    try {
        let p = await CorreoDao.Listar();
        return p;
    } catch (error) {
        throw error;
    }
}

export function getCorreo() {
    throw new Error('Function not implemented.');
}
