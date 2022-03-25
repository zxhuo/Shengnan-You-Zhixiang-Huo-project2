import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './components/routes/Home';
import Rule from './components/routes/Rule';
import Navigation from './components/routes/Navigation';
import Gameeasy from './components/routes/Gameeasy';
import Gamemedium from './components/routes/Gamemedium';
import Gamehard from './components/routes/Gamehard';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />}/>
        <Route path='rule' element={<Rule />}/>
        <Route path='easy' element={<Gameeasy />}/>
        <Route path='medium' element={<Gamemedium />}/>
        <Route path='hard' element={<Gamehard />}/>
      </Route>
    </Routes>

  );
}

export default App;
