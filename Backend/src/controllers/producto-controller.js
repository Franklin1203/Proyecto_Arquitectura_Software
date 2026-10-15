
import {pool} from '../config/sqlserver.js';

export async function obtenerProductos (req,res){
    const result = await pool.request().query('SELECT * FROM productos');
    res.json(result.recordset)

}

export async function obtenerProductoPorId(req,res){

    const result = await pool.request()
    .input('id', req.params.id)
    .query('SELECT * FROM productos WHERE id = @id');

    if(!result.recordset[0]){
        res.status(404).json({Error:'Producto no encontrado'});
        return;
    }

    res.json(result.recordset[0])


}


export async function crearProducto(req,res){

    const {nombre,precio,stock=0} = req.body

    if(!nombre || precio === undefined){
       return res.status(400).json({Error:"Faltan datos"})
    }

    const result = await pool.request()
    .input('nombre',nombre)
    .input('precio',precio)
    .input('stock',stock)
    .query('INSERT INTO productos(nombre,precio,stock) output INSERTED.* VALUES(@nombre,@precio,@stock)')

    res.status(201).json(result.recordset[0])
}


export async function actualizarProducto(req,res){

    const {nombre,precio,stock} = req.body

    const result = await pool.request()
    .input('id', req.params.id)
    .input('nombre',nombre)
    .input('precio',precio)
    .input('stock',stock)
    .query('UPDATE productos SET nombre=@nombre, precio=@precio, stock=@stock output INSERTED.* WHERE id=@id')
    if(!result.recordset[0]){
        res.status(404).json({Error:'Producto no encontrado'})
        return;
    }

    res.json(result.recordset[0])

}

export async function eliminarProducto(req,res){

    const result = await pool.request()
    .input('id',req.params.id)
    .query('DELETE FROM productos WHERE id=@id')
    
    if(!result.rowsAffected[0]){
        res.status(404).json({Error:'Producto no encontrado'})
        return;
    }
    res.status(204).end();


}