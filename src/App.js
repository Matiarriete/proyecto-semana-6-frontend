import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import MuestraDatosOpor from './components/MuestraDatosOpor';
import MuestraDatosCliente from './components/MuestraDatosCliente';
import MuestraDatosContactos from './components/MuestraDatosContactos';
import Principal from './components/Principal';
import CrearCliente from './components/CrearCliente';
import CrearOportunidades from './components/CrearOportunidades';
import CrearContacto from './components/CrearContacto';
import BorrarCliente from './components/BorrarCliente';
import BorrarOportunidad from './components/BorrarOportunidad';
import "./components/Principal"

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route path='/' element={<Principal/>}/>
          <Route path='/MuestraDatosOpor' element={<MuestraDatosOpor/>}/>
          <Route path='/MuestraDatosCliente' element={<MuestraDatosCliente/>}/>
          <Route path='/MuestraDatosContactos' element={<MuestraDatosContactos/>}/>
          <Route path='/CrearCliente' element={<CrearCliente/>}/>
          <Route path='/CrearOportunidades' element={<CrearOportunidades/>}/>
          <Route path='/CrearContactos' element={<CrearContacto/>}/>
          <Route path='/BorrarCliente' element={<BorrarCliente/>}/>
          <Route path='/BorrarOportunidad' element={<BorrarOportunidad/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
