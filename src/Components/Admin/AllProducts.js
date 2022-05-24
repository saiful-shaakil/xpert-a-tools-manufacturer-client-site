import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import ConfirmDelete from "./ConfirmDelete";

const AllProducts = () => {
  const [all, setAll] = useState([]);
  const [confirm, setConfirm] = useState(null);
  useEffect(() => {
    fetch("http://localhost:5000/all-products")
      .then((res) => res.json())
      .then((data) => setAll(data));
  }, []);
  return (
    <div className="overflow-x-auto mt-10 mx-10">
      <h1 className="font-ubu font-semibold text-3xl mb-10">All Products:</h1>
      <table className="table table-zebra w-full">
        <thead>
          <tr>
            <th></th>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {all.map((each, index) => (
            <tr key={each._id}>
              <th>{index + 1}</th>
              <td>{each.name}</td>
              <td>{each.available}</td>
              <td>{each.price}</td>
              <td className="px-5 py-5 border-b border-red-200 bg-white text-sm">
                <span className="relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight">
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 bg-red-200 opacity-50 rounded-full"
                  ></span>
                  <span className="relative">
                    <label
                      htmlFor="delete-product-form-modal"
                      onClick={() => setConfirm(each)}
                      className="cursor-pointer"
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </label>
                  </span>
                </span>
              </td>
            </tr>
          ))}
          {confirm && all && (
            <ConfirmDelete
              product={confirm}
              allProduct={all}
              setAll={setAll}
            ></ConfirmDelete>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AllProducts;
