import React from "react";
import wave from "../../../../assets/wave-1.svg";
function AboutPage() {
  return (
    <div>
      <img src={wave} className="w-screen absolute" alt="" />
      <div className="h-[300px] bg-purple-600 items-center w-full">
        <h2 className="text-[50px] text-center p-20 font-bold text-white">
          About
          <span className="text-black"> Us</span>
        </h2>
        <p
          className="text-white text-center px-10 mt-10
        md:px-64 lg:px-80
        "
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit totam
          labore ipsam vero dolores, consequuntur pariatur dignissimos error
          ipsa nesciunt voluptate doloribus asperiores? Error repellat, magnam
          reiciendis reprehenderit sequi ex!
        </p>
      </div>
    </div>
  );
}

export default AboutPage;
