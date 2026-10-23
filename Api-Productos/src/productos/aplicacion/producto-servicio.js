
import { Producto } from "../dominio/producto-schema.js";

export class ProductoServicio{

    constructor(productoRepositorio){

        this.productoRepositorio = productoRepositorio

    }


    async obtenerProductos(){
        return await this.productoRepositorio.obtenerProductos()
    }

    async obtenerProductoPorId(id){
        const producto = await this.productoRepositorio.obtenerProductoPorId(id)
        if(!producto){
            throw new Error("Producto no encontrado")
        }
        return producto
    }

    async crearProducto(datos){
        const nuevoProducto = new Producto(datos)
        return await this.productoRepositorio.crearProducto(nuevoProducto)
    }

    async actualizarProducto(id,datos){

        const productoValido = new Producto(datos)

        const productoActualizado = await this.productoRepositorio.actualizarProducto(id,productoValido)

        if(!productoActualizado){
            throw new Error("Producto no encontrado")
        }

        return productoActualizado

    }

    async eliminarProducto(id){

       const productoAEliminar = await this.productoRepositorio.eliminarProducto(id)
        
       if(!productoAEliminar){
        throw new Error("Producto no encontrado")
       }

       
    }


}