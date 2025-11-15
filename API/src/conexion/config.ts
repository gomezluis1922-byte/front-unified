import { config } from "mssql";

export const sqlConfig: config = {
    user: 'sa',
    password: '1234',
    database: 'Unified',
    server: 'localhost',
    //port:1433  //Optional si es otro no standard
    options: {
        trustServerCertificate: true,
        encrypt: true
    }
}