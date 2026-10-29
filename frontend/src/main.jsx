import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter} from "react-router-dom";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query"
import './index.css'
import App from './App.jsx'


const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode> {/* para asegurar que todo se renderize correctamente */}
      <QueryClientProvider client={queryClient}> {/* controla cache de los datos */}
          <BrowserRouter> {/* para el ruteo de las paginas */}
                <App />
          </BrowserRouter>
      </QueryClientProvider>
  </StrictMode>
)
