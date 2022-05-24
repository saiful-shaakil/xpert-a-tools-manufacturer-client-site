import React from "react";

const EachReview = ({ review }) => {
  const { name, desc, photo, rating } = review;
  return (
    <div className="h-48 aspect-video rounded-sm object-cover object-center dark:bg-gray-500">
      <div className="bg-white dark:bg-gray-800 w-72 shadow-lg mx-auto text-center rounded-xl p-4">
        <h1 className="font-ubu">Ratings: {rating}/5</h1>
        <p className="text-gray-600 font-pop dark:text-white">
          <span className="font-bold text-indigo-500 text-lg">“</span>
          {desc}
          <span className="font-bold text-indigo-500 text-lg">”</span>
        </p>
        <div className="flex items-center justify-center mt-4">
          <a href="#" className="block relative">
            <img
              alt="profil"
              src={photo}
              className="mx-auto object-cover rounded-full h-10 w-10 "
            />
          </a>
          <div className="flex flex-col ml-2 justify-between">
            <span className="font-semibold text-indigo-500 text-sm">
              {name}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EachReview;
