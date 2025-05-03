import React from 'react';
import './nav.css'; 
const Navbar = () => {
  return (
    <nav>
      <div className="navbar-top">
        <div className="contact-info">
          <span>📍 680 Olive Street Mccomb, NY</span>
          <span>📧 cosymart@gmail.com</span>
          <span>⏰ Open Time: 9:00 AM to 10:00 PM</span>
        </div>
        <div className="auth-links">
          <a href="/login">Log In</a>
          <a href="/register">Register Now</a>
        </div>
      </div>
      <div className="navbar-main">
        <div className="logo">
          <img src="https://static.vecteezy.com/system/resources/thumbnails/008/996/198/small_2x/any-logo-any-letter-any-letter-logo-design-initials-any-logo-linked-with-circle-and-uppercase-monogram-logo-any-typography-for-technology-business-and-real-estate-brand-vector.jpg" alt="CosyMart Logo" />
        </div>
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/shop">Shop</a></li>
          <li><a href="/collections">Collections</a></li>
          <li><a href="/accessories">Accessories</a></li>
          <li><a href="/pages">Page</a></li>
          <li><a href="/contact">Contact Us</a></li>
        </ul>
        <div className="navbar-icons">
          <button className="search-icon">🔍</button>
          <button className="cart-icon">🛒</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;