import React from 'react';
import './App.css';
import GestionProductos from './components/GestionProductos/GestionProductos';
import GestionVentas from './components/GestionVentas/GestionVentas';

const App = () => {
  return (<div className="App">
    <GestionProductos />
    <GestionVentas />

    </div>);
}

export default App;