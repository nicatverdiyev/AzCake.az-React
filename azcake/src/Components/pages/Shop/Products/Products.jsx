import React from "react";
import "../Products/products.css";
import { FaStar } from "react-icons/fa";
import { BsFillBagHeartFill } from "react-icons/bs";

function Products() {
  return (
    <section className="card-container">
      <section className="card">
        <img
          src="https://cakeshopco.com/content/products/293951/2912a3a735464a209bc184beb0c5962f_400x400.jpg"
          alt="Cake"
          className="card-img"
        />
        <div className="card-details">
          <h3 className="card-title">Cake</h3>
          <section className="card-reviews">
            <FaStar className="rating-start" />
            <FaStar className="rating-start" />
            <FaStar className="rating-start" />
            <FaStar className="rating-start" />
            <span className="total-reviews">4</span>
          </section>
          <section className="card-price">
            <div className="price">
              <del>₼35</del> 15
            </div>
            <div className="bag">
              <BsFillBagHeartFill className="bag-icons" />
            </div>
          </section>
        </div>
      </section>
      <section className="card">
        <img
          src="https://cakeshopco.com/content/products/293951/2912a3a735464a209bc184beb0c5962f_400x400.jpg"
          alt="Cake"
          className="card-img"
        />
        <div className="card-details">
          <h3 className="card-title">Cake</h3>
          <section className="card-reviews">
            <FaStar className="rating-start" />
            <FaStar className="rating-start" />
            <FaStar className="rating-start" />
            <FaStar className="rating-start" />
            <span className="total-reviews">4</span>
          </section>
          <section className="card-price">
            <div className="price">
              <del>₼35</del> 15
            </div>
            <div className="bag">
              <BsFillBagHeartFill className="bag-icons" />
            </div>
          </section>
        </div>
      </section>
      <section className="card">
        <img
          src="https://cakeshopco.com/content/products/293951/2912a3a735464a209bc184beb0c5962f_400x400.jpg"
          alt="Cake"
          className="card-img"
        />
        <div className="card-details">
          <h3 className="card-title">Cake</h3>
          <section className="card-reviews">
            <FaStar className="rating-start" />
            <FaStar className="rating-start" />
            <FaStar className="rating-start" />
            <FaStar className="rating-start" />
            <span className="total-reviews">4</span>
          </section>
          <section className="card-price">
            <div className="price">
              <del>₼35</del> 15
            </div>
            <div className="bag">
              <BsFillBagHeartFill className="bag-icons" />
            </div>
          </section>
        </div>
      </section>
      <section className="card">
        <img
          src="https://cakeshopco.com/content/products/293951/2912a3a735464a209bc184beb0c5962f_400x400.jpg"
          alt="Cake"
          className="card-img"
        />
        <div className="card-details">
          <h3 className="card-title">Cake</h3>
          <section className="card-reviews">
            <FaStar className="rating-start" />
            <FaStar className="rating-start" />
            <FaStar className="rating-start" />
            <FaStar className="rating-start" />
            <span className="total-reviews">4</span>
          </section>
          <section className="card-price">
            <div className="price">
              <del>₼35</del> 15
            </div>
            <div className="bag">
              <BsFillBagHeartFill className="bag-icons" />
            </div>
          </section>
        </div>
      </section>
      <section className="card">
        <img
          src="https://cakeshopco.com/content/products/293951/2912a3a735464a209bc184beb0c5962f_400x400.jpg"
          alt="Cake"
          className="card-img"
        />
        <div className="card-details">
          <h3 className="card-title">Cake</h3>
          <section className="card-reviews">
            <FaStar className="rating-start" />
            <FaStar className="rating-start" />
            <FaStar className="rating-start" />
            <FaStar className="rating-start" />
            <span className="total-reviews">4</span>
          </section>
          <section className="card-price">
            <div className="price">
              <del>₼35</del> 15
            </div>
            <div className="bag">
              <BsFillBagHeartFill className="bag-icons" />
            </div>
          </section>
        </div>
      </section>
    </section>
  );
}

export default Products;
