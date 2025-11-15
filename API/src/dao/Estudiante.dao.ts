import getConnection from "../conexion/connection";
import { Estudiante } from "../models/Estudiante";

export const Listar = async (): Promise<Estudiante[]> => {
    try {
        let tsql = "SELECT * FROM Estudiante";
        const pool = await getConnection();
        let rs = await pool.query<Estudiante>(tsql);
        if (rs != undefined) {
            return rs.recordset;
        }
        return [];
    } catch (error) {
        throw error;
    }
}