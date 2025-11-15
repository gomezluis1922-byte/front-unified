import getConnection from "../conexion/connection";
import { Profesor } from "../models/Profesor";

export const Listar = async (): Promise<Profesor[]> => {
    try {
        let tsql = "SELECT * FROM Profesor";
        const pool = await getConnection();
        let rs = await pool.query<Profesor>(tsql);
        if (rs != undefined) {
            return rs.recordset;
        }
        return [];
    } catch (error) {
        throw error;
    }
}