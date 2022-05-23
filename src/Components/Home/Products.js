import React, { useEffect, useState } from "react";
import EachProduct from "./EachProduct";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-5 mx-12">
      {products.map((each) => (
        <EachProduct product={each}></EachProduct>
      ))}
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
