import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import Swal from 'sweetalert2';

import {
    obtenerProductos,
    crearProducto,
    editarProducto,
    eliminarProducto

} from "../Servicios/apiProductos.js"


export function useProductos() {

    const [nombre, setNombre] = useState("");
    const [precio, setPrecio] = useState("");
    const [stock, setStock] = useState("");

    const [idEditando, setIdEditando] = useState(null)


    const queryClient = useQueryClient();

    const consultar = useQuery({
        queryKey: ['productos'],
        queryFn: obtenerProductos
    });

    const limpiarFormulario = () => {
        setNombre("");
        setPrecio("");
        setStock("");
        setIdEditando(null)
    }


    const crear = useMutation({
        mutationFn: crearProducto,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['productos'] });
            limpiarFormulario();
        }

    });

    const editar = useMutation({
        mutationFn: ({ id, datos }) => editarProducto(id, datos),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['productos'] })
            limpiarFormulario();
        }
    })

    const eliminar = useMutation({
        mutationFn: eliminarProducto,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['productos'] })
        }
    })

    function seleccionarParaEditar(producto) {
        setNombre(producto.nombre);
        setPrecio(producto.precio);
        setStock(producto.stock);
        setIdEditando(producto.id);

    }

    function guardarFormulario(e) {
        e.preventDefault();
        const datosGenerados = {
            nombre,
            precio: parseFloat(precio),
            stock: parseInt(stock)
        }

        if (idEditando) {
            editar.mutate({ id: idEditando, datos: datosGenerados })
        } else {
            crear.mutate(datosGenerados)
        }
    }

    function cancelarEdicion() {
         Swal.fire({
            title: "¿Seguro que quieres cancelar?",
            text: "no podras deshacer esta acción",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Si, estoy seguro',
            cancelButtonText: 'Cancelar',

        }).then((result) => {
            if (result.isConfirmed) {
                limpiarFormulario();
            }
        })


       
    }


    function borrar(id) {

        Swal.fire({
            title: "¿Seguro que quieres eliminarlo?",
            text: "no podras deshacer esta acción",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Si, estoy seguro',
            cancelButtonText: 'Cancelar',

        }).then((result) => {
            if (result.isConfirmed) {
                eliminar.mutate(id);
            }
        })


    }

    function salir() {
        localStorage.removeItem('token');
        location.href = "/login";
    }

    return {
        formulario: { nombre, setNombre, precio, setPrecio, stock, setStock, idEditando },
        estado: {
            productos: consultar.data || [],
            isPending: consultar.isPending,
            isError: consultar.isError,
            error: consultar.error,
            isGuardando: crear.isPending || editar.isPending

        },
        acciones: { guardarFormulario, seleccionarParaEditar, cancelarEdicion, borrar, salir }
    }


}