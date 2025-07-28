import React from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Footer from "./components/Footer";
import "./App.css"; // Optional global styles

const App = () => {
  return (
    <div className="App">
      <Nav />
      <main>
        <Hero />
        <Products />
      </main>
      <Footer />
    </div>
  );
};

export default App;
