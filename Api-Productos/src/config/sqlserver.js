
import sql from "mssql";

const config ={

    user:process.env.SQL_USER,
    password: process.env.SQL_PASSWORD,
        server: process.env.SQL_SERVER,
        database:process.env.SQL_DATABASE,
        options:{
            trustServerCertificate:true
        }

}

export const pool = await sql.connect(config)