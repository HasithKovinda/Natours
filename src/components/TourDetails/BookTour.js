import React from "react";

const BookTour = ({ images }) => {
  return (
    <section className="section-booking">
      <article className="book-tour">
        <div className="img-container">
          <img src={images[0]} alt="img" />
          <img src={images[1]} alt="img" />
        </div>
      </article>
    </section>
  );
};

export default BookTour;
