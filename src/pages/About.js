import React from 'react';
import PageLayout from '../components/PageLayout';
import '../styles/About.css';

function About() {
  return (
    <PageLayout>
      <div className="about">
        <h2>About Me</h2>
        <p>I'm a 4th-year Computer Science student at CSUF. I specialize in AI and web development.</p>
      </div>
    </PageLayout>
  );
}

export default About;
