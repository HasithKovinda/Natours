import React from "react";
import { services } from "../data/data";

const Services = () => {
  return (
    <section className="section-service ">
      <div className="services section-center">
        {services.map((service) => {
          return (
            <article key={service.id} className="service">
              <service.icon className="service-icon" />
              <h3>{service.title}</h3>
              <p>{service.info}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
