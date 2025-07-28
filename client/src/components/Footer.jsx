import React from "react";
import { Link } from "react-router-dom";
import './style.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <div className="footer-logo">
            <h3>SKATEZONE 🛹</h3>
            <p>
              Premium skateboard gear for riders who demand the best. Push your
              limits with our curated selection of boards, parts, and apparel.
            </p>
            <div className="social-links">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-link">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="social-link">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noreferrer" className="social-link">
                <i className="fab fa-tiktok"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="social-link">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-section">
          <h4>Shop</h4>
          <ul className="footer-links">
            <li><Link to="/complete-skateboards">Complete Skateboards</Link></li>
            <li><Link to="/decks">Decks</Link></li>
            <li><Link to="/trucks-wheels">Trucks & Wheels</Link></li>
            <li><Link to="/bearings-hardware">Bearings & Hardware</Link></li>
            <li><Link to="/apparel">Apparel</Link></li>
            <li><Link to="/shoes">Shoes</Link></li>
            <li><Link to="/accessories">Accessories</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Support</h4>
          <ul className="footer-links">
            <li><Link to="/size-guide">Size Guide</Link></li>
            <li><Link to="/shipping-info">Shipping Info</Link></li>
            <li><Link to="/returns">Returns & Exchanges</Link></li>
            <li><Link to="/track-order">Track Your Order</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/contact-support">Contact Support</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Company</h4>
          <ul className="footer-links">
            <li><Link to="/about">About SkateZone</Link></li>
            <li><Link to="/our-story">Our Story</Link></li>
            <li><Link to="/team">Team Riders</Link></li>
            <li><Link to="/careers">Careers</Link></li>
            <li><Link to="/press">Press</Link></li>
            <li><Link to="/store-locator">Store Locator</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Stay Connected</h4>
          <p className="newsletter-text">
            Get the latest drops, exclusive deals, and skate tips delivered to your inbox.
          </p>
          <div className="newsletter-form">
            <input
              type="email"
              placeholder="Your email address"
              className="newsletter-input"
            />
            <button className="newsletter-btn">Subscribe</button>
          </div>
          <div className="payment-methods">
            <i className="fab fa-cc-visa"></i>
            <i className="fab fa-cc-mastercard"></i>
            <i className="fab fa-cc-paypal"></i>
            <i className="fab fa-cc-apple-pay"></i>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>
            &copy; 2025 SkateZone. All rights reserved. Built for skaters, by skaters.
          </p>
          <div className="footer-legal">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
            <Link to="/cookies">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
