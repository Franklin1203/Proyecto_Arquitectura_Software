import { Routes, Route } from "react-router-dom";
import Login from "./Pages/Login.jsx"
import Productos from "./Pages/Productos.jsx"
import RutasProtegidas from "./RutasProtegidas.jsx"



export default function App() {
    return (

        <Routes>

            <Route path="/login" element={<Login />} />
            <Route path="/" element={

                <RutasProtegidas>
                    <Productos />
                </RutasProtegidas>

            } />

        </Routes>

    )
}


