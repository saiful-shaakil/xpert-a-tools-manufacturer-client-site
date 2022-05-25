import React from "react";

const EachNewArrival = ({ img, title, details, bg }) => {
  return (
    <div className={`card card-side shadow-xl ${bg}  text-black p-5`}>
      <div className="card-body mt-5 font-pop">
        <h1 className="text-xl md:text-3xl">New Arrivals 2022</h1>
        <h2 className="card-title md:text-4xl">{title}</h2>
        <p className="font-semibold md:text-3xl">{details}</p>
      </div>
      <figure style={{ width: "200px" }}>
        <img src={img} alt="Album" />
      </figure>
    </div>
  );
};

export default EachNewArrival;
