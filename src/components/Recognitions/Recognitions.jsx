import React from "react";
import "./Recognitions.scss";
import MakeInIndia from "../../assets/images/makeInIndia.png";
import NitiAayog from "../../assets/images/nitiAayog.png";
import StartupIndia from "../../assets/images/startUpIndia.png";
import MSME from "../../assets/images/MSME.png";
import DigitalIndia from "../../assets/images/DigitalIndia.png";

const Recognitions = () => {
  const certificates = [
    { id: 1, src: MakeInIndia, alt: "Make in India" },
    { id: 2, src: NitiAayog, alt: "NITI Aayog" },
    { id: 3, src: StartupIndia, alt: "Startup India" },
    { id: 4, src: MSME, alt: "MSME" },
    { id: 5, src: DigitalIndia, alt: "Digital India" },
  ];

  // Duplicate the certificates for smooth infinite scrolling
  const infiniteCertificates = [...certificates, ...certificates, ...certificates, ...certificates, ...certificates, ...certificates, ...certificates];

  return (
    <section className="recognitions">
      <h2 className="title">Recognitions & Certificates</h2>
      <div className="carousel">
        <div className="carousel-track">
          {infiniteCertificates.map((item, index) => (
            <div key={index} className="slide">
              <img src={item.src} alt={item.alt} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Recognitions;
