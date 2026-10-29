
//modelo con reglas de negocio
export class Producto{

    constructor({id=null,nombre,precio,stock=0,creado_en=null}){


        if(!nombre || nombre.trim() === ''){
            throw new Error('El nombre es obligatorio')
        }

        if(nombre.length>100){
            throw new Error('El nombre no puede exceder los 100 caracteres')
        }

        if(precio=== undefined || precio===null|| precio <=0) {
            throw new Error('Precio invalido')
        }

        if(stock <= 0){
            throw new Error('Stock debe ser mínimo 1')
        }
           
        
          this.id = id
          this.nombre = nombre
          this.precio = precio
          this.stock = stock
          this.creado_en = creado_en

          
        }     



}
