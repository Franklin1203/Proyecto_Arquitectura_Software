
import jwt from "jsonwebtoken";

export function verificarToken(req,res,next){
    //si no está el header, entonces asignar espacio vacío
    const header = req.headers.authorization ?? ''; 

    //tomamos el token
    const token = header.startsWith('Bearer ') ? header.slice(7) :null

    if(!token){
        return res.status(401).json({Error:"Token no proporcionado"})
    }


    try{
        //verifica que el token sea válido
        req.usuario = jwt.verify(token,process.env.JWT_SECRET);
        next()
    }catch{
        return res.status(401).json({Error:"Token invalido"})
    }
}