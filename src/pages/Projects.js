import React, { useState } from 'react';
import PageLayout from '../components/PageLayout';
import '../styles/Projects.css';

function Projects() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const projects = [
    {
      title: 'AI Race Engineer',
      description: 'The AI Race Engineer is designed to replicate a real-life race engineer, offering players real-time race updates and strategic insights through voice interaction. By leveraging telemetry data and natural language processing, it enhances gameplay focus and immersion, creating a seamless and dynamic racing experience.',
      technologies: 'Technologies: Python, Natural Language Processing (NLP), Data Collection and Telemetry',
      link: 'https://github.com/VSarmiento/AI-Race-Engineer'
    },
    {
      title: 'Color Maker',
      description: 'Developed a Color Maker app for Android that allows users to create custom colors by adjusting RGB sliders. The app provides a real-time preview of the selected color and displays its corresponding hexadecimal code, offering an intuitive and interactive experience for designers and developers.',
      technologies: 'Technologies: Kotlin',
      link: 'https://github.com/VSarmiento/Color-Maker'
    },
    {
      title: 'IJournal',
      description: 'Created an online journal app that stores entries locally on the device, ensuring users can regain access to their data even offline or after a session is interrupted. The app provides a seamless and reliable journaling experience with secure local storage and data persistence.',
      technologies: 'Technologies: HTML, CSS, JavaScript',
      link: 'https://github.com/VSarmiento/AI-Race-Engineer'
    },
    {
      title: 'AI Chatbot',
      description: 'Developed an AI chatbot using Google Dialogflow and integrated it with WordPress for a seamless user experience.',
      technologies: 'Technologies: Dialogflow, WordPress, JavaScript',
      link: 'https://noroozclinic.com/'
    },
  ];

  return (
    <PageLayout>
    <div className="projects">
      <h2>My Projects</h2>
      <div className="accordion">
        {projects.map((project, index) => (
          <div key={index} className="accordion-item">
            <button className="accordion-header" onClick={() => toggleAccordion(index)}>
              {project.title}
            </button>
            {activeIndex === index && (
              <div className="accordion-content">
                <p>{project.description}</p>
                <p><strong>{project.technologies}</strong></p>
                <a href={ project.link } target='_blank' rel="noopener noreferrer">Project Link</a>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
    </PageLayout>
  );
}

export default Projects;