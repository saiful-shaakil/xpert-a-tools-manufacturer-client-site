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
    <div className="mx-10">
      <div className="relative w-full flex gap-4 py-6 overflow-x-auto">
        {reviews.map((review) => (
          <EachReview key={review._id} review={review}></EachReview>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
