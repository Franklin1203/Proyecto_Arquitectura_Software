import sql from 'mssql';
import { readFileSync } from 'node:fs';
import { reintentar } from './reintentar.js';


const base = {

    server: process.env.SQL_SERVER,
    user: process.env.SQL_USER,
    password: process.env.SQL_PASSWORD,
    options: { trustServerCertificate: true },
};

export let pool;

export async function iniciarDb() {
 //Crea la base del servicio si no existe
    const master = await reintentar('SQL Server', () =>
        new sql.ConnectionPool(base).connect());
    await master.query(`IF DB_ID('productos_db') IS NULL CREATE DATABASE
        productos_db`);
    await master.close();

    //conecta a su base y crea la tabla
    pool = await new sql.ConnectionPool(
        { ...base, database: 'productos_db' }).connect();
    const init = readFileSync(
        new URL('./init.sql', import.meta.url), 'utf8');
    await pool.query(init)

}