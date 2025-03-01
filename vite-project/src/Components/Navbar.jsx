import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-title">
        <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Climate AI</Link>
      </div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/chat">Chat</Link>
        <Link to="/alerts">Alerts</Link>
        <Link to="/map">Map</Link>
      </div>
    </nav>
  );
};

export default Navbar;
