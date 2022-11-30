import logo from './logo.svg';
import './App.css';
import Bingo from './components/bingo';
import React from "react";

import { BrowserRouter, Link, Routes ,Route } from 'react-router-dom';
import User from './components/user';
function App() {
  return (
    <BrowserRouter>
      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Routes>
          <Route path="" element={<User/>}/>
          <Route path="/bingo"  element={<Bingo/>}/>
      </Routes>
  
  </BrowserRouter>
  );
}

export default App;
