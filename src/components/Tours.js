import React from "react";
import { tours } from "../data/data";
import { FiMapPin, FiCalendar, FiFlag, FiUser } from "react-icons/fi";
const Tours = () => {
  return (
    <section className="section-tours space section-center">
      <div className="tour-section">
        <h1 className="main-heading">MOST POPULAR TOURS</h1>
        <div className="tours">
          {tours.map((tour) => {
            return (
              <article className="single-tour" key={tour.id}>
                <div
                  className="tour-img"
                  style={{
                    backgroundBlendMode: "screen",
                    background: `linear-gradient(
                    to right bottom,
                    rgba(126, 213, 111),
                    rgba(40, 180, 133)
                  ),url(${tour.imageCover})`,
                    height: "23rem",
                    backgroundSize: "cover",
                  }}
                ></div>
                <h3 className="tour-heading">
                  <span className="tour-heading-span">{tour.name}</span>
                </h3>
                <div className="tour-info">
                  <h4>
                    {tour.difficulty}
                    <span>{tour.duration}</span>-day tour
                  </h4>
                  <p>Minium {tour.summary} tour</p>
                  <div className="tour-extra">
                    <div className="tour-card">
                      <FiMapPin className="tour-icon" />
                      <p>Miami, USA</p>
                    </div>
                    <div className="tour-card">
                      {" "}
                      <FiCalendar className="tour-icon" />
                      <p>Miami, USA</p>
                    </div>
                    <div className="tour-card">
                      <FiFlag className="tour-icon" />
                      <p>Miami, USA</p>
                    </div>
                    <div className="tour-card">
                      <FiUser className="tour-icon" />
                      <p>Miami, USA</p>
                    </div>
                  </div>
                </div>
                <div className="tour-footer">
                  <div className="footer-info">
                    <h5 className="price">
                      ${tour.price} <span>Per Person</span>
                    </h5>
                    <h5 className="price">
                      ${tour.ratingsAverage}{" "}
                      <span>rating({tour.ratingsQuantity})</span>{" "}
                    </h5>
                  </div>
                  <button className="tour-footer-btn">Details</button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Tours;
