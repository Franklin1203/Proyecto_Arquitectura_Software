import { useAuth } from "../Hooks/useAuth";
import RegistroForm from "../Componentes/RegistroForm";

export default function RegistroPage(){
    const {formulario,estado,acciones} = useAuth();

    return(
        <main className="auth-pag">
            <div className="tarjeta-registro">
                <h1>Tienda Ultra Tech</h1>
                <RegistroForm
                    formulario={formulario}
                    estado={estado}
                    acciones={acciones}
                />
            </div>

        </main>
    )
}