import { pool } from '../../config/sqlserver.js';
import { ProductoRepositorio } from '../dominio/producto-repositorio.js';

export class SqlProductoRepositorio extends ProductoRepositorio {


    async obtenerProductos() {
        const result = await pool.request().query('SELECT * FROM productos');
        return result.recordset

    }

    async obtenerProductoPorId(id) {

        const result = await pool.request()
            .input('id', id)
            .query('SELECT * FROM productos WHERE id = @id');

        return result.recordset[0]


    }


    async crearProducto(producto) {

        const result = await pool.request()
            .input('nombre',producto.nombre)
            .input('precio', producto.precio)
            .input('stock', producto.stock)
            .query('INSERT INTO productos(nombre,precio,stock) output INSERTED.* VALUES(@nombre,@precio,@stock)')

        return result.recordset[0]
    }


    async actualizarProducto(id,producto) {

        const result = await pool.request()
            .input('id', id)
            .input('nombre', producto.nombre)
            .input('precio', producto.precio)
            .input('stock',producto.stock)
            .query('UPDATE productos SET nombre=@nombre, precio=@precio, stock=@stock output INSERTED.* WHERE id=@id')


        return result.recordset[0]

    }

    async eliminarProducto(id) {

        const result = await pool.request()
            .input('id', id)
            .query('DELETE FROM productos WHERE id=@id')

        return result.rowsAffected[0]




    }


}