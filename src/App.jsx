import React, { useState } from 'react';
import Header from './Header';
import GameBoard from './GameBoard';
import ScoreBoard from './ScoreBoard';
import './styles/App.css'

function App() {
  const [score, setScore] = useState(0);

  return (
    <div className="header">
      <Header />
      <ScoreBoard />
    </div>
  );
}

export default App;
