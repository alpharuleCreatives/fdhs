import React from "react";
import "./OurPartners.scss";
import ITI from "../../assets/images/ITI.png";
import LalPathLab from "../../assets/images/LalPathLab.png";
import IndianOil from "../../assets/images/IndianOil.png";
import Wipro from "../../assets/images/Wipro.png";
import Ebix from "../../assets/images/Ebix.png";
import CloudAtomy from "../../assets/images/CloudAtomy.png";
import Expeditors from "../../assets/images/Expeditors.png";

const OurPartners = () => {
  const partners = [
    { id: 1, src: ITI, alt: "ITI" },
    { id: 2, src: LalPathLab, alt: "LalPathLab" },
    { id: 3, src: IndianOil, alt: "IndianOil" },
    { id: 4, src: Wipro, alt: "Wipro" },
    { id: 5, src: Ebix, alt: "Ebix" },
    { id: 6, src: CloudAtomy, alt: "CloudAtomy" },
    { id: 7, src: Expeditors, alt: "Expeditors" },
  ];

  // Duplicate the certificates for smooth infinite scrolling
  const infinitePartners = [...partners, ...partners, ...partners, ...partners, ...partners, ...partners, ...partners];

  return (
    <section className="recognitions">
      <h2 className="title">Our Partners</h2>
      <div className="carousel">
        <div className="carousel-track">
          {infinitePartners.map((item, index) => (
            <div key={index} className="slide">
              <img src={item.src} alt={item.alt} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurPartners;
