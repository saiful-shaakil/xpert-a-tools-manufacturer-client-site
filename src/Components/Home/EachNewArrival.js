import React from "react";

const EachNewArrival = ({ img, title, details, bg }) => {
  return (
    <div className={`card lg:card-side shadow-xl ${bg}  text-black p-5`}>
      <div className="card-body mt-5 font-pop">
        <h1>New Arrivals 2022</h1>
        <h2 className="card-title">{title}</h2>
        <p className="font-semibold">{details}</p>
      </div>
      <figure style={{ width: "200px" }}>
        <img src={img} alt="Album" />
      </figure>
    </div>
  );
};

export default EachNewArrival;
