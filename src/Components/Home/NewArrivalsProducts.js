import React, { useEffect, useState } from "react";
import EachProduct from "./EachProduct";

const NewArrivalsProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://still-mesa-94038.herokuapp.com/new-arrivals")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-5 mx-12">
      {products.map((each) => (
        <EachProduct key={each._id} product={each}></EachProduct>
      ))}
    </div>
  );
};

export default NewArrivalsProducts;
