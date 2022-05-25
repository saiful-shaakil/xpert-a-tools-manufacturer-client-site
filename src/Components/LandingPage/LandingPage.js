import React from "react";
import Banner from "../Home/Banner";
import BusinessSummary from "../Home/BusinessSummary";
import ContactUs from "../Home/ContactUs";
import Feature from "../Home/Feature";
import Footer from "../Home/Footer";
import NewArrivals from "../Home/NewArrivals";
import Products from "../Home/Products";
import Reviews from "../Home/Reviews";

const LandingPage = () => {
  return (
    <div>
      <Banner></Banner>
      <NewArrivals></NewArrivals>
      <Products></Products>
      <Feature></Feature>
      <BusinessSummary></BusinessSummary>
      <Reviews></Reviews>
      <ContactUs></ContactUs>
      <Footer></Footer>
    </div>
  );
};

export default LandingPage;
