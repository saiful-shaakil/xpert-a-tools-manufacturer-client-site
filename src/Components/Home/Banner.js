import React from "react";
import bannerBg from "../../assets/bg/banner-bg.jpg";
import Navbar from "../Shared/Navbar";

const Banner = () => {
  return (
    <div
      style={{
        background: `url(${bannerBg})`,
        backgroundPosition: "center",
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
      }}
      className="min-h-screen"
    >
      <Navbar></Navbar>
      <div className="mx-12 mt-48">
        <h1 class="text-6xl font-bold font-lob">Big Sale</h1>
        <p class="py-6 text-5xl font-pop">
          Hand Tools <br /> Electric Saw & Power Saw
        </p>
        <button class="btn btn-primary">Shop Now</button>
      </div>
    </div>
  );
};

export default Banner;
