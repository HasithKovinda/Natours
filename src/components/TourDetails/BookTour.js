import React from "react";
import { useSelector } from "react-redux";
import profile from "../../images/profile.jpg";

const BookTour = ({ images }) => {
  const { user } = useSelector((store) => store.user);
  const img = images ?? [];
  return (
    <section className="section-booking">
      <article className="book-tour">
        <div className="img-container">
          <img src={img[0]} alt="img" />
          <img src={img[1]} alt="img" className="move-img" />
          <img src={img[2]} alt="img" className="move-img third-img" />
        </div>
        <div className="booking">
          <h3 className="main-heading">What are you waiting for</h3>
          <p>10 days.1 adventure.infinite memories.Make it yours today!</p>
        </div>
        <div className="booking-btn">
          <button className="btn">
            {" "}
            {user === null ? "login to book tour" : "Book The tour"}{" "}
          </button>
        </div>
      </article>
    </section>
  );
};

export default BookTour;
