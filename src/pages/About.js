import React, { useState } from 'react';
import PageLayout from '../components/PageLayout';
import '../styles/About.css';

function About() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <PageLayout>
      <div className="about">
        <h2>About Me</h2>
        <p>Although I introduced my self earlier. I’m driven by a passion for using technology to solve real-world problems and create lasting impact. 
          My passion for the future is in software development with interests in AI and Web development. While these are my current interests, I am thirsty 
          for knowledge in different aspects of Software Engineering and ready to dive in to learn more about specific specialties in the Software Engineering field! </p><br></br>

        <div className="accordion">
        <div className="accordion-item">
          <button className="accordion-header" onClick={() => toggleAccordion(0)}>
            Work Experience
          </button>
          {activeIndex === 0 && (
            <div className="accordion-content">
              <p><strong>Norooz Clinic Foundation:</strong> AI/Web Developer & Marketing Assistant</p>
              <p><strong>Role:</strong> Manage and enhance the clinic's AI chatbot for improved accuracy and user experience, maintain and develop WordPress features for responsive web design, and support marketing initiatives through content creation, digital strategies, and cross-team collaboration to align with organizational goals.</p><br></br>
              <p><strong>California State University of Fullerton:</strong> Internet of Things Intern</p>
              <p><strong>Role:</strong> Developed IoT devices integrating Arduino hardware and mobile software, led a team to create a sleep-tracking app using Blynk, and gained experience in merging hardware and software for user-centric solutions.</p><br></br>
            </div>
          )}
        </div>

        <div className="accordion-item">
          <button className="accordion-header" onClick={() => toggleAccordion(1)}>
            Schooling
          </button>
          {activeIndex === 1 && (
            <div className="accordion-content">
              <p><strong>California State University of Fullerton:</strong> 4th Year, Bachelor of Computer Science</p>
              <p><strong>Awards:</strong> Deans's List Award (Multiple Semesters)</p>
            </div>
          )}
        </div>
      </div>
      </div>
    </PageLayout>
  );
}

export default About;
