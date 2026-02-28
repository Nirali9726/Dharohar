import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import './styles/global.css';
// Pages
import Opening from './pages/Opening';
import Choice from './pages/Choice';
import Realm from './pages/Realm';
import Game from './pages/Game';
import Puzzle from './pages/Puzzle';
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Opening />} />
          <Route path="/choose" element={<Choice />} />
          <Route path="/realm/:realmId" element={<Realm />} />
          <Route path="/game" element={<Game />} />
          <Route path="/puzzle" element={<Puzzle />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;