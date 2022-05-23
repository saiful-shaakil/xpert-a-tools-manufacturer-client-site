import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import auth from "../../firebase.init";
import LoadingPage from "../Shared/LoadingPage";

const Purchase = () => {
  const [user, loading] = useAuthState(auth);
  const id = useParams();
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/purchase/${id.id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  }, [id]);
  if (loading) {
    return <LoadingPage></LoadingPage>;
  }

  return (
    <div className="mx-20 mt-16 flex justify-between">
      <div>
        <h1 className="text-2xl font-semibold font-ubu">Item you're buying:</h1>
        <div className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50">
          <img
            src={product.img}
            alt=""
            className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
          />
          <div className="mt-6 mb-2">
            <span className="block text-2xl font-medium tracking-widest uppercase dark:text-violet-400">
              {product.name}
            </span>
            <h2 className="text-xl font-semibold tracking-wide">
              ${product.price}
            </h2>
          </div>
          <p className="dark:text-gray-100">{product.desc}</p>
        </div>
      </div>
      <div>
        <h1 className="text-3xl font-semibold font-ubu">Your information:</h1>
        <form>
          <div className="col-span-full sm:col-span-3">
            <label for="name" className="text-sm">
              Name
            </label>
            <input
              id="name"
              type="text"
              value={user.displayName}
              className="w-full border-2 py-1 px-2 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
            />
          </div>
          <div className="col-span-full sm:col-span-3">
            <label for="email" className="text-sm">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={user.email}
              className="w-full border-2 py-1 px-2 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
            />
          </div>
          <div className="col-span-full">
            <label for="address" className="text-sm">
              Address
            </label>
            <input
              id="address"
              type="text"
              placeholder=""
              className="w-full border-2 py-1 px-2 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
            />
          </div>
          <div className="col-span-full sm:col-span-2">
            <label for="city" className="text-sm">
              City
            </label>
            <input
              id="city"
              type="text"
              placeholder=""
              className="w-full border-2 py-1 px-2 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
            />
          </div>
          <div className="col-span-full sm:col-span-2">
            <label for="state" className="text-sm">
              State / Province
            </label>
            <input
              id="state"
              type="text"
              placeholder=""
              className="w-full border-2 py-1 px-2 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
            />
          </div>
          <div className="col-span-full sm:col-span-2">
            <label for="zip" className="text-sm">
              ZIP / Postal
            </label>
            <input
              id="zip"
              type="text"
              placeholder=""
              className="w-full border-2 py-1 px-2 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
            />
          </div>{" "}
          <br />
          <div className="col-span-full sm:col-span-2">
            <input
              id="submit"
              type="submit"
              value="Place Order"
              className="w-full btn btn-primary border-2 py-1 px-2 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Purchase;
