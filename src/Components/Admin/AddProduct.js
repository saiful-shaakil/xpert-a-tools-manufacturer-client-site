import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const AddProduct = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const newProduct = {
      name: data.name,
      img: data.photo,
      desc: data.desc,
      minimumOrder: data.minimum,
      available: data.available,
      price: data.price,
      type: "newArrivals",
    };
    fetch("http://localhost:5000/new-product", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged === true) {
          toast.success("New product is added in new arrivals list.");
        }
      });
  };
  return (
    <div className="mx-10 mt-6">
      <div>
        <div className="bg-white mt-6 rounded-lg shadow sm:max-w-md sm:w-full sm:mx-auto sm:overflow-hidden">
          <div className="px-4 py-8 sm:px-10">
            <div className="relative mt-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm leading-5">
                <span className="px-2  text-2xl font-ubu bg-white">
                  Add a New Product
                </span>
              </div>
            </div>
            <div className="mt-6">
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  className="border-2 rounded-lg w-full py-2 px-4 "
                  type="text"
                  name=""
                  id="name"
                  placeholder="Product Name"
                  required
                  {...register("name")}
                />
                <input
                  className="border-2 rounded-lg my-3 w-full py-2 px-4 "
                  type="text"
                  name=""
                  id="price"
                  placeholder="Product Price"
                  required
                  {...register("price")}
                />
                <input
                  className="border-2 rounded-lg my-3 w-full py-2 px-4 "
                  type="text"
                  name=""
                  id="available"
                  placeholder="Available Quantity"
                  required
                  {...register("available")}
                />
                <input
                  className="border-2 rounded-lg my-3 w-full py-2 px-4 "
                  type="text"
                  name=""
                  id="minimum"
                  placeholder="Minimum Order Quantity"
                  required
                  {...register("minimum")}
                />
                <input
                  className="border-2 rounded-lg my-3 w-full py-2 px-4 "
                  type="text"
                  name=""
                  id="photo"
                  placeholder="Product Photo URL"
                  required
                  {...register("photo")}
                />
                <textarea
                  className="border-2 rounded-lg my-3 w-full py-2 px-4 "
                  name=""
                  style={{ resize: "none" }}
                  id="desc"
                  cols="10"
                  rows="5"
                  placeholder="Product Description"
                  {...register("desc")}
                ></textarea>
                <input
                  className="btn btn-primary w-full"
                  type="submit"
                  value="Add Product"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
