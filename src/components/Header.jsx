import React from 'react';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="content-section">
          <h1>Anmol Acharya</h1>
          <div className="contact-info">
            <p>📱 (720)812-6205 | 📧 anmolacharya94@gmail.com</p>
            <p>
              🔗 <a href="https://linkedin.com/in/anmolacharyauta" target="_blank" rel="noopener noreferrer">
                linkedin.com/in/anmolacharyauta
              </a>{' '}
              |{' '}
              💻 <a href="https://github.com/AnmolAcharya" target="_blank" rel="noopener noreferrer">
                github.com/AnmolAcharya
              </a>
            </p>
          </div>
        </div>
        <div className="name-and-photo">
          <img src="/mypics.png" alt="Anmol Acharya" className="profile-photo" />
        </div>
      </div>
    </header>
  );
};

export default Header; 