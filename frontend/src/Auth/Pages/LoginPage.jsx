
import { useAuth } from "../Hooks/useAuth";
import LoginForm from "../Componentes/LoginForm";

export default function LoginPage(){
    const {formulario,estado,acciones} = useAuth();

    return(
        <main className="auth-pag">
            <div className="tarjeta-login">
                <h1>Tienda Ultra Tech</h1>
                <p>Bienvenido, ingresa tus credenciales</p>

                <LoginForm
                    formulario={formulario}
                    estado={estado}
                    acciones={acciones}
                />
                <div>
                    <p>¿No tienes cuenta?<a href="/registro">Regístrate aquí</a></p>
                </div>
            </div>

        </main>
    )
}