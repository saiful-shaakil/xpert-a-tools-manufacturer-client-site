import React from "react";
import contactUs from "../../assets/bg/contact-us.jpg";

const ContactUs = () => {
  return (
    <div className="mt-20 mx-10">
      <h1 className="text-primary text-center text-6xl font-pop font-semibold">
        Are you interested to talk with us?
      </h1>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={contactUs}
            className="max-w-xs lg:max-w-md"
            alt="contact-us"
          />

          <form className="flex w-full max-w-sm space-x-3 mx-20">
            <div className="w-full max-w-2xl px-5 py-10 m-auto mt-10 bg-white rounded-lg shadow dark:bg-gray-800">
              <div className="mb-6 text-3xl font-light text-center text-info dark:text-white">
                Contact Now !
              </div>
              <div className="grid max-w-xl grid-cols-2 gap-4 m-auto">
                <div className="col-span-2 lg:col-span-1">
                  <div className=" relative ">
                    <input
                      type="text"
                      id="contact-form-name"
                      className=" rounded-lg border flex-1 appearance-none border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-info focus:border-transparent"
                      placeholder="Name"
                    />
                  </div>
                </div>
                <div className="col-span-2 lg:col-span-1">
                  <div className=" relative ">
                    <input
                      type="text"
                      id="contact-form-email"
                      className=" rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-info focus:border-transparent"
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div className="col-span-2">
                  <label className="text-gray-700" for="name">
                    <textarea
                      style={{ resize: "none" }}
                      className="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-info focus:border-transparent"
                      id="comment"
                      placeholder="Enter your comment"
                      name="comment"
                      rows="5"
                      cols="60"
                    ></textarea>
                  </label>
                </div>
                <div className="col-span-2 text-right">
                  <button
                    type="submit"
                    className="py-2 px-4  bg-primary hover:bg-secondary focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
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
