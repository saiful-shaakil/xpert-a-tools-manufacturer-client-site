import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import CustomLink from "../Shared/CustomLink";
import EachProduct from "./EachProduct";

const Products = () => {
  return (
    <div>
      <div
        style={{ textDecoration: "none" }}
        className="flex items-center text-[16px] md:text-2xl font-pop justify-center my-10"
      >
        <CustomLink to="/top-rated">Top Rated</CustomLink>
        <CustomLink className="mx-5" to="/">
          New Arrivals
        </CustomLink>
        <CustomLink to="/featured">Featured</CustomLink>
      </div>
      <div className="flex justify-center items-center">
        <div className="border-b-4 mb-10 w-1/2 border-primary"></div>
      </div>
      <Outlet />
    </div>
  );
};

export default Products;

// {
//     "name": "Wood Cutter",
//     "img": "https://i.ibb.co/q0b1ZYv/wood-cutterr.jpg",
//     "desc": "a cutting tool or cutter is typically a hardened metal tool that is used to cut, shape, and remove material from a workpiece by means of machining tools as well as abrasive tools by way of shear deformation. There are several different types of single edge cutting tools that are made from a variety of hardened metal alloys that are ground to a specific shape in order to perform a specific part of the turning process resulting in a finished machined part.",
//     "minimunOrder": 100,
//     "available": 910,
//     "price": 100
//   }
