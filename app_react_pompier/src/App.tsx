import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './page/login';
import NouveauMDP from './page/nouveauMdp';
import Accueil from './page/accueil';
import Profil from './page/profil';

function App() {
  return (
    <Routes>
      <Route path='/' element={ <Login /> }></Route>
      <Route path='/nouveauMdp' element={ <NouveauMDP/> }></Route>
      <Route path='/accueil' element={ <Accueil/> }></Route>
      <Route path='/profil' element={ <Profil/> }></Route>
    </Routes>
  );
}

export default App;
