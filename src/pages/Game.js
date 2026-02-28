import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import './Game.css';

const questions = [
  {
    realm: 'Mathematics',
    question: 'Who formalized the concept of Zero in ancient India?',
    options: ['Baudhayana', 'Aryabhata & Brahmagupta', 'Pingala', 'Madhava'],
    correct: 1,
    accent: '#4fc3f7'
  },
  {
    realm: 'Mathematics',
    question: 'Baudhayana wrote the Pythagorean theorem how many years before Pythagoras was born?',
    options: ['100 years', '500 years', '230 years', '50 years'],
    correct: 2,
    accent: '#4fc3f7'
  },
  {
    realm: 'Mathematics',
    question: 'What was Pingala studying when he discovered the binary system?',
    options: ['Architecture', 'Sanskrit poetry rhythms', 'Astronomy', 'Trade routes'],
    correct: 1,
    accent: '#4fc3f7'
  },
  {
    realm: 'Mathematics',
    question: 'Madhava of Kerala discovered calculus how many years before Newton?',
    options: ['50 years', '100 years', '200 years', '500 years'],
    correct: 2,
    accent: '#4fc3f7'
  },
  {
    realm: 'Astronomy',
    question: 'How accurate was Aryabhata\'s calculation of the length of a day?',
    options: ['Within 1 minute', 'Within 1 second', 'Within 1 hour', 'Within 10 seconds'],
    correct: 1,
    accent: '#9c6fd6'
  },
  {
    realm: 'Astronomy',
    question: 'What did Aryabhata propose 1000 years before Copernicus?',
    options: ['Earth is flat', 'Earth revolves around the Sun', 'Moon causes tides', 'Stars are suns'],
    correct: 1,
    accent: '#9c6fd6'
  },
  {
    realm: 'Astronomy',
    question: 'Brahmagupta calculated Earth\'s circumference as approximately:',
    options: ['20,000 km', '50,000 km', '36,000 km', '10,000 km'],
    correct: 2,
    accent: '#9c6fd6'
  },
  {
    realm: 'Philosophy',
    question: 'What does Vasudhaiva Kutumbakam mean?',
    options: ['India is great', 'The whole world is one family', 'Knowledge is power', 'Truth always wins'],
    correct: 1,
    accent: '#ffb347'
  },
  {
    realm: 'Philosophy',
    question: 'Which ancient Indian school was the world\'s first organized atheist philosophy?',
    options: ['Vedanta', 'Buddhism', 'Charvaka', 'Jainism'],
    correct: 2,
    accent: '#ffb347'
  },
  {
    realm: 'Philosophy',
    question: 'Who founded Advaita Vedanta philosophy?',
    options: ['Chanakya', 'Aryabhata', 'Adi Shankaracharya', 'Buddha'],
    correct: 2,
    accent: '#ffb347'
  },
  {
    realm: 'Trade',
    question: 'What percentage of world GDP did ancient India account for around 1 AD?',
    options: ['10%', '20%', 'Nearly one third', '5%'],
    correct: 2,
    accent: '#4db6ac'
  },
  {
    realm: 'Trade',
    question: 'What did Roman historian Pliny complain about regarding India?',
    options: ['Indian armies', 'Rome losing gold to India', 'Indian spies', 'Indian ships'],
    correct: 1,
    accent: '#4db6ac'
  },
  {
    realm: 'Trade',
    question: 'What spice was so valuable it was called black gold in the ancient world?',
    options: ['Turmeric', 'Cardamom', 'Black Pepper', 'Cinnamon'],
    correct: 2,
    accent: '#4db6ac'
  },
  {
    realm: 'Trade',
    question: 'What were ancient Indian merchant guilds called?',
    options: ['Mandals', 'Shrenis', 'Sabhas', 'Sanghas'],
    correct: 1,
    accent: '#4db6ac'
  },
  {
    realm: 'Architecture',
    question: 'How much rock was removed to build the Kailasa Temple at Ellora?',
    options: ['100,000 tons', '400,000 tons', '50,000 tons', '1 million tons'],
    correct: 1,
    accent: '#cc7a4a'
  },
  {
    realm: 'Architecture',
    question: 'How long has the Delhi Iron Pillar stood without rusting?',
    options: ['500 years', '1000 years', '1600 years', '200 years'],
    correct: 2,
    accent: '#cc7a4a'
  },
  {
    realm: 'Architecture',
    question: 'What function do the wheels of Konark Sun Temple serve?',
    options: ['Decoration only', 'Accurate sundials', 'Water channels', 'Wind measurement'],
    correct: 1,
    accent: '#cc7a4a'
  },
  {
    realm: 'Art',
    question: 'How old are the paintings at Bhimbetka rock shelters?',
    options: ['5,000 years', '10,000 years', '30,000 years', '1,000 years'],
    correct: 2,
    accent: '#e57373'
  },
  {
    realm: 'Art',
    question: 'What was Dhaka Muslin called by ancient traders?',
    options: ['Golden thread', 'Woven air', 'River silk', 'Cloud fabric'],
    correct: 1,
    accent: '#e57373'
  },
  {
    realm: 'Art',
    question: 'Where does a Nataraja sculpture stand as a symbol of modern physics?',
    options: ['NASA', 'CERN', 'MIT', 'Oxford'],
    correct: 1,
    accent: '#e57373'
  },
  {
    realm: 'Ayurveda',
    question: 'How many medicinal plants does the Charaka Samhita document?',
    options: ['100', '300', 'Over 700', '50'],
    correct: 2,
    accent: '#81c784'
  },
  {
    realm: 'Ayurveda',
    question: 'What surgical procedure is Sushruta credited with performing in 600 BCE?',
    options: ['Heart surgery', 'Plastic surgery and cataract surgery', 'Brain surgery', 'Bone surgery'],
    correct: 1,
    accent: '#81c784'
  },
  {
    realm: 'Ayurveda',
    question: 'What property of copper vessels did ancient Indians know about?',
    options: ['They keep water cold', 'Antibacterial properties', 'They purify minerals', 'They improve taste'],
    correct: 1,
    accent: '#81c784'
  },
  {
    realm: 'War Strategy',
    question: 'For how many years was the Arthashastra lost before being rediscovered?',
    options: ['500 years', '1000 years', 'Over 2000 years', '200 years'],
    correct: 2,
    accent: '#ef5350'
  },
  {
    realm: 'War Strategy',
    question: 'What is the first step in Chanakya\'s Saam Daam Dand Bhed strategy?',
    options: ['War', 'Punishment', 'Negotiation', 'Division'],
    correct: 2,
    accent: '#ef5350'
  },
  {
    realm: 'War Strategy',
    question: 'How far did the Chola naval expedition of 1025 AD travel?',
    options: ['500 km', '3000 km', '1000 km', '200 km'],
    correct: 1,
    accent: '#ef5350'
  },
  {
    realm: 'War Strategy',
    question: 'What made the Chakravyuha formation nearly impossible to escape?',
    options: ['It was very large', 'It was a rotating spiral that closed behind attackers', 'It had elephants', 'It used fire'],
    correct: 1,
    accent: '#ef5350'
  }
];

const titles = [
  { min: 0, max: 30, title: 'Seeker', description: 'Your journey has just begun' },
  { min: 31, max: 50, title: 'Scholar', description: 'The ancient texts are opening to you' },
  { min: 51, max: 70, title: 'Sage', description: 'Ancient wisdom flows through you' },
  { min: 71, max: 90, title: 'Rishi', description: 'You see what others cannot' },
  { min: 91, max: 100, title: 'Maharishi of Dharohar', description: 'You have mastered the knowledge of ancient Bharat' }
];

function Game() {
  const navigate = useNavigate();
  const [gameState, setGameState] = useState('intro');
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(20);
  const [shuffled, setShuffled] = useState([]);
  const containerRef = useRef(null);
  const questionRef = useRef(null);
  const timerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      gsap.fromTo(containerRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1, ease: "power2.out" }
      );
    }
  }, []);

  useEffect(() => {
    const s = [...questions].sort(() => Math.random() - 0.5).slice(0, 15);
    setShuffled(s);
  }, []);

  useEffect(() => {
    if (gameState !== 'playing') return;
    if (selected !== null) return;

    setTimeLeft(20);
    timerRef.current = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timerRef.current);
          handleTimeout();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timerRef.current);
  }, [currentQ, gameState]);

  const handleTimeout = () => {
    setSelected(-1);
    setTimeout(() => moveNext(), 1500);
  };

  const handleAnswer = (index) => {
    if (selected !== null) return;
    clearInterval(timerRef.current);
    setSelected(index);

    if (index === shuffled[currentQ].correct) {
      setScore(prev => prev + 1);
    }
    setTimeout(() => moveNext(), 1500);
  };

  const moveNext = () => {
    if (currentQ + 1 >= shuffled.length) {
      setGameState('results');
      return;
    }
    gsap.to(questionRef.current, {
      opacity: 0, x: -30, duration: 0.3,
      onComplete: () => {
        setCurrentQ(prev => prev + 1);
        setSelected(null);
        gsap.fromTo(questionRef.current,
          { opacity: 0, x: 30 },
          { opacity: 1, x: 0, duration: 0.4 }
        );
      }
    });
  };

  const getTitle = () => {
    const percentage = (score / shuffled.length) * 100;
    return titles.find(t => percentage >= t.min && percentage <= t.max) || titles[0];
  };

  const startGame = () => {
    setGameState('playing');
    setCurrentQ(0);
    setSelected(null);
    setScore(0);
  };

  if (!shuffled.length) return null;

  const current = shuffled[currentQ];
  const percentage = Math.round((score / shuffled.length) * 100);
  const earned = getTitle();

  return (
    <div className="game-container" ref={containerRef}>
      <button className="back-btn" onClick={() => navigate('/choose')}>← Back</button>

      {/* INTRO */}
      {gameState === 'intro' && (
        <div className="game-intro">
          <h1 className="game-title">धरोहर Quiz</h1>
          <p className="game-subtitle">Test your knowledge of ancient India</p>
          <div className="game-rules">
            <p>15 questions from all 8 realms</p>
            <p>20 seconds per question</p>
            <p>Earn your title based on your score</p>
          </div>
          <button className="start-btn" onClick={startGame}>
            Begin the Challenge
          </button>
        </div>
      )}

      {/* PLAYING */}
      {gameState === 'playing' && (
        <div className="game-play" ref={questionRef}>
          <div className="game-progress">
            <span style={{ color: current.accent }}>{current.realm}</span>
            <span>{currentQ + 1} / {shuffled.length}</span>
            <span className={`timer ${timeLeft <= 5 ? 'urgent' : ''}`}>
              {timeLeft}s
            </span>
          </div>

          <div className="timer-bar">
            <div
              className="timer-fill"
              style={{
                width: `${(timeLeft / 20) * 100}%`,
                background: current.accent
              }}
            ></div>
          </div>

          <h2 className="question-text">{current.question}</h2>

          <div className="options-grid">
            {current.options.map((option, index) => (
              <button
                key={index}
                className={`option-btn ${
                  selected !== null
                    ? index === current.correct
                      ? 'correct'
                      : index === selected
                        ? 'wrong'
                        : 'dim'
                    : ''
                }`}
                style={selected === null ? { '--accent': current.accent } : {}}
                onClick={() => handleAnswer(index)}
              >
                <span className="option-letter">
                  {['A', 'B', 'C', 'D'][index]}
                </span>
                {option}
              </button>
            ))}
          </div>

          <div className="score-display">
            Score: {score}
          </div>
        </div>
      )}

      {/* RESULTS */}
      {gameState === 'results' && (
        <div className="game-results">
          <p className="results-label">YOUR TITLE</p>
          <h1 className="results-title">{earned.title}</h1>
          <p className="results-description">{earned.description}</p>
          <div className="results-score">
            <span className="score-number">{score}</span>
            <span className="score-total">/ {shuffled.length}</span>
          </div>
          <p className="score-percent">{percentage}% correct</p>
          <div className="results-actions">
            <button className="action-btn primary" onClick={startGame}>
              Try Again
            </button>
            <button className="action-btn" onClick={() => navigate('/choose')}>
              Explore More
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Game;