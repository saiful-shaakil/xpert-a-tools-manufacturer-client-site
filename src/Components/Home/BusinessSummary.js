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
        <h1 className="uppercase text-3xl md:text-5xl lg:text-6xl text-primary font-pop font-semibold">
          Quality is our first priority;
        </h1>{" "}
        <h2 className="uppercase text-3xl md:text-5xl lg:text-7xl text-primary font-pop font-semibold">
          We Have
        </h2>
      </div>
      <div className="stats text-3xl text-info md:text-5xl font-pop stats-vertical lg:stats-horizontal mt-10">
        <div className="stat ">
          <div className="stat-title opacity-100">
            <FontAwesomeIcon icon={faCartShopping} />
          </div>
          <div className="stat-value my-3">900+</div>
          <div className="stat-title opacity-100">Tools</div>
        </div>

        <div className="stat">
          <div className="stat-title opacity-100">
            <FontAwesomeIcon icon={faUsersLine} />
          </div>
          <div className="stat-value my-3">2,200+</div>
          <div className="stat-title opacity-100">Happy Dealer</div>
        </div>

        <div className="stat">
          <div className="stat-title opacity-100">
            <FontAwesomeIcon icon={faCommentDots} />
          </div>
          <div className="stat-value my-3">8k+</div>
          <div className="stat-title opacity-100">Feedbacks</div>
        </div>
      </div>

      <div className="bg-white mx-48 dark:bg-gray-800 ">
        <div className="flex items-center justify-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
          <h2 className="text-3xl font-extrabold text-primary dark:text-white sm:text-4xl">
            <span className="block">Have you any question?</span>
            <span className="block text-info">Contact Us</span>
          </h2>
          <div className="lg:mt-0 ml-10 lg:flex-shrink-0">
            <div className=" inline-flex rounded-md shadow">
              <button
                type="button"
                className="py-4 px-6  bg-primary hover:bg-secondary focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
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
