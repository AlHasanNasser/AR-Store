import React from 'react';
import './nav.css'; 
const Navbar = () => {
  return (
    <nav>
      <div className="navbar-top">
        <div className="contact-info">
          <span className='left-side'>

          <span>📍 680 Olive Street Mccomb, NY</span>
          <span >📧 cosymart@gmail.com</span>
          </span>
          <span className='right-side'>⏰ Open Time: 9:00 AM to 10:00 PM</span>
        </div>
        <div className="auth-links right-side">
          <a  href="/login">Log In</a>
          <a href="/register">Register Now</a>
        </div> 
      </div>
      <div className="navbar-main">
       
        <ul className="nav-links">
          <span className='left-side'> 

          <li ><a href="/">Home</a></li>
          <li ><a href="/shop">Shop</a></li>
          <li ><a href="/collections">Collections</a></li>
          </span>
          <span className='right-side'>

          <li ><a href="/accessories">Accessories</a></li>
          <li><a href="/pages">Page</a></li>
          <li ><a href="/contact">Contact Us</a></li>
          </span>
        </ul>
        <div className="navbar-icons right-side">
          <button className="search-icon">🔍</button>
          <button className="cart-icon">🛒</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;