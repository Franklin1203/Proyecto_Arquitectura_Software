import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { registro , login} from "../Servicios/authModel";



export function useAuth() {

    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [clave, setClave] = useState("");
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    const registrarse = useMutation({
        mutationFn: registro,
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


    function registrar(e){
        e.preventDefault()
        registrarse.mutate({nombre,email,clave})
    }

    function loggear(e){
        e.preventDefault()
        loggearse.mutate({email,clave})
    }


    return{
        formulario: {nombre,setNombre, email,setEmail,clave,setClave},
        estado:{

            isRegistrando: registrarse.isPending,
            isLoggeando: loggearse.isPending,
            errorRegistro: registrarse.error,
            errorLogin: loggearse.error
           
        },
        acciones:{registrar,loggear}
    }


}