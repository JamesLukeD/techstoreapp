import React from "react";
import './style.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>SkateZone</h1>
        <p>
          Premium skateboard gear, fresh street style, and everything you need
          to push your limits
        </p>
        <a href="#products" className="cta-button">Shop Now</a>
      </div>
    </section>
  );
};

export default Hero;