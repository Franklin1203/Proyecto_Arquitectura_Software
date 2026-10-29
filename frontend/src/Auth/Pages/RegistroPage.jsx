import { useAuth } from "../Hooks/useAuth";
import RegistroForm from "../Componentes/RegistroForm";

//parte del view, pagina de registro
export default function RegistroPage(){
    const {formulario,estado,acciones} = useAuth();

    return(
        <main className="auth-pag">
            <div className="contenedor-form">
                
                <RegistroForm
                    formulario={formulario}
                    estado={estado}
                    acciones={acciones}
                />
            </div>

        </main>
    )
}