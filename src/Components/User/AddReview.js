import React from "react";

const AddReview = () => {
  return (
    <div className="mx-10 mt-6">
      <div>
        <div class="bg-white mt-6 rounded-lg shadow sm:max-w-md sm:w-full sm:mx-auto sm:overflow-hidden">
          <div class="px-4 py-8 sm:px-10">
            <div class="relative mt-6">
              <div class="absolute inset-0 flex items-center">
                <div class="w-full border-t border-gray-300"></div>
              </div>
              <div class="relative flex justify-center text-sm leading-5">
                <span class="px-2 text-gray-500 text-2xl font-ubu bg-white">
                  Add a Review
                </span>
              </div>
            </div>
            <div class="mt-6">
              <div class="w-full space-y-6">
                <div class="w-full">
                  <div class=" relative ">
                    <input
                      type="text"
                      id="title"
                      class=" rounded-lg border-2 py-1 px-2 flex-1 appearance-none  border-gray-300 w-full bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none"
                      placeholder="Review Title"
                    />
                  </div>
                </div>
                <div class="w-full">
                  <div class=" relative ">
                    <input
                      type="text"
                      id="location"
                      class=" rounded-lg border-2 py-1 px-2 flex-1 appearance-none border-gray-300 w-full bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none"
                      placeholder="Your location"
                    />
                  </div>
                </div>
                <div class="w-full">
                  <textarea
                    id="bio"
                    placeholder="Your Review"
                    style={{ resize: "none" }}
                    className="w-full border-2 py-1 px-2 rounded-md focus:outline-none dark:border-gray-700 dark:text-gray-900"
                  ></textarea>
                </div>
                <div>
                  <span class="block w-full rounded-md shadow-sm">
                    <input
                      type="submit"
                      value="Add"
                      class="py-2 px-4 btn btn-primary w-full text-center font-semibold shadow-md focus:outline-none  rounded-lg "
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
