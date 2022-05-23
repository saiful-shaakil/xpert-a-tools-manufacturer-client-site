import React from "react";

const AddReview = () => {
  return (
    <div className="mx-10 mt-6">
      <div>
        <div className="bg-white mt-6 rounded-lg shadow sm:max-w-md sm:w-full sm:mx-auto sm:overflow-hidden">
          <div className="px-4 py-8 sm:px-10">
            <div className="relative mt-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm leading-5">
                <span className="px-2 text-gray-500 text-2xl font-ubu bg-white">
                  Add a Review
                </span>
              </div>
            </div>
            <div className="mt-6">
              <div className="w-full space-y-6">
                <div className="w-full">
                  <div className=" relative ">
                    <input
                      type="text"
                      id="title"
                      className=" rounded-lg border-2 py-1 px-2 flex-1 appearance-none  border-gray-300 w-full bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none"
                      placeholder="Review Title"
                    />
                  </div>
                </div>
                <div className="w-full">
                  <div className=" relative ">
                    <input
                      type="text"
                      id="location"
                      className=" rounded-lg border-2 py-1 px-2 flex-1 appearance-none border-gray-300 w-full bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none"
                      placeholder="Your location"
                    />
                  </div>
                </div>
                <div className="w-full">
                  <textarea
                    id="bio"
                    placeholder="Your Review"
                    style={{ resize: "none" }}
                    className="w-full border-2 py-1 px-2 rounded-md focus:outline-none dark:border-gray-700 dark:text-gray-900"
                  ></textarea>
                </div>
                <div>
                  <span className="block w-full rounded-md shadow-sm">
                    <input
                      type="submit"
                      value="Add"
                      className="py-2 px-4 btn btn-primary w-full text-center font-semibold shadow-md focus:outline-none  rounded-lg "
                    ></input>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddReview;
