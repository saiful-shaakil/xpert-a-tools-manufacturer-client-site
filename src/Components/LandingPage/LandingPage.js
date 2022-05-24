import React from "react";
import Banner from "../Home/Banner";
import BusinessSummary from "../Home/BusinessSummary";
import Footer from "../Home/Footer";
import NewArrivals from "../Home/NewArrivals";
import Products from "../Home/Products";
import Reviews from "../Home/Reviews";

const LandingPage = () => {
  return (
    <div>
      <Banner></Banner>
      <Products></Products>
      <NewArrivals></NewArrivals>
      <BusinessSummary></BusinessSummary>
      <Reviews></Reviews>
      <Footer></Footer>
    </div>
  );
};

export default LandingPage;
