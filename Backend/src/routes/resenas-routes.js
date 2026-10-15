import {Router} from "express";
import * as ctrl from "../controllers/resena-controller.js"


const router = Router()

router.get('/',ctrl.obtenerResenas);
router.post('/',ctrl.crearResena);

export default router