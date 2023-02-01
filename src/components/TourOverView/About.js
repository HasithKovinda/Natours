import React from "react";
import aboutImg from "../../images/about-img.jpg";

const About = () => {
  return (
    <section className="section-about section-center space">
      <h1 className="main-heading">EXCITING TOURS FOR ADVENTUROUS PEOPLE</h1>
      <div className="about">
        <article className="section-info">
          <h3>YOU'RE GOING TO FALL IN LOVE WITH NATURE</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
            ipsum sapiente aspernatur libero repellat quis consequatur ducimus
            quam nisi exercitationem omnis earum qui.
          </p>
          <h3>LIVE ADVENTURES LIKE YOU NEVER HAVE BEFORE</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            nulla deserunt voluptatum nam.
          </p>
          <button className="about-btn">Learn more →</button>
        </article>
        <article>
          <img src={aboutImg} alt="about-img" className="about-img"></img>
        </article>
      </div>
    </section>
  );
};

export default About;
