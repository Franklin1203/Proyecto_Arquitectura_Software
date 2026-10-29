

//adaptador de entrada para menejar peticiones http
export class ProductoControlador {

    constructor(productoServicio) {
        this.productoServicio = productoServicio
    }

    obtenerProductos = async (req, res) => {

        try {

            const productos = await this.productoServicio.obtenerProductos();
            res.json(productos)
        } catch (error) {
            res.status(500).json({ Error: error.message })
        }


    }

    obtenerProductoPorId = async (req, res) => {

        try {

            const { id } = req.params
            const producto = await this.productoServicio.obtenerProductoPorId(id)
            res.json(producto)
        } catch (error) {
            res.status(404).json({ Error: error.message });
        }



    }


    crearProducto = async (req, res) => {

        try {

            const datos = req.body
            const nuevoProducto = await this.productoServicio.crearProducto(datos)
            res.status(201).json(nuevoProducto)
        } catch (error) {
            res.status(400).json({ Error: error.message })
        }



    }


    actualizarProducto = async (req, res) => {

        try {

            const { id } = req.params;
            const datos = req.body;
            const productoActualizado = await this.productoServicio.actualizarProducto(id, datos)
            res.json(productoActualizado)

        } catch (error) {
            res.status(404).json({ Error: error.message })

        }


    }

    eliminarProducto = async (req, res) => {

        try {

            const { id } = req.params;
            await this.productoServicio.eliminarProducto(id)
            res.status(204).end();

        } catch (error) {

            res.status(404).json({ Error: error.message })

        }



    }


}


