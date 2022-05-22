import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faCommentDots,
  faUsersLine,
} from "@fortawesome/free-solid-svg-icons";

const business = () => {
  return (
    <div className="text-center my-24">
      <div>
        <h1 className="uppercase text-7xl text-primary font-pop">
          We Believe in quality
        </h1>{" "}
        <h2 className="uppercase text-6xl text-primary font-ubu">We Have</h2>
      </div>
      <div class="stats text-5xl font-pop stats-vertical lg:stats-horizontal mt-10">
        <div class="stat ">
          <div class="stat-title opacity-100">
            <FontAwesomeIcon icon={faCartShopping} />
          </div>
          <div class="stat-value my-3">900+</div>
          <div class="stat-title opacity-100">Products</div>
        </div>

        <div class="stat">
          <div class="stat-title opacity-100">
            <FontAwesomeIcon icon={faUsersLine} />
          </div>
          <div class="stat-value my-3">2,200+</div>
          <div class="stat-title opacity-100">Happy Dealer</div>
        </div>

        <div class="stat">
          <div class="stat-title opacity-100">
            <FontAwesomeIcon icon={faCommentDots} />
          </div>
          <div class="stat-value my-3">800+</div>
          <div class="stat-title opacity-100">Feedbacks</div>
        </div>
      </div>
    </div>
  );
};

export default business;
