
import React, { useState } from "react";
import Hero from "./components/Hero.jsx";
import Services from "./components/Services.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="header">
        <div className="container header-container">
          <div className="brand">Learn with Me</div>
          <nav className={`nav ${menuOpen ? "open" : ""}`}>
            <a href="#home" className="nav-link">Home</a>
            <a href="#services" className="nav-link">Services</a>
            <a href="#contact" className="nav-link">Contact</a>
          </nav>
      <div
  className={`hamburger ${menuOpen ? "open" : ""}`}
  onClick={() => setMenuOpen(!menuOpen)}
>
  <span></span>
  <span></span>
  <span></span>
</div>

        </div>
      </header>

      <main>
        <Hero />
        <Services />
        <Contact />
      </main>

      <Footer />
    </>
  );
};

export default App;
