import React, { useEffect, useState } from "react";
import { FiMapPin, FiCalendar, FiFlag, FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";
import customFetch from "../../utils/axios";

const Tours = () => {
  useEffect(() => {
    getAllTour();
  }, []);
  const [tours, setTours] = useState([]);

  const getAllTour = async () => {
    console.log("called");
    const res = await customFetch.get("/tours");
    setTours(res.data.data.docs);
  };

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
                      <p>{tour.startLocation.description}</p>
                    </div>
                    <div className="tour-card">
                      {" "}
                      <FiCalendar className="tour-icon" />
                      <p>
                        {new Date(tour.startDates[0]).toLocaleDateString(
                          "en-us",
                          { year: "numeric", month: "long" }
                        )}
                      </p>
                    </div>
                    <div className="tour-card">
                      <FiFlag className="tour-icon" />
                      <p>{`${tour.locations.length} stops`}</p>
                    </div>
                    <div className="tour-card">
                      <FiUser className="tour-icon" />
                      <p>{`${tour.maxGroupSize} people`}</p>
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
                  <Link to={`/tour/${tour._id}`}>
                    <button className="tour-footer-btn">Details</button>
                  </Link>
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
