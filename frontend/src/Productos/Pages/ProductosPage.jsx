import {useProductos} from "../Hooks/useProductos.js";
import ProductosLista from "../Componentes/ProductosLista.jsx";


export default function ProductosPage(){
    const {formulario,estado,acciones} = useProductos();

    if(estado.isPending) return <p>Cargando...</p>
    if(estado.isError) return <p>Ocurrió un error:{estado.error.message}</p>


    return(

        <main>

            <h1>Productos</h1>
            <button onClick={acciones.salir}>Salir</button>

            <form onSubmit={acciones.guardarFormulario}>
                <input type="text" placeholder="Nombre" value={formulario.nombre} onChange={e=>formulario.setNombre(e.target.value)} required/>
                <input type="number" placeholder="Precio" value={formulario.precio} onChange={e=>formulario.setPrecio(e.target.value)}required/>
                <input type="number" placeholder="Stock" value={formulario.stock} onChange={e=>formulario.setStock(e.target.value)} required/>

                <button disabled={estado.isGuardando} type="submit">

                    {formulario.idEditando
                    
                    ?(estado.isGuardando ? "Actualizando..." : "Guardar Cambios")

                    : (estado.isGuardando ? "Agregando..." : "Agregar")
                    }

                </button>
              
                {formulario.idEditando &&(
                    <button type="button" onClick={acciones.cancelarEdicion}>Cancelar</button>
                )}

                <ProductosLista productos={estado.productos} acciones={acciones}/>
            </form>





        </main>








    )



}