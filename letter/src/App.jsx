import React, { useState } from "react";
import "./App.css";
import confetti from 'canvas-confetti';

// Fix duplicate imports with unique names
import letter1 from '/img/LETTER1.jpeg';
import letter2 from '/img/LETTER2.jpeg';
import letter3 from '/img/LETTER3.jpeg';
import letter4 from '/img/LETTER4.jpeg';
import letter5 from '/img/LETTER5.jpeg';
import letter6 from '/img/LETTER6.jpeg';
import letter7 from '/img/LETTER7.jpeg';
import letter8 from '/img/LETTER8.jpeg';
import letter9 from '/img/LETTER9.jpeg';
import letter10 from '/img/LETTER10.jpeg';
import letter11 from '/img/LETTER11.jpeg';
import letter12 from '/img/LETTER12.jpg';
import letter13 from '/img/LETTER13.jpeg';
import letter14 from '/img/LETTER14.jpg';
import letter15 from '/img/LETTER15.jpeg';
import letter16 from '/img/LETTER16.jpeg';
import letter17 from '/img/LETTER17.jpeg';
import letter18 from '/img/LETTER18.jpeg';
import letter19 from '/img/LETTER19.jpeg';
import letter20 from '/img/LETTER20.jpeg';
import letter21 from '/img/LETTER21.jpeg';
import letter22 from '/img/LETTER22.jpeg';
import letter23 from '/img/LETTER23.jpeg';
import letter24 from '/img/LETTER24.jpg';
import letter25 from '/img/LETTER25.jpg';
import letter26 from '/img/LETTER26.jpg';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLetterOpen, setIsLetterOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');
  const [attemptCount, setAttemptCount] = useState(0);
  const [clickedButton, setClickedButton] = useState(false);
  const [zoomedImage, setZoomedImage] = useState(null);
  const [currentMessage, setCurrentMessage] = useState(0);
  const [showGallery, setShowGallery] = useState(false);
  const [heartCount, setHeartCount] = useState(0);
  const [showFirstDate, setShowFirstDate] = useState(false);
  const [currentStory, setCurrentStory] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [showSuccessHearts, setShowSuccessHearts] = useState(false);
  const [showGalleryModal, setShowGalleryModal] = useState(false);

  const loveMessages = [
    "Every moment with you is a gift 🎁",
    "You make my heart smile 😊",
    "You're my favorite notification 📱",
    "My love for you grows stronger each day 🌱",
    "You're the missing piece to my puzzle ❤️"
  ];

  const specialMoments = [
    "Our first date 🌹",
    "Our favorite memory together 💫",
    "That time we laughed until we cried 😂",
    "When you held my hand for the first time ✨",
    "Every moment with you is magical 💖"
  ];

  const ourStory = [
    {
      title: "How We Met",
      content: "Remember that day we first met? It felt like destiny brought us together. The way you smiled and how our eyes met for the first time - I knew there was something special about you.",
      date: "First Met: [Your Date]"
    },
    {
      title: "Our First Chat",
      content: "Our first conversation was so natural, like we'd known each other forever. We talked for hours about everything and nothing. Your messages made my heart skip a beat.",
      date: "First Chat: [Your Date]"
    },
    {
      title: "First Time Together",
      content: "Our first date was magical. Every moment spent with you felt like a scene from a romantic movie. Your laugh, your voice, everything about you made that day perfect.",
      date: "First Date: [Your Date]"
    },
    {
      title: "Special Moments",
      content: "From our silly jokes to our deep conversations, from our first picture together to our countless adventures - every moment with you is treasured.",
      date: "And many more to come..."
    }
  ];

  const milestones = [
    {
      emoji: "💝",
      title: "First Meeting",
      description: "The magical moment when our eyes first met",
      date: "[Date]"
    },
    {
      emoji: "💌",
      title: "First Message",
      description: "When you first said hi, my heart skipped a beat",
      date: "[Date]"
    },
    {
      emoji: "🌹",
      title: "First Date",
      description: "Our perfect first date together",
      date: "[Date]"
    },
    {
      emoji: "✨",
      title: "First Kiss",
      description: "The moment that took my breath away",
      date: "[Date]"
    }
  ];

  const ourJourney = [
    {
      title: "First Meeting",
      content: "Remember that day we first met? It felt like destiny brought us together. The way you smiled and how our eyes met for the first time - I knew there was something special about you.",
      date: "[Your First Meeting Date]",
      emoji: "💝",
      highlight: "The magical moment that changed everything"
    },
    {
      title: "First Message",
      content: "Our first conversation was so natural, like we'd known each other forever. We talked for hours about everything and nothing. Your messages made my heart skip a beat.",
      date: "[Your First Chat Date]",
      emoji: "💌",
      highlight: "When you first brightened my notifications"
    },
    {
      title: "First Date",
      content: "Our first date was magical. Every moment spent with you felt like a scene from a romantic movie. Your laugh, your voice, everything about you made that day perfect.",
      date: "[Your First Date]",
      emoji: "🌹",
      highlight: "The beginning of our adventure together"
    },
    {
      title: "First Kiss",
      content: "That moment when time stood still, and the world faded away. Just you and me, lost in a perfect moment that I'll cherish forever.",
      date: "[Your First Kiss Date]",
      emoji: "✨",
      highlight: "When sparks truly flew"
    },
    {
      title: "Special Memories",
      content: "From our silly jokes to our deep conversations, from our first picture together to our countless adventures - every moment with you is treasured.",
      date: "And many more to come...",
      emoji: "💫",
      highlight: "Building our story together"
    }
  ];

  const triggerConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#ff6b81', '#ff8fa3', '#ffd6e0']
    });
  };

  const handleEnvelopeClick = () => {
    const envelope = document.querySelector('.envelope');
    envelope.classList.add('exit');
    triggerConfetti();
    setTimeout(() => {
      setIsLetterOpen(true);
    }, 1000);
  };

  const handleButtonClick = () => {
    setClickedButton(true);
    triggerConfetti();
    setCurrentMessage((prev) => (prev + 1) % loveMessages.length);
  };

  const handleImageClick = (index) => {
    setZoomedImage(zoomedImage === index ? null : index);
  };

  const errorMessages = [
    "You're not my girlfriend! 💔",
    "Nice try, but no! 🚫",
    "Stop trying to read our love letter! 😤",
    "This is getting awkward... 😅",
    "Really? Still trying? 🤨",
    "Sorry, but this is private! 🔒",
    "Nope, not for you! 🙅‍♀️",
    "Keep guessing... (or maybe don't) 😏",
    "Are you trying to steal my girlfriend? 😠",
    "You must be really curious! 👀",
    "Wrong answer, try again! (...or don't) 😌",
    "Not even close! 🎯",
    "Better luck next time! 🍀",
    "You're persistent, I'll give you that! 💪",
    "Still wrong! 🚫",
    "My girlfriend will laugh at this attempt 😂",
    "Not today! Maybe never... 🤔",
    "Keep dreaming! 💭",
    "Nice try, but I only love one person 💝",
    "You're definitely not my Bibang! 🎭"
  ];

  const handleLogin = (e) => {
    e.preventDefault();
    
    if (!username.trim()) {
      setError("Please enter your nickname! 🥺");
      triggerErrorAnimation();
      return;
    }

    if (username.toLowerCase() === 'bibang') {
      const form = document.querySelector('.login-form-wrapper');
      form.classList.add('success');
      setShowSuccessHearts(true);
      triggerConfetti();
      
      setTimeout(() => {
        setIsAuthenticated(true);
        setError('');
      }, 1000);
    } else {
      setAttemptCount(prev => prev + 1);
      // Get random error message
      const randomIndex = Math.floor(Math.random() * errorMessages.length);
      setError(errorMessages[randomIndex]);
      triggerErrorAnimation();
    }
  };

  const triggerErrorAnimation = () => {
    const form = document.querySelector('.login-form');
    form.classList.add('shake');
    setTimeout(() => form.classList.remove('shake'), 500);
  };

  const letterImages = [
    letter1, letter2, letter3, letter4,
    letter5, letter6, letter7, letter8,
    letter9, letter10, letter11, letter12,
    letter13, letter14, letter15, letter16,
    letter17, letter18, letter19, letter20,
    letter21, letter22, letter23, letter24,
    letter25, letter26
  ];

  const buttonEmojis = {
    heart: '❤️',
    camera: '📸',
    letter: '💌',
    chat: '💭',
    calendar: '📅',
    secret: '🔐'
  };

  const renderStoryButton = (story, index) => (
    <button 
      key={index}
      className={`story-nav-button ${currentStory === index ? 'active' : ''}`}
      onClick={() => setCurrentStory(index)}
    >
      <span className="button-emoji">
        {index === 0 ? '💘' : 
         index === 1 ? '💌' :
         index === 2 ? '🌟' : '✨'}
      </span>
      <span>{story.title}</span>
    </button>
  );

  const renderMemorySection = () => (
    <div className="memories-section">
      <h2 className="section-title">Our Story ✨</h2>
      <div className="story-navigation">
        {ourStory.map((story, index) => renderStoryButton(story, index))}
      </div>
      <div className="story-content fade-in">
        <h3 className="story-title">{ourStory[currentStory].title}</h3>
        <p className="story-text">{ourStory[currentStory].content}</p>
        <span className="story-date">{ourStory[currentStory].date}</span>
        {currentStory === 2 && (
          <button 
            className="show-memory-button"
            onClick={() => setShowFirstDate(true)}
          >
            <span className="button-emoji">📸</span>
            View Our Memory
          </button>
        )}
      </div>
    </div>
  );

  const renderButton = (text, emoji, onClick, className = '') => (
    <button 
      className={`interaction-button ${className}`}
      onClick={onClick}
    >
      <span className="button-emoji">{buttonEmojis[emoji]}</span>
      {text}
    </button>
  );

  const renderMilestones = () => (
    <div className="milestones-section">
      <h2 className="subtitle">Our Journey Together 💫</h2>
      <div className="milestones-grid">
        {milestones.map((milestone, index) => (
          <div key={index} className="milestone-card">
            <div className="milestone-emoji">{milestone.emoji}</div>
            <h3 className="milestone-title">{milestone.title}</h3>
            <p className="milestone-desc">{milestone.description}</p>
            <span className="milestone-date">{milestone.date}</span>
          </div>
        ))}
      </div>
    </div>
  );

  const renderFloatingHearts = () => {
    return (
      <div className="floating-hearts">
        {[...Array(15)].map((_, index) => (
          <div
            key={index}
            className="floating-heart"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              fontSize: `${Math.random() * (30 - 20) + 20}px`
            }}
          >
            {['💝', '💖', '💗', '💓', '💕'][Math.floor(Math.random() * 5)]}
          </div>
        ))}
      </div>
    );
  };

  const renderSuccessHearts = () => {
    return (
      <div className="success-hearts">
        {[...Array(12)].map((_, index) => (
          <div
            key={index}
            className="success-heart"
            style={{
              left: `${50 + (Math.random() - 0.5) * 40}%`,
              top: `${50 + (Math.random() - 0.5) * 40}%`,
              animationDelay: `${Math.random() * 0.5}s`
            }}
          >
            {['💝', '💖', '💗', '💓', '💕'][Math.floor(Math.random() * 5)]}
          </div>
        ))}
      </div>
    );
  };

  const renderGalleryModal = () => {
    if (!showGalleryModal) return null;
    
    return (
      <div className="gallery-modal">
        <div className="gallery-overlay" onClick={() => setShowGalleryModal(false)}>
          <div className="gallery-content" onClick={e => e.stopPropagation()}>
            <button className="gallery-close" onClick={() => setShowGalleryModal(false)}>
              ✕
            </button>
            <h2 className="gallery-title">Our Precious Moments 💝</h2>
            <div className="gallery-grid">
              {letterImages.map((img, index) => (
                <div key={index} className="gallery-item">
                  <img
                    src={img}
                    alt={`Memory ${index + 1}`}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderJourneySection = () => (
    <div className="journey-section">
      <h2 className="section-title">Our Love Story 💑</h2>
      
      <div className="journey-timeline">
        {ourJourney.map((moment, index) => (
          <div key={index} className="journey-moment">
            <div className="moment-icon">{moment.emoji}</div>
            <div className="moment-content">
              <h3>{moment.title}</h3>
              <p className="moment-highlight">{moment.highlight}</p>
              <p className="moment-text">{moment.content}</p>
              <span className="moment-date">{moment.date}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="journey-footer">
        <p className="journey-note">
          Every day with you is a new chapter in our beautiful story. Here's to making
          countless more memories together. 💕
        </p>
      </div>
    </div>
  );

  if (!isAuthenticated) {
    return (
      <div className="login-container">
        {renderFloatingHearts()}
        {showSuccessHearts && renderSuccessHearts()}
        <div className="login-form-wrapper">
          <form className="login-form" onSubmit={handleLogin}>
            <div className="login-header">
              <h2>💌 Love Letter</h2>
              <p>Enter your nickname to read</p>
            </div>
            <div className="input-group">
              <input
                type="text"
                placeholder="Your nickname..."
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className={error ? 'error' : ''}
                autoFocus
              />
              {error && <div className="error-message">{error}</div>}
            </div>
            <button type="submit" className="login-button">
              Open
            </button>
          </form>
        </div>
      </div>
    );
  }

  if (!isLetterOpen) {
    return (
      <div className="envelope-container" onClick={handleEnvelopeClick}>
        <div className="envelope">
          <div className="envelope-flap"></div>
          <div className="envelope-content">
            <span className="envelope-text">Click to Open</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      {zoomedImage !== null && (
        <div 
          className={`modal-overlay ${zoomedImage !== null ? 'visible' : ''}`}
          onClick={() => {
            setImageLoaded(false);
            setZoomedImage(null);
          }}
        >
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img
              src={letterImages[zoomedImage]}
              alt={`Memory ${zoomedImage + 1}`}
              loading="lazy"
              className={imageLoaded ? 'loaded' : ''}
              onLoad={() => setImageLoaded(true)}
            />
          </div>
        </div>
      )}
      {renderGalleryModal()}
      <div className="hearts-container">
        {[...Array(20)].map((_, index) => (
          <div key={index} 
            className="heart" 
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              fontSize: `${Math.random() * (30 - 10) + 10}px`
            }}
          >
            ❤️
          </div>
        ))}
      </div>
      <div className="app">
        <div className="letter-container">
          <h1 className="title">Dear Love,</h1>

          <div className="letter-content">
            <p className="letter-text">
              From the moment I met you, life has felt like a sweet dream. 💖 Your
              smile lights up my day, and your kindness inspires me every single
              moment. You are the sunshine ☀️ and the moonlight 🌕 of my life.
            </p>

            <button 
              className="gallery-button"
              onClick={() => setShowGalleryModal(true)}
            >
              <span className="button-emoji">📸</span>
              View Our Memories
            </button>

            {renderJourneySection()}

            <div className="centered-content">
              <div className="love-message-carousel">
                <p className="rotating-message">{loveMessages[currentMessage]}</p>
                <button 
                  className="interaction-button"
                  onClick={handleButtonClick}
                >
                  <span className="button-emoji">💝</span>
                  {clickedButton ? "Another Message?" : "Click for Love"}
                </button>
              </div>

              <div className="love-quote">
                <p className="quote-text">
                  "In all the world, there is no heart for me like yours.
                  In all the world, there is no love for you like mine." 
                </p>
                <p className="quote-author">- Maya Angelou</p>
              </div>

              <div className="final-thoughts">
                <p className="letter-text">
                  P.S. Every day with you is a new adventure, and I can't wait to create
                  more beautiful memories together. You make my world brighter, my smile wider,
                  and my heart fuller. 💝
                </p>
                
                <div className="signature-section">
                  <p className="signature-text">Forever Yours,</p>
                  <p className="signature">
                    <span className="signature-heart">♥️</span>
                    Cristan
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );

}

export default App;