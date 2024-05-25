import React from 'react';
import profilePic from '../img/profile-pic.7166ad3e1f012bca6bd7.jpg';

function Intro() {
  return (
    <section id="intro">
      <img src={profilePic} alt="Taha Elsayed" style={{width: '150px', borderRadius: '50%'}} />
      <h1>Taha Elsayed</h1>
      <p>I am a Technical Architect specialized in digital transformation, Azure, and C#, and building enterprise applications.</p>
    </section>
  );
}

export default Intro;
