import { api } from "../../api.js";

//definimos el modelo trayendo las funciones de la api
export const login = (datos) => api("/auth/login",{method:'POST',body:datos});
export const registro = (datos)=>api("/auth/registro",{method:'POST',body:datos});