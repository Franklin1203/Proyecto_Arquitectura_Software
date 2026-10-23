import Router from "express"
import { SqlProductoRepositorio } from "./sql-producto-repositorio.js";
import { ProductoServicio } from "../aplicacion/producto-servicio.js";
import { ProductoControlador } from "./producto-controlador.js";
import { verificarToken } from "../../middlewares/auth-middleware.js"

const repositorioSql = new SqlProductoRepositorio();
const productoServicio = new ProductoServicio(repositorioSql);
const productoControlador = new ProductoControlador(productoServicio)


const router = Router()


router.get('/',productoControlador.obtenerProductos);
router.get('/:id',productoControlador.obtenerProductoPorId);
router.post('/', verificarToken,productoControlador.crearProducto);
router.put('/:id', verificarToken,productoControlador.actualizarProducto);
router.delete('/:id',verificarToken,productoControlador.eliminarProducto);



export default router;