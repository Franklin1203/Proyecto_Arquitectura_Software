
//parte del view, tarjeta de producto 
export default function ProductoTarjeta({ producto, borrar, seleccionarParaEditar }) {

    return (
        <div className="tarjeta-producto">

            <div className="datos-productos-lista">
                <h3 className="nombre-txt">{producto.nombre}</h3>
                <p className="precio-txt"><b>Precio:</b> ${producto.precio}</p>

                {producto.stock === 0

                    ? <span className="alerta-stock-txt"><b>Stock:</b> Agotado</span>
                    : <span><b>Stock:</b> {producto.stock}</span>
                }


            </div>

            <div className="botonera-productos">
                <button type="button" className="eliminar-btn" onClick={() => borrar(producto.id)}>Eliminar</button>

                <button type="button" className="editar-btn" onClick={() => seleccionarParaEditar(producto)}>Editar</button>

            </div>






        </div>
    )


}