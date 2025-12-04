import React from "react";
import { FaChalkboardTeacher, FaLaptop, FaComments, FaLanguage, FaSmile, FaBook } from "react-icons/fa";

const serviceData = [
  { icon: <FaChalkboardTeacher />, title: "Home Tuition", desc: "Personalized lessons at your home." },
  { icon: <FaBook />, title: "One on One Classes", desc: "Focused guidance for better learning." },
  { icon: <FaLaptop />, title: "Online Classes", desc: "Learn from anywhere with our online sessions." },
  { icon: <FaComments />, title: "Chat Support", desc: "24/7 support for all your queries." },
  { icon: <FaLanguage />, title: "Language Training", desc: "Master new languages quickly." },
  { icon: <FaSmile />, title: "Confidence Building", desc: "Boost your confidence with expert coaching." },
];

const Services = () => {
  return (
    <section id="services" className="services-section">
      <div className="container">
        <h2 className="section-title animate-fade">Our Services</h2>
        <p className="section-subtitle animate-fade-delay">Helping you achieve your goals</p>
        <div className="services-grid">
          {serviceData.map((service, idx) => (
            <div key={idx} className="service-card animate-slide-up">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
