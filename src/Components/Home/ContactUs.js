import React from "react";
import contactUs from "../../assets/bg/contact-us.jpg";

const ContactUs = () => {
  return (
    <div className="mt-20">
      <h1 className="text-primary text-center text-6xl font-pop font-semibold">
        Are you interested to talk with us?
      </h1>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={contactUs} className="max-w-sm lg:max-w-md" />

          <form class="flex w-full max-w-sm space-x-3 mx-20">
            <div class="w-full max-w-2xl px-5 py-10 m-auto mt-10 bg-white rounded-lg shadow dark:bg-gray-800">
              <div class="mb-6 text-3xl font-light text-center text-gray-800 dark:text-white">
                Contact us !
              </div>
              <div class="grid max-w-xl grid-cols-2 gap-4 m-auto">
                <div class="col-span-2 lg:col-span-1">
                  <div class=" relative ">
                    <input
                      type="text"
                      id="contact-form-name"
                      class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      placeholder="Name"
                    />
                  </div>
                </div>
                <div class="col-span-2 lg:col-span-1">
                  <div class=" relative ">
                    <input
                      type="text"
                      id="contact-form-email"
                      class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      placeholder="email"
                    />
                  </div>
                </div>
                <div class="col-span-2">
                  <label class="text-gray-700" for="name">
                    <textarea
                      class="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      id="comment"
                      placeholder="Enter your comment"
                      name="comment"
                      rows="5"
                      cols="40"
                    ></textarea>
                  </label>
                </div>
                <div class="col-span-2 text-right">
                  <button
                    type="submit"
                    class="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
