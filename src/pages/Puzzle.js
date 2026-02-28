import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import './Puzzle.css';
import bharatMap from '../assets/bharatMap.jpg';

const TOTAL_PIECES = 9;

const piecePositions = [
  { id: 0, correctRow: 0, correctCol: 0 },
  { id: 1, correctRow: 0, correctCol: 1 },
  { id: 2, correctRow: 0, correctCol: 2 },
  { id: 3, correctRow: 1, correctCol: 0 },
  { id: 4, correctRow: 1, correctCol: 1 },
  { id: 5, correctRow: 1, correctCol: 2 },
  { id: 6, correctRow: 2, correctCol: 0 },
  { id: 7, correctRow: 2, correctCol: 1 },
  { id: 8, correctRow: 2, correctCol: 2 },
];

function shuffle(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

function Puzzle() {
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const [gameState, setGameState] = useState('hunt');
  const [foundPieces, setFoundPieces] = useState([]);
  const [board, setBoard] = useState(Array(9).fill(null));
  const [dragPiece, setDragPiece] = useState(null);
  const [availablePieces, setAvailablePieces] = useState([]);
  const [showSecret, setShowSecret] = useState(false);
  const secretRef = useRef(null);
  const portraitRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      gsap.fromTo(containerRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1, ease: "power2.out" }
      );
    }
  }, []);

  useEffect(() => {
    if (gameState === 'puzzle') {
      setAvailablePieces(shuffle(piecePositions));
      setBoard(Array(9).fill(null));
    }
  }, [gameState]);

  useEffect(() => {
    if (board.every((cell, i) => cell === i) && board.every(c => c !== null)) {
      setTimeout(() => {
        setShowSecret(true);
        gsap.fromTo(portraitRef.current,
          { opacity: 0, scale: 0.95 },
          { opacity: 1, scale: 1, duration: 2, ease: "power2.out" }
        );
      }, 500);
    }
  }, [board]);

  useEffect(() => {
    if (showSecret && secretRef.current) {
      gsap.fromTo(secretRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1.5, delay: 2, ease: "power2.out" }
      );
    }
  }, [showSecret]);

  const handleFindPiece = (id) => {
    if (foundPieces.includes(id)) return;
    setFoundPieces(prev => [...prev, id]);
  };

  const handleDragStart = (piece) => {
    setDragPiece(piece);
  };

  const handleDrop = (index) => {
    if (!dragPiece) return;
    const newBoard = [...board];
    const existingIndex = newBoard.indexOf(dragPiece.id);
    if (existingIndex !== -1) newBoard[existingIndex] = null;
    newBoard[index] = dragPiece.id;
    setBoard(newBoard);
    setDragPiece(null);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const isComplete = board.every((cell, i) => cell === i) && board.every(c => c !== null);

  return (
    <div className="puzzle-container" ref={containerRef}>
      <button className="back-btn" onClick={() => navigate('/choose')}>← Back</button>

      {/* HUNT PHASE */}
      {gameState === 'hunt' && (
        <div className="hunt-phase">
          <h1 className="puzzle-title">The Hidden Portrait</h1>
          <p className="puzzle-subtitle">
            Scattered across ancient Bharat are 9 fragments of a lost portrait.
            Find them all to reveal a truth the world has forgotten.
          </p>

          <div className="pieces-progress">
            <p className="progress-text">
              {foundPieces.length} of {TOTAL_PIECES} fragments found
            </p>
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${(foundPieces.length / TOTAL_PIECES) * 100}%` }}
              ></div>
            </div>
          </div>

          <div className="hunt-grid">
            {piecePositions.map((piece) => (
              <div
                key={piece.id}
                className={`hunt-item ${foundPieces.includes(piece.id) ? 'found' : ''}`}
                onClick={() => handleFindPiece(piece.id)}
              >
                <div className="hunt-icon">
                  {foundPieces.includes(piece.id) ? '📜' : '🔍'}
                </div>
                <p className="hunt-label">
                  {foundPieces.includes(piece.id)
                    ? `Fragment ${piece.id + 1} Found`
                    : `Fragment ${piece.id + 1}`}
                </p>
              </div>
            ))}
          </div>

          {foundPieces.length === TOTAL_PIECES && (
            <button
              className="assemble-btn"
              onClick={() => setGameState('puzzle')}
            >
              Assemble the Portrait
            </button>
          )}
        </div>
      )}

      {/* PUZZLE PHASE */}
      {gameState === 'puzzle' && !showSecret && (
        <div className="puzzle-phase">
          <h1 className="puzzle-title">Assemble the Portrait</h1>
          <p className="puzzle-subtitle">
            Drag each fragment to its correct position
          </p>

          <div className="puzzle-workspace">
            {/* Board */}
            <div className="puzzle-board">
              {board.map((cell, index) => {
  const row = Math.floor(index / 3);
  const col = index % 3;
  const pieceRow = cell !== null ? Math.floor(cell / 3) : 0;
  const pieceCol = cell !== null ? cell % 3 : 0;
  return (
    <div
      key={index}
      className={`board-cell ${cell !== null ? 'filled' : ''}`}
      onDrop={() => handleDrop(index)}
      onDragOver={handleDragOver}
    >
      {cell !== null && (
        <div
          className="placed-piece"
          style={{
  backgroundImage: `url(${bharatMap})`,
  backgroundSize: '480px 480px',
  backgroundPosition: `${-pieceCol * 160}px ${-pieceRow * 160}px`,
  width: '160px',
  height: '160px',
  outline: cell === index
    ? '3px solid #c9a84c88'
    : '4px solid #ef5350bb'
}}
          draggable
          onDragStart={() => handleDragStart(piecePositions[cell])}
        >
        </div>
      )}
    </div>
  );
})}
            </div>

            {/* Available Pieces */}
            <div className="pieces-tray">
              <p className="tray-label">FRAGMENTS</p>
              <div className="pieces-list">
               {availablePieces
  .filter(p => !board.includes(p.id))
  .map(piece => {
    const pieceRow = Math.floor(piece.id / 3);
    const pieceCol = piece.id % 3;
    return (
      <div
        key={piece.id}
        className="tray-piece-image"
        draggable
        onDragStart={() => handleDragStart(piece)}
        style={{
  backgroundImage: `url(${bharatMap})`,
  backgroundSize: '240px 240px',
  backgroundPosition: `${-pieceCol * 80}px ${-pieceRow * 80}px`,
  width: '80px',
  height: '80px',
  border: '1px solid #333333',
  cursor: 'grab',
  flexShrink: 0
}}
      />
    );
  })}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SECRET STORY */}
      {showSecret && (
        <div className="secret-phase">
          <div className="portrait" ref={portraitRef}>
  <img
    src={bharatMap}
    alt="Ancient Bharat"
    className="portrait-image"
  />
  <p className="portrait-label">भारत — At The Height of Its Glory</p>
</div>

          <div className="secret-story" ref={secretRef}>
            <p className="secret-label">THE SECRET OF DHAROHAR</p>
            <h2 className="secret-title">The World's First Superpower</h2>
            <div className="secret-text">
              <p>Before Rome. Before Greece reached its peak. Before China built its wall. There was a civilization that had already solved problems the rest of the world wouldn't face for another thousand years.</p>
              <p>Around 300 BCE to 500 AD — during the Maurya and Gupta periods — ancient India wasn't just advanced in one field. It was simultaneously the world leader in every domain you explored in Dharohar.</p>
              <p>Mathematics. Astronomy. Philosophy. Trade. Architecture. Art. Ayurveda. Strategy. All of this. Simultaneously. In one civilization.</p>
              <p>This wasn't coincidence. This wasn't luck. This was a civilization that understood something fundamental — that knowledge has no boundaries. That mathematics feeds astronomy. That philosophy feeds strategy. That art feeds medicine. That everything is connected.</p>
              <p>They didn't call it science. They didn't call it art. They called it <strong>Dharma</strong> — the natural order of things. And for a thousand years, they lived it more completely than any civilization before or since.</p>
            </div>
            <div className="secret-finale">
              <p className="finale-sanskrit">यत्र विश्वं भवत्येकनीडम्</p>
              <p className="finale-translation">"Where the world comes together as one nest"</p>
              <p className="finale-credit">— Rigveda, Ancient India</p>
            </div>
            <p className="dharohar-sign">This is Bharat. This is your heritage. This is <strong>धरोहर.</strong></p>
            <button className="share-btn" onClick={() => navigate('/choose')}>
              Return to Dharohar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Puzzle;