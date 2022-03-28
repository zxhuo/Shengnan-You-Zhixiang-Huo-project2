import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

import Home from "./components/Home";
import Rule from "./components/Rule";
import Navigation from "./components/Navigation";
import GameLevel from "./components/GameLevel";

import "./App.css";

function App() {
  return (
    <div className="ui container">
      <Router>
        <nav>
        <Navigation />
        </nav>
        <Routes>
          <Route index element={<Home />} />
          <Route path="games/:level" element={<GameLevel />} />
          <Route path="rule" element={<Rule />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
