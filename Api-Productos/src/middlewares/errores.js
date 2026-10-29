
export function errores(err,req,res,next){

console.error(err);

//controla los errores que no son del servidor
if(['ValidationError','CastError'].includes(err.name)){ 
    return res.status(400).json({msg:'Error de validacion'})
}

//controla que el usuario no sea repetido
if(err.number == 2627){
    return res.status(409).json({msg:'Este email ya esta registrado'})
}

//controla los errores del servidor
res.status(500).json({Error:'Error interno en el servidor'})

}