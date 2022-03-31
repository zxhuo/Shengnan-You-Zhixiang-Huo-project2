import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

import Home from "./components/games/Home";
import Rule from "./components/modals/Rule";
import Navigation from "./components/games/Navigation";
import GameLevel from "./components/games/GameLevel";

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
