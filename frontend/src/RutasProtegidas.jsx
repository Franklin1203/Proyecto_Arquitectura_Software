import {Navigate} from "react-router-dom";

//codigo para proteger paginas de usuarios no autenticados
export default function RutaProtegida({children}){

    const token = localStorage.getItem('token');
    if(!token) return <Navigate to="/login" replace/>
    return children

}