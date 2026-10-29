import ProductoTarjeta from "./ProductoTarjeta.jsx";

//parte del view, lista de productos
export default function ProductosLista({productos,acciones}){
    if(productos.length ===0) return <p>No hay productos en inventario</p>


    return(
        <div className="lista-productos">
            {productos.map(producto=>(

                <ProductoTarjeta
                    key={producto.id}
                    producto={producto}
                    borrar={acciones.borrar}
                    seleccionarParaEditar={acciones.seleccionarParaEditar}

                />
            ))}

        </div>
    )
}