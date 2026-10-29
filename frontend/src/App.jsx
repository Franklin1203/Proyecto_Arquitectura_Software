import { Routes, Route } from "react-router-dom";
import LoginPage from "./Auth/Pages/LoginPage.jsx"
import RegistroPage from "./Auth/Pages/RegistroPage.jsx";
import ProductosPage from "./Productos/Pages/ProductosPage.jsx"
import RutasProtegidas from "./RutasProtegidas.jsx"
import './App.css'



export default function App() {
    return (

        <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/registro" element={<RegistroPage />} />
           
            <Route path="/" element={

                <RutasProtegidas>
                    <ProductosPage /> {/*asegura que solo personas autenticadas tengan acceso a la pag de productos */}
                </RutasProtegidas>

            } />

        </Routes>

    )
}


