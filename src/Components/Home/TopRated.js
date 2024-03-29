import React, { useEffect, useState } from "react";
import EachProduct from "./EachProduct";

const TopRated = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://xpert-tools-manufacturer-server-site.onrender.com/top-rated")
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

export default TopRated;
