import React, { useEffect, useState } from "react";

const AllProducts = () => {
  const [all, setAll] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/all-products")
      .then((res) => res.json())
      .then((data) => setAll(data));
  }, []);
  return (
    <div class="overflow-x-auto mt-10 mx-10">
      <h1 className="font-ubu font-semibold text-3xl mb-10">All Products:</h1>
      <table class="table table-zebra w-full">
        <thead>
          <tr>
            <th></th>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {all.map((each, index) => (
            <tr key={each._id}>
              <th>{index + 1}</th>
              <td>{each.name}</td>
              <td>{each.available}</td>
              <td>{each.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllProducts;
