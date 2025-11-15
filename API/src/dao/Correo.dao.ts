import getConnection from "../conexion/connection";
import { Correo } from "../models/Correo";

export const Listar = async (): Promise<Correo[]> => {
    try {
        let tsql = "SELECT * FROM Correo";
        const pool = await getConnection();
        let rs = await pool.query<Correo>(tsql);
        if (rs != undefined) {
            return rs.recordset;
        }
        return [];
    } catch (error) {
        throw error;
    }
}