import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Footer from "./components/Footer";
import "./App.css"; // Optional global styles

const App = () => {
  return (
    <Router>
      <div className="App">
        <Nav />
        <main>
          <Hero />
          <Products />
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
