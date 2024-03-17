import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';

import Header from './component/header';
import Footer from './component/footer';

import Login from './page/login';
import NouveauMDP from './page/nouveauMdp';
import Accueil from './page/accueil';
import Profil from './page/profil';
import Commande from './page/commande';
import Produit from './page/produit';
import Panier from './page/panier';

function App() {
  const [header, _setHeader] = useState(<div/>);
  const [footer, _setFooter] = useState(<div/>);

  function isLoginPage(){
    if (window.location.pathname !== "/") {
      _setHeader(Header);
      _setFooter(Footer);
    }
  }
  useEffect(() => {
    isLoginPage();
  }, [])
  return (
    <React.Fragment>
      {header}
      <Routes>
        <Route path='/' element={ <Login /> }></Route>
        <Route path='/nouveauMdp' element={ <NouveauMDP/> }></Route>
        <Route path='/accueil' element={ <Accueil/> }></Route>
        <Route path='/profil' element={ <Profil/> }></Route>
        <Route path='/commandes' element={ <Commande/> }></Route>
        <Route path='/produit' element={ <Produit/> }></Route>
        <Route path='/panier' element={ <Panier/> }></Route>
      </Routes>
      {footer}
    </React.Fragment>
    
  );
}

export default App;
