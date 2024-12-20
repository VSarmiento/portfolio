import React, { useEffect } from 'react';
import profilePic from '../assets/headshot.jpg';
import '../styles/Home.css';

function Home() {
  useEffect(() => {
    const homeElement = document.querySelector('.home');
    homeElement.classList.add('fade-in');
  }, []);

  return (
    <div className="home">
      <div className='home-box'>
      <img src={profilePic} alt="Vahl" className="profile-pic"/>
        <h2>Hello! My name is Vahl.</h2>
        <p>I am a Software Engineer and a 4th-year Computer Science student at California State University, Fullerton.</p>

        <a href="/VahlSarmientoResume.pdf" target='_blank' rel="noopener noreferrer">Resume</a>

        <div className="skills-section">
          <h3>A Few Skills</h3>
          <ul className="skills-list">
            <li>Python</li>
            <li>C++</li>
            <li>Machine Learning</li>
            <li>Web Development</li>
            <li>Data Structures</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;