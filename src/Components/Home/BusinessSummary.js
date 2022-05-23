import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faCommentDots,
  faUsersLine,
} from "@fortawesome/free-solid-svg-icons";

const BusinessSummary = () => {
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

      <div class="bg-white mx-48 dark:bg-gray-800 ">
        <div class="lg:flex lg:items-center lg:justify-between w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
          <h2 class="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
            <span class="block">Have you any question?</span>
            <span class="block text-indigo-500">Contact Us</span>
          </h2>
          <div class="lg:mt-0 lg:flex-shrink-0">
            <div class=" inline-flex rounded-md shadow">
              <button
                type="button"
                class="py-4 px-6  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSummary;
