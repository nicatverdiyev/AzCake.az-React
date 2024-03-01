import React, { useRef, useState } from "react";
import "../Home/home.css";
import img1 from "../../img/slider-1.jpeg";
import img2 from "../../img/slider-2.jpeg";
import data from "../Shop/data/data";
import "../Shop/Products/products.css";
import { BsFillBagHeartFill } from "react-icons/bs";
import { FaStar } from "react-icons/fa";

// import Container from "@mui/material/Container";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import {
  EffectFade,
  Autoplay,
  Pagination,
  Navigation,
  Scrollbar,
  A11y,
} from "swiper/modules";
// import { Container } from "@mui/material";

export default function Home() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 50 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  // --------------------------------------------

  const [swiperRef, setSwiperRef] = useState(null);

  let appendNumber = 20;
  let prependNumber = 1;

  // --------------------------------------------

  return (
    <>
      <Swiper
        effect={"fade"}
        slidesPerView={1}
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[
          EffectFade,
          Autoplay,
          Pagination,
          Navigation,
          Scrollbar,
          A11y,
        ]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide className="slider-img">
          <img className="img" src={img1} alt="" />
          <div className="slider-text-1">
            <h2>
              Cooking.
              <br />
              Tasting.
              <br />
              Living.
            </h2>
            <a href="/">
              <button class="btn_carousel">Check Our Menu</button>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img className="img" src={img2} alt="" />
          <div className="slider-text-1">
            <h2>
              Cooking.
              <br />
              Tasting.
              <br />
              Living.
            </h2>
            <a href="/shop">
              <button class="btn_carousel">Check Our Menu</button>
            </a>
          </div>
        </SwiperSlide>

        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>

      <section className="home-head-2">
        <div className="slider-head-1 flex justify-center font-bold text-6xl mb-[70px]">
          <h2>All Cakes</h2>
        </div>

        <Swiper
          breakpoints={{
            390: {
              width: 390,
              slidesPerView: 1,
            },
          }}
          onSwiper={setSwiperRef}
          slidesPerView={3}
          centeredSlides={true}
          spaceBetween={30}
          loop={true}
          pagination={{
            type: "fraction",
          }}
          navigation={true}
          modules={[Pagination, Navigation, A11y]}
          className="mySwiper"
        >
          {data.map(({ title, img, reviews, newPrice, prevPrice }) => {
            return (
              <SwiperSlide>
                <section className="card flex flex-col items-center">
                  <img src={img} alt={title} className="card-img" />
                  <div className="card-details">
                    <h3 className="card-title">{title} </h3>
                    <section className="card-reviews">
                      <FaStar className="rating-start" />
                      <FaStar className="rating-start" />
                      <FaStar className="rating-start" />
                      <FaStar className="rating-start" />
                      <span className="total-reviews">{reviews} </span>
                    </section>
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
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
    </>
  );
}
