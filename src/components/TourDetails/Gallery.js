import React from "react";

export const Gallery = ({ images }) => {
  return (
    <section className=" gallery-section gallery">
      {images?.map((img, index) => {
        return (
          <article key={index}>
            <img src={img} alt="img" className="tour-images" />
          </article>
        );
      })}
    </section>
  );
};
