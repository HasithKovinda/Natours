import React from "react";

export const Gallery = ({ images }) => {
  console.log(images);
  return (
    <section className=" nav-center gallery-section gallery">
      {images.map((img) => {
        return (
          <article>
            <img src={img} alt="img" className="tour-images" />
          </article>
        );
      })}
    </section>
  );
};
