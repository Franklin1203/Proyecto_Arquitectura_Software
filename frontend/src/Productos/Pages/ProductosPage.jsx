import { useProductos } from "../Hooks/useProductos.js";
import ProductosLista from "../Componentes/ProductosLista.jsx";

//parte del view, pagina de productos
export default function ProductosPage() {
    const { formulario, estado, acciones } = useProductos();

    if (estado.isPending) return <p>Cargando...</p>
    if (estado.isError) return <p>Ocurrió un error:{estado.error.message}</p>


    return (

        <main>

            <div className="encabezado">
                <h1>Tienda Ultra Tech</h1>
                <button className="salir-btn" onClick={acciones.salir}>Salir</button>
            </div>

            <form className="formulario-producto" onSubmit={acciones.guardarFormulario}>
                <input className="producto-input" type="text" placeholder="Nombre" value={formulario.nombre} onChange={e => formulario.setNombre(e.target.value)} required />
                <input  className="producto-input" type="number" placeholder="Precio" value={formulario.precio} onChange={e => formulario.setPrecio(e.target.value)} required />
                <input  className="producto-input" type="number" placeholder="Stock" value={formulario.stock} onChange={e => formulario.setStock(e.target.value)} required />

                <button className="guardar-btn" disabled={estado.isGuardando} type="submit">

                    {formulario.idEditando

                        ? (estado.isGuardando ? "Actualizando..." : "Guardar Cambios")

                        : (estado.isGuardando ? "Agregando..." : "Agregar")
                    }

                </button>

                {formulario.idEditando && (
                    <button type="button" className="cancelar-btn" onClick={acciones.cancelarEdicion}>Cancelar</button>
                )}
                
            </form>

             <ProductosLista productos={estado.productos} acciones={acciones} />

        </main>








    )



}