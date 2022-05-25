import React from "react";
import bannerBg from "../../assets/bg/bannerr.jpg";

const Banner = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={bannerBg} className="max-w-sm lg:max-w-md" />
        <div className="mx-10">
          <p className="text-5xl font-pop animate__animated animate__backInDown text-info">
            We expert are here to give you the best tools what you need!
          </p>
          <button className="btn btn-primary mt-3">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
