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
  const [isLetterOpen, setIsLetterOpen] = useState(false);
  const [clickedButton, setClickedButton] = useState(false);
  const [showHiddenMessage, setShowHiddenMessage] = useState(false);
  const [zoomedImage, setZoomedImage] = useState(null);
  const [currentMessage, setCurrentMessage] = useState(0);
  const [showGallery, setShowGallery] = useState(false);
  const [heartCount, setHeartCount] = useState(0);
  const [showFirstDate, setShowFirstDate] = useState(false);
  const [currentStory, setCurrentStory] = useState(0);

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
    envelope.classList.add('envelope-exit');
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

  const handleHiddenMessageReveal = () => {
    setShowHiddenMessage(!showHiddenMessage);
  };

  const handleImageClick = (index) => {
    setZoomedImage(zoomedImage === index ? null : index);
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

  const renderSideImages = (start, end) => (
    <div className="images-column">
      <div className="top-images">
        {letterImages.slice(start, start + Math.ceil((end - start) / 2)).map((img, index) => (
          <img
            key={start + index}
            src={img}
            alt={`Memory ${start + index + 1}`}
            onClick={() => handleImageClick(start + index)}
            className={`side-image ${zoomedImage === (start + index) ? 'zoomed' : ''}`}
            style={{
              animationDelay: `${(index * 0.2)}s`
            }}
          />
        ))}
      </div>
      <div className="bottom-images">
        {letterImages.slice(start + Math.ceil((end - start) / 2), end).map((img, index) => (
          <img
            key={start + Math.ceil((end - start) / 2) + index}
            src={img}
            alt={`Memory ${start + Math.ceil((end - start) / 2) + index + 1}`}
            onClick={() => handleImageClick(start + Math.ceil((end - start) / 2) + index)}
            className={`side-image ${zoomedImage === (start + Math.ceil((end - start) / 2) + index) ? 'zoomed' : ''}`}
            style={{
              animationDelay: `${((index + Math.ceil((end - start) / 2)) * 0.2)}s`
            }}
          />
        ))}
      </div>
    </div>
  );

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
      {zoomedImage && <div className="modal-overlay" onClick={() => setZoomedImage(null)} />}
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
        <div className="side-images left-side">
          {renderSideImages(0, 13)}
        </div>

        <div className="letter-container">
          <h1 className="title">Dear Love,</h1>

          <p className="letter-text">
            From the moment I met you, life has felt like a sweet dream. 💖 Your
            smile lights up my day, and your kindness inspires me every single
            moment. You are the sunshine ☀️ and the moonlight 🌕 of my life.
          </p>

          {renderMemorySection()}

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

            {renderMilestones()}

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
              
              <div className="signature">
                <p>Forever Yours,</p>
                <p className="signature-name">♥️ Me</p>
              </div>
            </div>

            <div className="reveal-section">
              <button
                className="interaction-button reveal-button"
                onClick={handleHiddenMessageReveal}
              >
                <span className="button-emoji">
                  {showHiddenMessage ? '💝' : '🔐'}
                </span>
                {showHiddenMessage ? "Hide My Heart" : "Open My Heart"}
              </button>

              <div className={`hidden-message ${!showHiddenMessage ? "hidden" : ""}`}>
                <p>You are my favorite person in the world 🌎. Always will be. 🥹❤️</p>
                <p>… and yes, I'll love you forever. 💍</p>
              </div>
            </div>
          </div>
        </div>

        <div className="side-images right-side">
          {renderSideImages(13, 26)}
        </div>
      </div>
    </>
  );
}

export default App;