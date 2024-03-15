import React from "react";
import "../About/about.css";

import data from "../../pages/Shop/data/data";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules

import { Mousewheel, Pagination, A11y } from "swiper/modules";
import Footer from "../../Footer/Footer";

export default function About() {
  return (
    <>
      <section className="about-head">
        <div className="head-text">
          <h2 className="text-[30px] font-bold">About Us</h2>
          <h2 className="text-rose-400 text-[15px] ">
            Home
            <div className="hr"></div>
            <h2 className="text-rose-400 text-[15px] ">About Us</h2>
          </h2>
        </div>
      </section>

      <section className="about-head-2 flex flex-wrap">
        <div className="about-box">
          <h2 className="flex justify-center font-bold mt-[10px] mb-[10px]  text-[20px]">
            Brief Description
          </h2>
          <p className="p-[18px]">
            The Cake Shop specializes in cake decoration and all other kinds of
            desserts. Also, it has dine-in shops, which serve a Western cuisine.
            The goal of The Cake Shop Restaurants is to provide a casual dining
            experience that exemplifies quality, value, service, and excellence
            in all aspects of the operation. This is our company theme at The
            Cake Shop Restaurants; this is the philosophy we live by. The
            importance of attention to detail cannot be overemphasized. It is a
            way of life
            <br />
            <br />
            Our excellence comes from our strong values, we believe that our
            corporate values and culture give our company a competitive
            advantage and help our employees learn, thrive and grow. The Cake
            Shop outlines four values, which represent guidance to our
            employee’s behavior, connect them together, and provide us with a
            framework for setting goals and making decisions. We look to these
            values as we endeavor to deliver on The Cake Shop core purpose – To
            nourish and delight everyone we serve.
          </p>
        </div>
        <div className="about-box">
          <h2 className="flex justify-center font-bold mt-[10px] mb-[10px] text-[20px]">
            Why Are We Unique?
          </h2>
          <p className="p-[18px]">
            The Cake Shop specializes in cake decoration and all other kinds of
            desserts. Also, it has dine-in shops, which serve a Western cuisine.
            The goal of The Cake Shop Restaurants is to provide a casual dining
            experience that exemplifies quality, value, service, and excellence
            in all aspects of the operation. This is our company theme at The
            Cake Shop Restaurants; this is the philosophy we live by. The
            importance of attention to detail cannot be overemphasized. It is a
            way of life
          </p>

          <h3 className="flex justify-center font-bold mt-[10px] mb-[10px] text-[20px]">
            {" "}
            Integrity and Honesty:
          </h3>
          <p className="p-[18px]">
            {" "}
            We strive to embrace transparency and to manage expectation and
            fulfill our commitments. We believe that this shall make a better
            world (people, environment, and creatures) living in peace,
            happiness, and prosperity.
          </p>
          <h3 className="flex justify-center font-bold mt-[10px] mb-[10px] text-[20px]">
            Excellence
          </h3>
          <p className="p-[18px]">
            A team of trustworthy humans; disciplined, happy, engaged, and
            self-managed. A core of a team of passionate professionals: we love
            what we do, we feel good doing it better and better, excellently,
            and addicted to live it happily together.
          </p>
        </div>
        <div className="about-box">
          <h2 className="flex justify-center font-bold mt-[10px] mb-[10px] text-[20px]">
            Brief Description
          </h2>
          <p className="p-[18px]">
            The "Cake Shop" is a Jordanian Brand that started as a small family
            business. The owners are Dr. Iyad Sultan and Dr. Sereen Sharabati,
            supported by a staff of 100 employees. Although not small any more,
            the business tries to keep the family atmosphere where we care not
            only about our company, our products and our staff, but also we
            consider each "customer" a member in this family of "cake shoppers".
          </p>
          <br />
          <br />
          <p className="p-[18px]">
            The "Cake Shop" is a Jordanian Brand that started as a small family
            business. The owners are Dr. Iyad Sultan and Dr. Sereen Sharabati,
            supported by a staff of 100 employees. Although not small any more,
            the business tries to keep the family atmosphere where we care not
            only about our company, our products and our staff, but also we
            consider each "customer" a member in this family of "cake shoppers".
          </p>
        </div>
        <div className="about-box">
          <h2 className="flex justify-center font-bold mt-[10px] mb-[10px] text-[20px]">
            Brief Description
          </h2>
          <p className="p-[18px]">
            The Cake Shop specializes in cake decoration and all other kinds of
            desserts. Also, it has dine-in shops, which serve a Western cuisine.
            The goal of The Cake Shop Restaurants is to provide a casual dining
            experience that exemplifies quality, value, service, and excellence
            in all aspects of the operation. This is our company theme at The
            Cake Shop Restaurants; this is the philosophy we live by. The
            importance of attention to detail cannot be overemphasized. It is a
            way of life
          </p>
          <h3 className="flex justify-center font-bold mt-[10px] mb-[10px] text-[20px]">
            Quality
          </h3>
          <p className="p-[18px]">
            {" "}
            Quality is everything we think about. We are dedicated to provide
            the highest level of food and service quality to our guests
          </p>
        </div>
      </section>
      <section className="about-slider">
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

      <Footer />
    </>
  );
}
