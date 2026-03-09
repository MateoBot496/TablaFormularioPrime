
import { Route, Routes } from 'react-router-dom';
import './App.css'
import DefaultLayout from './assets/layout/layout';
import Index from './pages';



function App() {

  return (
    <DefaultLayout>
      
      
              <Routes>
                  
                  <Route path="/" element={<Index />} />
      
              </Routes>
    </ DefaultLayout>
  )
}

export default App
