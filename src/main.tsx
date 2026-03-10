import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import { PrimeReactProvider } from 'primereact/api';
import "primereact/resources/themes/lara-light-cyan/theme.css";

import "primereact/resources/themes/lara-light-blue/theme.css"; // tema
import "primereact/resources/primereact.min.css"; // core
import "primeicons/primeicons.css"; // ICONOS
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PrimeReactProvider 
    //value={{ unstyled: true}}
    >
      
      <App />
    
    </PrimeReactProvider>
  </StrictMode>
)
