import { api } from "../../api.js";

//model con todas las funciones de la api
export const obtenerProductos = ()=> api('/productos');
export const obtenerProductoPorId= (id)=>api(`/productos/${id}`)
export const crearProducto = (datos) => api('/productos',{method: 'POST',body:datos});
export const editarProducto = (id,datos) => api(`/productos/${id}`,{method:'PUT',body:datos})
export const eliminarProducto =(id) =>api(`/productos/${id}`,{method:'DELETE'})
