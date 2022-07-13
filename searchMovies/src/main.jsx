// estilos
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/index.css'

// librerias
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// componentes
import App from './components/App'

// borrar el StrictMode antes de desplegar
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
