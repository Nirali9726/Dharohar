import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { realmsData } from '../realmsData';
import StoryCard from '../components/StoryCard';
import './Realm.css';

function Realm() {
  const { realmId } = useParams();
  const navigate = useNavigate();
  const realm = realmsData[realmId];
  const [selectedStory, setSelectedStory] = useState(null);
  const [discovered, setDiscovered] = useState([]);
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const envRef = useRef(null);

  useEffect(() => {
    if (!realm) {
      navigate('/choose');
      return;
    }
    gsap.fromTo(containerRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5, ease: "power2.out" }
    );
    gsap.fromTo(titleRef.current,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 1, delay: 0.5, ease: "power2.out" }
    );
    gsap.fromTo(envRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, delay: 0.8, ease: "power2.out" }
    );
  }, [realm, navigate]);

  if (!realm) return null;

  const allObjects = realm.zones.reduce((acc, zone) => [...acc, ...zone.objects], []);
  const totalObjects = allObjects.length;

  const handleObjectClick = (object) => {
    setSelectedStory(object.story);
    if (!discovered.includes(object.id)) {
      setDiscovered([...discovered, object.id]);
    }
  };

  return (
    <div
      className="realm-container"
      style={{ '--realm-accent': realm.accent }}
      ref={containerRef}
    >
      {/* Header */}
      <div className="realm-header" ref={titleRef}>
        <button className="back-btn" onClick={() => navigate('/choose')}>
          ← Back
        </button>
        <div className="realm-title-group">
          <h1 className="realm-title" style={{ color: realm.accent }}>
            {realm.sanskrit}
          </h1>
          <p className="realm-subtitle">{realm.name}</p>
        </div>
        <div className="discovery-tracker">
          {discovered.length} of {totalObjects} discovered
        </div>
      </div>

      {/* Single Zone Environment */}
      <div className="zone-environment" ref={envRef}>
        <div className="environment-bg">
          <div className="env-texture"></div>
          <p className="env-description">{realm.description}</p>
        </div>

        {/* Interactive Objects */}
        <div className="objects-container">
          {allObjects.map((object) => (
            <div
              key={object.id}
              className={`interactive-object ${discovered.includes(object.id) ? 'discovered' : ''}`}
              style={{
                left: `${object.position.x}%`,
                top: `${object.position.y}%`,
                '--accent': realm.accent
              }}
              onClick={() => handleObjectClick(object)}
            >
              <div className="book-icon">
                {discovered.includes(object.id) ? '📖' : '📕'}
              </div>
              <p className="object-label">{object.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Story Card */}
      {selectedStory && (
        <StoryCard
          story={selectedStory}
          accent={realm.accent}
          onClose={() => setSelectedStory(null)}
        />
      )}
    </div>
  );
}

export default Realm;