import React from 'react';
import PageLayout from '../components/PageLayout';
import '../styles/Projects.css';

function Projects() {
  return (
    <PageLayout>
      <div className="projects">
        <h2>My Projects</h2>
        <p>Here are some of my projects:</p>
        {/* Add project cards or links also make flex box here*/}
      </div>
    </PageLayout>
  );
}

export default Projects;
