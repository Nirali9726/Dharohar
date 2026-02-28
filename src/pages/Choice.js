import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import './Choice.css';

const realms = [
  { id: 'mathematics', symbol: '∞', name: 'Mathematics', sanskrit: 'गणित', accent: '#4fc3f7' },
  { id: 'astronomy', symbol: '✦', name: 'Astronomy', sanskrit: 'खगोल', accent: '#9c6fd6' },
  { id: 'philosophy', symbol: '☯', name: 'Philosophy', sanskrit: 'दर्शन', accent: '#ffb347' },
  { id: 'trade', symbol: '⚓', name: 'Trade', sanskrit: 'व्यापार', accent: '#4db6ac' },
  { id: 'architecture', symbol: '⌂', name: 'Architecture', sanskrit: 'स्थापत्य', accent: '#cc7a4a' },
  { id: 'art', symbol: '❋', name: 'Art', sanskrit: 'कला', accent: '#e57373' },
  { id: 'ayurveda', symbol: '✿', name: 'Ayurveda', sanskrit: 'आयुर्वेद', accent: '#81c784' },
  { id: 'warstrategy', symbol: '⚔', name: 'War Strategy', sanskrit: 'युद्ध नीति', accent: '#ef5350' },
];

function Choice() {
  const navigate = useNavigate();
  const cardsRef = useRef([]);
  const titleRef = useRef(null);
  const trackerRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(titleRef.current,
      { opacity: 0, y: -30 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    )
    .fromTo(trackerRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.8 },
      "-=0.5"
    )
    .fromTo(cardsRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out"
      },
      "-=0.3"
    );
  }, []);

  const handleCardHover = (index, isEntering) => {
    gsap.to(cardsRef.current[index], {
      y: isEntering ? -8 : 0,
      duration: 0.3,
      ease: "power2.out"
    });
  };

  const handleRealmClick = (realmId) => {
    gsap.to('.choice-container', {
      opacity: 0,
      duration: 0.8,
      ease: "power2.inOut",
      onComplete: () => navigate(`/realm/${realmId}`)
    });
  };

  return (
    <div className="choice-container">
      <div className="choice-header">
        <h1 ref={titleRef} className="choice-title">Choose Your Realm</h1>
        <p ref={trackerRef} className="realm-tracker">0 of 8 realms explored</p>
      </div>
      <div className="realms-grid">
        {realms.map((realm, index) => (
          <div
            key={realm.id}
            ref={el => cardsRef.current[index] = el}
            className="realm-card"
            style={{ '--accent': realm.accent }}
            onMouseEnter={() => handleCardHover(index, true)}
            onMouseLeave={() => handleCardHover(index, false)}
            onClick={() => handleRealmClick(realm.id)}
          >
            <div className="card-texture"></div>
            <div className="realm-symbol">{realm.symbol}</div>
            <div className="realm-names">
              <p className="realm-sanskrit">{realm.sanskrit}</p>
              <p className="realm-english">{realm.name}</p>
            </div>
            <div className="card-border" style={{ borderColor: realm.accent }}></div>
          </div>
        ))}
      </div>
      <button className="game-btn" onClick={() => navigate('/game')}>
  ⚔ Test Your Knowledge
</button>
      <button className="game-btn" style={{marginTop: '12px'}} onClick={() => navigate('/puzzle')}>
  🏺 The Hidden Portrait
</button>
    </div>
  );
}

export default Choice;