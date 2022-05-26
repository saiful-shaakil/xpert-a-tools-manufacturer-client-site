import React from "react";

const EachReview = ({ review }) => {
  const { name, desc, photo, rating } = review;
  return (
    <div className="h-80 aspect-video rounded-sm object-cover object-center dark:bg-gray-500">
      <div className="bg-white dark:bg-gray-800 shadow-lg mx-auto text-center rounded-xl p-4">
        <h1 className="font-ubu text-xl md:text-3xl text-info ">
          Ratings: {rating}/5
        </h1>
        <p className="text-info text-xl md:text-4xl  font-pop dark:text-white">
          <span className="font-bold text-indigo-500 text-xl md:text-5xl">
            “
          </span>
          {desc}
          <span className="font-bold text-indigo-500 text-xl md:text-5xl">
            ”
          </span>
        </p>
        <div className="flex items-center justify-center mt-4">
          <a href="#" className="block relative">
            <img
              alt="profil"
              src={photo}
              className="mx-auto object-cover rounded-full h-10 w-10 md:h-20 md:w-20"
            />
          </a>
          <div className="flex flex-col ml-2 justify-between">
            <span className="font-semibold text-info text-sm md:text-2xl">
              {name}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EachReview;
