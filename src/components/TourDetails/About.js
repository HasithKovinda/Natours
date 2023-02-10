import React from "react";
import { FiCalendar, FiTrendingUp, FiUsers, FiStar } from "react-icons/fi";

export const About = ({
  startDates,
  difficulty,
  maxGroupSize,
  ratingsQuantity,
  guides,
  name,
}) => {
  return (
    <section className="tour-details-section nav-center">
      <div className="tour-details-about ">
        <article className="guide-info">
          <h3 className="main-heading">Quick facts</h3>
          <div className="quick-info">
            <FiCalendar className="quick-icon" />
            <p>Next date</p>
            <span>
              {new Date(startDates?.map((el) => el)[0]).toLocaleDateString(
                "en-us",
                {
                  year: "numeric",
                  month: "long",
                }
              )}
            </span>
          </div>
          <div className="quick-info">
            <FiTrendingUp className="quick-icon" />
            <p>difficulty</p>
            <span>{difficulty ?? ""}</span>
          </div>
          <div className="quick-info">
            <FiUsers className="quick-icon" />
            <p>Participants</p>
            <span>{maxGroupSize ?? ""}</span>
          </div>
          <div className="quick-info">
            <FiStar className="quick-icon" />
            <p>Ratings</p>
            <span>{ratingsQuantity ?? ""}/5</span>
          </div>
          <div className="guide-section">
            <h3 className="main-heading">Your tour guides</h3>
          </div>
          {guides?.map((guide, index) => {
            return (
              <div className="quick-info" key={index}>
                <img src={guide.photo} alt="img" />
                <p>
                  {" "}
                  {guide.role.includes("lead-guide")
                    ? guide.role
                    : `Tour ${guide.role}`}
                </p>
                <span>{guide.name}</span>
              </div>
            );
          })}
        </article>

        <article className="tour-details-info">
          <h3 className="main-heading">About the {name ?? ""}</h3>
          <div className="tour-extra-info">
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source.
            </p>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here'.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};
export default About;
