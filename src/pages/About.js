import React from 'react';
import '../styles/About.css';

function About() {
  return (
    <div className="about">
      <h2>About Me</h2>
      <p>I'm a 4th-year Computer Science student at CSUF. I specialize in AI and web development. Here is my resume:</p>
      <a href="/resume.pdf" download>Download Resume</a>
    </div>
  );
}

export default About;
