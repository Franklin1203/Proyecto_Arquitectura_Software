import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { registro , login} from "../Servicios/authModel";

//viewModel de la autenticacion
export function useAuth() {

    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [clave, setClave] = useState("");
    const navigate = useNavigate();
   

    //conexiones o peticiones al backend

    const registrarse = useMutation({
        mutationFn: registro, //para llamar la funcion registro de nuestro backend
        
        //en caso de exito en el registro, guardar token en localstorage y redirigir al login
        onSuccess: (data) => {
            localStorage.setItem('token', data.token)
            navigate('/login')
        }
    })

    const loggearse = useMutation({

        mutationFn: login,
        onSuccess: (data) => {
            localStorage.setItem('token', data.token)
            navigate('/')
        }

    })

    //funciones para la vista

    function registrar(e){
        e.preventDefault()
        registrarse.mutate({nombre,email,clave})
    }

    function loggear(e){
        e.preventDefault()
        loggearse.mutate({email,clave})
    }


    //retornamos todos los datos de forma estructurada
    return{
        //exporta todos los datos 
        formulario: {nombre,setNombre, email,setEmail,clave,setClave},

        //manejamos los diferentes estados
        estado:{

            isRegistrando: registrarse.isPending,
            isLoggeando: loggearse.isPending,
            errorRegistro: registrarse.error,
            errorLogin: loggearse.error
           
        },
        //exportamos las funciones de interaccion
        acciones:{registrar,loggear}
    }


}