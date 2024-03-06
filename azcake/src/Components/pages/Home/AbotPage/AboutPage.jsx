import React from "react";
import "../AbotPage/style.css";
import wave from "../../../../assets/wave-1.svg";
import logo from "../../../../assets/simit.jpeg";
// import logo2 from "../../../../assets/az.jpeg";
import data from "../../Shop/data/data";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules

import { Mousewheel, Pagination, A11y } from "swiper/modules";

function AboutPage() {
  return (
    <section className="about-us-main">
      <div className="main-page h-full">
        <img src={wave} className="w-full absolute rounded-tl-3xl" alt="" />
        <img
          src={logo}
          alt=""
          className="mini-cake w-[100px] h-[100px] absolute mt-[-75px] rounded-[30px]"
        />

        <div className="items-center w-full">
          <h2 className="text-[50px] text-center p-10 font-bold text-white relative">
            About
            <span className="text-black"> Us</span>
          </h2>
          <p
            className="text-white text-center px-10
        md:px-64 lg:px-80 relative font-bold
        "
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit totam
            labore ipsam vero dolores, consequuntur pariatur dignissimos error
            ipsa nesciunt voluptate doloribus asperiores? Error repellat, magnam
            reiciendis reprehenderit sequi ex!
          </p>
        </div>
      </div>
      <div className="swiper-div">
        <Swiper
          direction={"vertical"}
          slidesPerView={1}
          spaceBetween={30}
          mousewheel={true}
          loop={true}
          pagination={{
            clickable: true,
          }}
          modules={[Mousewheel, Pagination, A11y]}
          className="mySwiper"
        >
          {data
            .filter((item) => item.newPrice === "200")
            .map(({ title, img, reviews }) => {
              return (
                <SwiperSlide>
                  <div className="slider-box-1">
                    <div className="box-image">
                      <img src={img} alt="" />
                    </div>

                    <div>
                      <hr />
                    </div>

                    <div className="slider-text">
                      <h2 className="text-white font-bold">{title} </h2>
                      <p className="text-white md:px-64 lg:px-80 relative ">
                        {reviews}{" "}
                      </p>
                      <button></button>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
    </section>
  );
}

export default AboutPage;
