
export default function ProductoTarjeta({producto,borrar,seleccionarParaEditar}){

    return(
        <div className="tarjeta-producto">
            <h3>{producto.nombre}</h3>
            <p className="precio">${producto.precio}</p>

            {producto.stock === 0
            
            ? <span className="alerta-stock">Agotado</span>
            :<span>Stock:{producto.stock}</span>
            }

            <button type="button" onClick={()=> borrar(producto.id)}>Eliminar</button>

            <button type="button" onClick={()=>seleccionarParaEditar(producto)}>Editar</button>


        </div>
    )


}