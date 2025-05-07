import React from 'react';
import './home.css'; 

import Navbar from '../../components/nav/nav.jsx'; 
const Home = () => {
    return (
        <div>
            <Navbar />
            <div className="container">
      {/* Sidebar */}
      <div className="sidebar">
        <h2 className="sidebar-title">Shop By Categories</h2>
        <ul className="category-list">
          <li>Apple Collection</li>
          <li>Smart watch & Gadgets</li>
          <li className="active">Home Appliance</li>
          <li>Headphone & Speaker</li>
          <li>Game Pad & Console</li>
          <li>Cameras & Lens</li>
          <li>TV & Audios</li>
          <li>Phone Case & Accessories</li>
          <li>Digital Electronics</li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <div className="banner">
          <div className="banner-text">
            <p className="collection">The Fashion Collection 2023</p>
            <h1>Styles Accessories <br /> & New Gadgets</h1>
            <p className="banner-desc">
              Technologies to processes, from B2C to book invest <br />
              E-Commerce computer science background.
            </p>
            <button className="shop-now-btn">Shop Now</button>
          </div>
          <div className="banner-img">
            <img src="https://i.ibb.co/5MxBGv0/smartwatch.png" alt="Smart Watch" />
          </div>
        </div>

        <div className="promo">
          <div className="promo-left">
            <p className="special-offer">Special Offer</p>
            <h2>Home Pod Mini</h2>
            <p>Best Dresses Discount <strong>40% OFF</strong></p>
            <button className="shop-now-btn small">Shop Now</button>
            <div className="discount-badge">40% off</div>
          </div>

          <div className="features">
            <div className="feature">
              <img src="https://img.icons8.com/external-flat-juicy-fish/60/000000/external-delivery-courier-flat-juicy-fish.png" alt="Quick Response" />
              <h4>Quick Response</h4>
              <p>Technologies to processes, B2C E-Commerce computer science. Our responsibility.</p>
            </div>
            <div className="feature">
              <img src="https://img.icons8.com/external-flat-juicy-fish/60/000000/external-customer-service-flat-juicy-fish.png" alt="Customer Value" />
              <h4>Customer Value</h4>
              <p>As business owners, you know there’s no shortage of manual AI-powered features.</p>
            </div>
            <div className="feature">
              <img src="https://img.icons8.com/external-flat-juicy-fish/60/000000/external-guarantee-shopping-flat-juicy-fish.png" alt="Money Guarantee" />
              <h4>Money Guarantee</h4>
              <p>In the past, this was a manual. It’s sped up considerably with generated product.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
        </div>
    );
};

export default Home;