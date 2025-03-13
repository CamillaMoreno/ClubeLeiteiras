import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer'

// Pages
import LandingPage_PreLogin from './pages/LandingPage_PreLogin';
import Login from './pages/Login';

import LandingPage_PosLogin from './pages/LandingPage_PosLogin';
import Perfil from './pages/Perfil';
import Favoritos from './pages/Favoritos';
import FavoritosErro from './pages/FavoritadosErro';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<LandingPage_PreLogin />} />
          <Route path="/home" element={<LandingPage_PosLogin />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/favoritados" element={<Favoritos />} />
          <Route path="/favoritadosErro" element={<FavoritosErro />} />
          <Route path="/login" element={<Login />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
