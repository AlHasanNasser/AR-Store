import React from 'react';
import './nav.css';
import { FaMapMarkerAlt, FaEnvelope, FaClock, FaSearch, FaShoppingCart, FaHeart } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className="navbar">
      {/* Left Section */}
      <div className="nav-left-section">
        <div className="top-bar">
          <div className="left-info">
            <div className="info-item">
              <FaMapMarkerAlt className="icon" />
              <span>680 Olive Street Mccomb, NY</span>
            </div>
            <div className="info-item info-item2">
              <FaEnvelope className="icon" />
              <span>cosymart@gmail.com</span>
            </div>
          </div>
        </div>
          <div className="bottom-bar">
          <NavLink 
                to="/" 
                className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            >
                Home+
            </NavLink>
          <NavLink 
                to="/shop" 
                className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            >
                Shop+
            </NavLink>
          <NavLink 
                to="/collections" 
                className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            >
               Collections
            </NavLink>
            
          </div>
      </div>

      {/* Logo Section */}
      <div className="nav-logo">
        <h1>CosyMart</h1>
      </div>

      {/* Right Section */}
      <div className="nav-right-section">
        <div className="top-bar">
          <div className="center-info">
            <FaClock className="icon" />
            <span>Open Time - 9.00 AM to 10.00 PM</span>
          </div>
          <div className="right-info">
            <button className="link-button">Log In</button>
            <button className="link-button reg-button">Register Now</button>
          </div>
        </div>
        <div className="bottom-bar">
        <NavLink 
                to="/accessories" 
                className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            >
                Accessories+
            </NavLink>
        <NavLink 
                to="/page" 
                className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            >
                Page+
            </NavLink>
        <NavLink 
                to="/contactus" 
                className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            >
                Contact US
            </NavLink>
        
          <div className="icons">
            <FaSearch className="icon" />
            <div className="icon-badge">
              <FaShoppingCart />
              <span className="badge">03</span>
            </div>
            <div className="icon-badge heart">
              <FaHeart />
              <span className="badge">05</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
