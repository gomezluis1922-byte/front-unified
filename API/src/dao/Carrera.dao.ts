import getConnection from "../conexion/connection";
import { Carrera } from "../models/Carrera";

export const Listar = async (): Promise<Carrera[]> => {
    try {
        let tsql = "SELECT * FROM Carrera";
        const pool = await getConnection();
        let rs = await pool.query<Carrera>(tsql);
        if (rs != undefined) {
            return rs.recordset;
        }
        return [];
    } catch (error) {
        throw error;
    }
}