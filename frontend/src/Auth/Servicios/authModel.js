import { api } from "../../api.js";

export const login = (datos) => api("/auth/login",{method:'POST',body:datos});
export const registro = (datos)=>api("/auth/registro",{method:'POST',body:datos});