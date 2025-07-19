import React, { useState } from "react";
import Header from "./Header";
import Contact from "./Contact";
import Footer from "./Footer";
import Experience from "./Experience";
import Skills from "./Skills";
import Portfolio from "./Portfolio";
import Home from "./Home";
import { useState } from "react";
function App() {
  return (
    <div className="App">
      <Header />

      <Home />
      <Contact />
      <Footer />
      <Experience />
      <Skills />
      <Portfolio />
    </div>
  );
}

export default App;
