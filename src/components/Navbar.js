import React from 'react';
import { Link } from 'react-router-dom';
import github from '../assets/github-icon.png'
import linkedin from '../assets/linkedin-icon.png'
import '../styles/Navbar.css';

const Navbar = ({ isOpen, toggleSidebar }) => {
  return (
    <>
      <button className="toggle-btn" onClick={toggleSidebar}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </button>

      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-content">
          <div className="social-links">
            <a 
              href="https://github.com/VSarmiento" target="_blank" rel="noopener noreferrer" className="social-icon">
              <img src={ github } alt="GitHub" />
            </a>
            <a 
              href="https://www.linkedin.com/in/vahl-sarmiento/" target="_blank" rel="noopener noreferrer" className="social-icon">
              <img src={ linkedin } alt="LinkedIn" />
            </a>
         </div>
         <nav className="nav-links">
            <Link to="/" className="nav-button">Home</Link>
           <Link to="/about" className="nav-button">About</Link>
           <Link to="/projects" className="nav-button">Projects</Link>
           <Link to="/contact" className="contact-button">Contact</Link>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
