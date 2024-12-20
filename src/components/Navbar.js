import React from 'react';
import { Link } from 'react-router-dom';
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
