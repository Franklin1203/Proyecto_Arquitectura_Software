import Router from "express"
import * as ctrl from "../controllers/producto-controller.js"

const router = Router()


router.get('/',ctrl.obtenerProductos);
router.get('/:id',ctrl.obtenerProductoPorId);
router.post('/',ctrl.crearProducto);
router.put('/:id',ctrl.actualizarProducto);
router.delete('/:id',ctrl.eliminarProducto);



export default router;