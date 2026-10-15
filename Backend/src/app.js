import express from "express";
import cors from "cors";
import productos from "./routes/productos-routes.js"
import resenas from "./routes/resenas-routes.js"
import {errores} from "./middlewares/errores.js"



const app = express();

app.use(cors());
app.use(express.json());
app.get("/api/salud",(req,res)=>{
    res.json({ok:true,message:"API de productos funcionando correctamente"})
})

app.use('/api/productos',productos);
app.use('/api/resenas',resenas);
app.use(errores);


export default app
