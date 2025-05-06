import React from 'react';
import './nav.css';
import { FaMapMarkerAlt, FaEnvelope, FaClock, FaSearch, FaShoppingCart, FaHeart } from 'react-icons/fa';

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
            <button className="nav-button">Home+</button>
            <button className="nav-button">Shop+</button>
            <button className="nav-button">Collections+</button>
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
            <button className="link-button">Register Now</button>
          </div>
        </div>
        <div className="bottom-bar">
          <button className="nav-button">Accessories</button>
          <button className="nav-button">Page+</button>
          <button className="nav-button">Contact US</button>
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
