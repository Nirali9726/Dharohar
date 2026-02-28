import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './StoryCard.css';

function StoryCard({ story, accent, onClose }) {
  const cardRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(overlayRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.4, ease: "power2.out" }
    );
    gsap.fromTo(cardRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
    );
  }, []);

  const handleClose = () => {
    gsap.to(cardRef.current, {
      opacity: 0,
      y: 20,
      duration: 0.4,
      ease: "power2.in"
    });
    gsap.to(overlayRef.current, {
      opacity: 0,
      duration: 0.4,
      ease: "power2.in",
      onComplete: onClose
    });
  };

  return (
    <div className="story-overlay" ref={overlayRef} onClick={handleClose}>
      <div
        className="story-card"
        ref={cardRef}
        style={{ '--accent': accent }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="close-btn" onClick={handleClose}>✕</button>
        <div className="story-accent-line" style={{ background: accent }}></div>
        <div className="story-content">
          <h2 className="story-title">{story.title}</h2>
          <p className="story-subtitle">{story.subtitle}</p>
          <p className="story-text">{story.content}</p>
          <div className="story-fact">
            <span className="fact-label">DID YOU KNOW</span>
            <p className="fact-text">{story.fact}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StoryCard;