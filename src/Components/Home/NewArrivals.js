import React from "react";
import EachNewArrival from "./EachNewArrival";
import chainSaw from "../../assets/icons/chainsaw.png";
import woodCutter from "../../assets/icons/saw.png";
import powerSaw from "../../assets/icons/power-saw.png";

const NewArrivals = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 px-4 lg:px-10 mt-10">
      <EachNewArrival
        bg="bg-primary"
        title="Electric Saw"
        details="From $980"
        img={chainSaw}
      ></EachNewArrival>
      <EachNewArrival
        bg="bg-secondary"
        title="Wood Cutter"
        details="From $680"
        img={woodCutter}
      ></EachNewArrival>
      <EachNewArrival
        bg="bg-accent"
        title="Power Saw"
        details="From $880"
        img={powerSaw}
      ></EachNewArrival>
    </div>
  );
};

export default NewArrivals;
