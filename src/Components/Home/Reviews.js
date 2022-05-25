import React, { useEffect, useState } from "react";
import EachReview from "./EachReview";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div className="mx-10 md:mx-20 my-10">
      <h1 className="text-5xl lg:text-7xl  text-center my-10 text-primary font-pop font-semibold">
        Testimonials
      </h1>
      <div className="relative w-full flex gap-4 py-6 overflow-x-auto">
        {reviews.map((review) => (
          <EachReview key={review._id} review={review}></EachReview>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
