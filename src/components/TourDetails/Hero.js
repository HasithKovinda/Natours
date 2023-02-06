import React from "react";
import { FiMapPin, FiFlag } from "react-icons/fi";
const Hero = ({ name, imageCover, duration, startLocation }) => {
  //   const { description } = startLocation;
  return (
    <section
      className="details-hero"
      style={{
        background: `linear-gradient(
        to right bottom,
        rgba(126, 213, 111,0.8),
        rgba(40, 180, 133,0.8)
      ),url(${imageCover})`,
        height: "100%",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="details-hero-info">
        <h1 className="details-hero-heading">
          <span className="details-hero-heading-span">{name} Tour</span>
        </h1>
      </div>
      <div className="details-hero-mini-info">
        <div className="details-hero-icon-container">
          <FiMapPin className="details-hero-icon" />
          <p>{duration} Days</p>
        </div>
        <div className="details-hero-icon-container">
          <FiFlag className="details-hero-icon" />
          <p>{startLocation?.description}</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
