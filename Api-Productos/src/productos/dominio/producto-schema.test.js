import {describe,it,expect} from 'vitest';
import { Producto } from './producto-schema';


//para testear reglas de negocio
describe('Reglas de negocio del producto',()=>{

    it("debe crear producto si todos los datos son validos",()=>{
        const productoValido = new Producto({
            nombre: "Mouse inalambrico",
            precio:2500,
            stock:5
        })

        expect(productoValido.nombre).toBe('Mouse inalambrico');
        expect(productoValido.precio).toBe(2500);
        expect(productoValido.stock).toBe(5);
    });

    it('debe tirar error si el nombre esta vacio o si solo son espacios',()=>{

        expect(()=>new Producto({nombre: '  ',precio:200,stock:3}))
        .toThrow('El nombre es obligatorio')


    });

    it('debe tirar error si el precio es cero, negativo,null o undefined',()=>{

        expect(()=>new Producto({nombre:'Monitor',precio:0,stock:6}))
            .toThrow('Precio invalido')

            expect(()=>new Producto({nombre:'Monitor',precio:-1500,stock:6}))
                .toThrow('Precio invalido')
    });

    it('debe tirar error si el stock es 0 o negativo',()=>{

        expect(()=>new Producto({nombre:'Monitor',precio:3500,stock:0}))
            .toThrow('Stock debe ser mínimo 1');

            expect(()=>new Producto({nombre:'Monitor',precio:3500,stock:-5}))
                .toThrow('Stock debe ser mínimo 1')


    })



})