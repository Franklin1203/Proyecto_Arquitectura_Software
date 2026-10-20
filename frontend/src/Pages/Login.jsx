import { useState } from "react";
import {useNavigate} from "react-router-dom"
import { useMutation } from "@tanstack/react-query";
import{api} from "../api.js"


export default function Login(){

    const[email,setEmail] = useState("");
    const[clave,setClave] = useState("");
    const navigate = useNavigate();



    const login = useMutation({

        mutationFn:(datos)=>api('/auth/login',{method:'POST',body:datos}),
        onSuccess:(data)=>{

            localStorage.setItem('token',data.token);
            navigate('/')
        }


    });


    function enviar(e){
        e.preventDefault();
        login.mutate({email,clave});
    }


    return(
        <form onSubmit={enviar}>
            <h1>Iniciar sesion</h1>
            <input type="email" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
            <input type="password" placeholder="Password" value={clave} onChange={e=>setClave(e.target.value)}/>
            <button disabled={login.isPending} type="submit">Inicar Sesion</button>
            {login.isError && <p>{login.error.message}</p>}
        </form>


    )

}