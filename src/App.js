import logo from './logo.svg';
import './App.css';
import Bingo from './components/bingo';
import React from "react";

import { BrowserRouter, Link, Routes ,Route } from 'react-router-dom';
import User from './components/user';
import Help from './components/help'
import Config from './components/config';
import Categoria from './components/categoria'
function App() {
  return (
    <BrowserRouter>
      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Routes>
          <Route path="" element={<User/>}/>
          <Route path="/bingo"  element={<Bingo/>}/>
          <Route path="/config/help"  element={<Help/>}/>
          <Route path="/config"  element={<Config/>}/>
          <Route path="/config/category"  element={<Categoria/>}/>
      </Routes>
  
  </BrowserRouter>
  );
}

export default App;
