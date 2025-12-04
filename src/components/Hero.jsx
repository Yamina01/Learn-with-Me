import React from "react";

const Hero = () => {
    const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
}
  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        <div className="hero-left">
          <h1 className="hero-title animate-fade">Learn Smarter, Grow Faster</h1>
          <p className="hero-subtext animate-fade-delay">
            Personalized tutoring, one-on-one guidance, and online classes to help you succeed.
          </p>
          <button
            className="btn-primary animate-fade-delay"
            onClick={scrollToContact}
          >
            Book a Session
          </button>
        </div>
        <div className="hero-right animate-slide">
          <img
            src="https://images.unsplash.com/photo-1485217988980-11786ced9454?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            alt="Learning"
            className="hero-image"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
