import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import TablaPacientes from './pages/pacientes';
import Salas from './pages/salas';
import TablaLlamados from './pages/llamados';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Hospital Curita</h1>
        </header>
        <div className='Contenedor'>
          <nav className='BotonesContainer'>
            <Link to="/salas" >
              <button className='button'> Salas </button>
            </Link>
            <Link to="/pacientes" >
              <button className='button'> Pacientes </button>
            </Link>
            <Link to="/llamados" >
              <button className='button'> Llamados </button>
            </Link>
          </nav>
          
          <Routes>
            <Route path="/salas" element={<Salas/>} />
            <Route path="/pacientes" element={<TablaPacientes />} />
            <Route path="/llamados" element={<TablaLlamados/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
