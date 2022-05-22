import React from "react";
import Banner from "../Home/Banner";
import BusinessSummary from "../Home/BusinessSummary";
import Footer from "../Home/Footer";
import NewArrivals from "../Home/NewArrivals";

const LandingPage = () => {
  return (
    <div>
      <Banner></Banner>
      <NewArrivals></NewArrivals>
      <BusinessSummary></BusinessSummary>
      <Footer></Footer>
    </div>
  );
};

export default LandingPage;
