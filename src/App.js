import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import MuestraDatosOpor from './components/MuestraDatosOpor';
import MuestraDatosCliente from './components/MuestraDatosCliente';
import MuestraDatosContactos from './components/MuestraDatosContactos';
import Principal from './components/Principal';
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
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
