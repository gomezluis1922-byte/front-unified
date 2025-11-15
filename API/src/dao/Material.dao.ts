import getConnection from "../conexion/connection";
import { Material } from "../models/Material";

export const Listar = async (): Promise<Material[]> => {
    try {
        let tsql = "SELECT * FROM Material";
        const pool = await getConnection();
        let rs = await pool.query<Material>(tsql);
        if (rs != undefined) {
            return rs.recordset;
        }
        return [];
    } catch (error) {
        throw error;
    }
}