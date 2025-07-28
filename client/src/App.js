import React from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Footer from "./components/Footer";
import { BrowserRouter as Router } from "react-router-dom";
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
