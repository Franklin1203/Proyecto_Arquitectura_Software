
import {Resena} from '../models/resena.model.js';


export async function obtenerResenas(req,res){

    const filtro = {};
    if(req.query.productoId){
        filtro.productoId = Number(req.query.productoId)
    }

    const resenas = await Resena.find(filtro).sort({createdAt:-1}); //filtramos resenas por orden de creado en forma descendente
    res.json(resenas)

}

export async function crearResena(req,res){
    const resena = await Resena.create(req.body);
    res.status(201).json(resena)
}