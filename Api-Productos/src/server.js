
import app from "./app.js"
import mongoose from "mongoose";

const Port = process.env.PORT || 3005;

await mongoose.connect(process.env.MONGO_URI);
app.listen(Port,()=>{
    console.log(`API de productos corriendo en http://localhost:${Port}`)
});

app.listen(Port,()=>{
    console.log(`API de productos corriendo en http://localhost:${Port}`)
});

