
export function errores(err,req,res,next){

console.error(err);


if(['ValidationError','CastError'].includes(err.name)){
    return res.status(400).json({msg:'Error de validacion'})
}

if(err.number == 2627){
    return res.status(409).json({msg:'Este email ya esta registrado'})
}

res.status(500).json({Error:'Error interno en el servidor'})

}