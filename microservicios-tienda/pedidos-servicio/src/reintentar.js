
//para que el sistema no colapse al subir
export async function reintentar(nombre,fn,intentos=15){

    for(let i=1;i<=intentos;i++){

        try{

            return await fn()

        } catch(e){
            console.log(`Error en ${nombre},intento ${i} de ${intentos}`);
            await new Promise(resolve=>setTimeout(resolve,3000))
        }

    }
    throw new Error(`Error en ${nombre}, se agotaron los intentos`)
}