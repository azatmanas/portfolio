import React, { useState } from "react";
import Header from "../components/Header";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Portfolio from "../components/Portfolio";
import Home from "../components/Home";
import About from "../components/About";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Skills />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
