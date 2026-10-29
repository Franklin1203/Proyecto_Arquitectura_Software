import { Routes, Route } from "react-router-dom";
import LoginPage from "./Auth/Pages/LoginPage.jsx"
import RegistroPage from "./Auth/Pages/RegistroPage.jsx";
import ProductosPage from "./Productos/Pages/ProductosPage.jsx"
import RutasProtegidas from "./RutasProtegidas.jsx"



export default function App() {
    return (

        <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/registro" element={<RegistroPage />} />
           
            <Route path="/" element={

                <RutasProtegidas>
                    <ProductosPage />
                </RutasProtegidas>

            } />

        </Routes>

    )
}


