import getConnection from "../conexion/connection";
import { Materia } from "../models/Materia";

export const Listar = async (): Promise<Materia[]> => {
    try {
        let tsql = "SELECT * FROM Materia";
        const pool = await getConnection();
        let rs = await pool.query<Materia>(tsql);
        if (rs != undefined) {
            return rs.recordset;
        }
        return [];
    } catch (error) {
        throw error;
    }
}