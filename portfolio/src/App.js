import React from 'react';
import './App.css';
import igIcon from './igLogo/igIcon.png';

function App() {
  return (
    <div>
      <menu id="menu">
        <h1 id="logo1">Furkan</h1>
        <h1 id="logo2">Ö.</h1>
        <h2>Portraits</h2>
        <h2>Locations</h2>
        <h2>Contact</h2>
        <a id="instagram" href="https://www.instagram.com/furkanozturk96/">
          <img src={igIcon} alt="igLogo" className="instagramIcon" />
        </a>
      </menu>
    </div>

  );
}

export default App;
