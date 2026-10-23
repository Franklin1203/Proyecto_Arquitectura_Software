import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import { pool } from "../config/sqlserver.js"

export async function registro(req, res) {

  

        const { nombre, email, clave } = req.body;
        if (!nombre || !email || !clave) {
            return res.status(400).json({ Error: "Por favor, complete todos los campos" })
        }



        const claveHasheada = await bcrypt.hash(clave, 10)
        const result = await pool.request()
            .input("nombre", nombre)
            .input("email", email)
            .input("clave", claveHasheada)
            .query("INSERT INTO Usuarios (nombre,email,clave) Output inserted.id, inserted.nombre,inserted.email VALUES(@nombre,@email,@clave)")
        res.status(201).json(result.recordset[0])


  

}


export async function login(req, res) {

        const { email, clave } = req.body
        if (!email || !clave) {
            return res.status(400).json({ message: "Por favor, complete todos los campos" })
        }



        const resultado = await pool.request()
            .input("email", email)
            .query("SELECT * FROM Usuarios WHERE email = @email");
        const usuario = resultado.recordset[0]

        const ok = usuario && await bcrypt.compare(clave, usuario.clave);

        if (!ok) {
            return res.status(401).json({ message: "Credenciales inválidas" })
        }


        const { id, nombre } = usuario
        const token = jwt.sign({ id, nombre }, process.env.JWT_SECRET, { expiresIn: "2h" })
        res.json({ token, nombre })

 


}