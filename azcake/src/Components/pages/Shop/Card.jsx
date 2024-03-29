import React from "react";

import { FaStar } from "react-icons/fa";
import { BsFillBagHeartFill } from "react-icons/bs";
function Card({ img, title, star, reviews, newPrice, prevPrice }) {
  return (
    <section className="card">
      <img src={img} alt={title} className="card-img" />
      <div className="card-details">
        <h3 className="card-title">{title} </h3>
        <section className="card-reviews">
          <FaStar className="rating-start" />
          <FaStar className="rating-start" />
          <FaStar className="rating-start" />
          <FaStar className="rating-start" />
        </section>
        <span className="total-reviews">{reviews} </span>
        <section className="card-price">
          <div className="price">
            <del>{prevPrice} </del> {newPrice}
          </div>
          <div className="bag">
            <BsFillBagHeartFill className="bag-icons" />
          </div>
        </section>
      </div>
    </section>
  );
}

export default Card;
