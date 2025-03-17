import React from "react";
import Contact from "./Contact";
import Footer from "./Footer";
import Experience from "./Experience";
import Skills from "./Skills";
import Portfolio from "./Portfolio";
import Home from "./Home";
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
