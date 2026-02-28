import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import './Opening.css';

function Opening() {
  const navigate = useNavigate();
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const taglineRef = useRef(null);
  const btnRef = useRef(null);
  const mapRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(mapRef.current,
      { opacity: 0, scale: 1.1 },
      { opacity: 1, scale: 1, duration: 2.5, ease: "power2.out" }
    )
    .fromTo(titleRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1.5, ease: "power2.out" },
      "-=1"
    )
    .fromTo(subtitleRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power2.out" },
      "-=0.8"
    )
    .fromTo(taglineRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1, ease: "power2.out" },
      "-=0.5"
    )
    .fromTo(btnRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
      "-=0.3"
    );
  }, []);

  const handleBegin = () => {
    gsap.to('.opening-container', {
      opacity: 0,
      duration: 1,
      ease: "power2.inOut",
      onComplete: () => navigate('/choose')
    });
  };

  return (
    <div className="opening-container">
      <div className="map-overlay" ref={mapRef}></div>
      <div className="dust-particles">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="particle" style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${3 + Math.random() * 4}s`
          }}></div>
        ))}
      </div>
      <div className="opening-content">
        <h1 ref={titleRef} className="dharohar-title">धरोहर</h1>
        <h2 ref={subtitleRef} className="dharohar-subtitle">Ancient India Reimagined</h2>
        <p ref={taglineRef} className="dharohar-tagline">
          "Before the world knew — India already did."
        </p>
        <button ref={btnRef} className="begin-btn" onClick={handleBegin}>
          Begin Your Journey
        </button>
      </div>
    </div>
  );
}

export default Opening;