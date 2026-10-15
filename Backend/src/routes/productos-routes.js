import Router from "express"
import * as ctrl from "../controllers/producto-controller.js"
import { verificarToken } from "../middlewares/auth-middleware.js";

const router = Router()


router.get('/',ctrl.obtenerProductos);
router.get('/:id',ctrl.obtenerProductoPorId);
router.post('/',verificarToken,ctrl.crearProducto);
router.put('/:id',verificarToken,ctrl.actualizarProducto);
router.delete('/:id',verificarToken,ctrl.eliminarProducto);



export default router;