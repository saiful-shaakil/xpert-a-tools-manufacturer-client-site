import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import LoadingPage from "../Shared/LoadingPage";

const AddReview = () => {
  const [user, loading] = useAuthState(auth);
  if (loading) {
    return <LoadingPage></LoadingPage>;
  }
  const addReview = () => {
    const rating = document.getElementById("rate").value;
    const desc = document.getElementById("desc").value;
    const review = {
      name: user.displayName,
      mail: user.email,
      photo: user.photoURL,
      rating: rating,
      desc: desc,
    };
    fetch("http://localhost:5000/add-review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Your review is successfully added in our home page.");
      });
  };
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
                    <p className="font-bold">Rating:</p>
                    <select
                      id="rate"
                      className="select w-full select-bordered max-w-xs"
                    >
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option selected>5</option>
                    </select>
                  </div>
                </div>

                <div className="w-full">
                  <p className="font-bold">Review:</p>
                  <textarea
                    id="desc"
                    placeholder="Your Review"
                    style={{ resize: "none" }}
                    className="w-full border-2 py-1 px-2 rounded-md focus:outline-none dark:border-gray-700 dark:text-gray-900"
                  ></textarea>
                </div>
                <div>
                  <span className="block w-full rounded-md shadow-sm">
                    <button
                      onClick={addReview}
                      className="py-2 px-4 btn btn-primary w-full text-center font-semibold shadow-md focus:outline-none  rounded-lg "
                    >
                      Add Review
                    </button>
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
