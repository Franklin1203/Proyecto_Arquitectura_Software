
import { useAuth } from "../Hooks/useAuth";
import LoginForm from "../Componentes/LoginForm";

//parte del view, pagina de login
export default function LoginPage() {
    const { formulario, estado, acciones } = useAuth(); // llamamos todos los datos del viewModel

    return (
        <main className="auth-pag">

            <div className="contenedor-form">

                <LoginForm
                    formulario={formulario}
                    estado={estado}
                    acciones={acciones}
                />
                <p className="registro-link">¿No tienes cuenta? <a href="/registro">Regístrate aquí</a></p>
                

            </div>




        </main>
    )
}