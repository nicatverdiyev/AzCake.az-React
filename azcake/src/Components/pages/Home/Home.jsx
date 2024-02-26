import React, { useRef, useState } from "react";
import "../Home/home.css";
import img1 from "../../img/slider-1.jpeg";
import img2 from "../../img/slider-2.jpeg";
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

export default function Home() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 50 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

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
          <img src={img1} alt="" />
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
          <img src={img2} alt="" />
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

        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
}
