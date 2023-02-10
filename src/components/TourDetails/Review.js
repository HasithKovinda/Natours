import React from "react";
import { FiStar } from "react-icons/fi";
const Review = ({ reviews }) => {
  const star = [1, 2, 3, 4, 5];
  return (
    <section className="review-section ">
      <div className="reviews">
        {reviews?.map((review, index) => {
          return (
            <article className="single-review" key={index}>
              <div className="wrote-user">
                <img src={review.user.photo} alt="img" className="user-pro" />
                <h4>{review.user.name}</h4>
              </div>
              <p>{review.review}</p>
              <div>
                {star.map((el, index) => {
                  return (
                    <FiStar
                      className={el >= review.rating ? "star " : "star active"}
                      key={index}
                    />
                  );
                })}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Review;
