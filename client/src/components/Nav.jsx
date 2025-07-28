import React from "react";
import { Link } from "react-router-dom"; // Remove this line if you're not using React Router
import './style.css';

const Nav = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="logo">SkateZone</Link>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/shop">Shop</Link></li>
          <li><Link to="/brands">Brands</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
