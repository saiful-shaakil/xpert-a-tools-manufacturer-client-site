import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import LoadingPage from "../Shared/LoadingPage";

const Purchase = () => {
  const [user, loading] = useAuthState(auth);
  const id = useParams();
  const [product, setProduct] = useState([]);
  const [quantity, setQuantity] = useState(0);
  const [availableQuantity, setAvailableQuantity] = useState(0);
  const { register, handleSubmit } = useForm();
  useEffect(() => {
    fetch(`http://localhost:5000/purchase/${id.id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setQuantity(data.minimumOrder);
        setAvailableQuantity(data.available);
      });
  }, [id]);
  if (loading) {
    return <LoadingPage></LoadingPage>;
  }
  // to increase and decrease the order amount
  const increaseQuantity = () => {
    if (quantity < availableQuantity) {
      setQuantity(quantity + 1);
    } else {
      toast("You are reaching more than available quantity.");
    }
  };
  const decreaseQuantity = () => {
    if (quantity > product.minimumOrder) {
      setQuantity(quantity - 1);
    } else {
      toast(`You have to order at least ${quantity} ${product.name}`);
    }
  };
  //placing the order
  const onSubmit = (data) => {
    const placeDetails = {
      name: data.name,
      email: data.email,
      address: data.address,
      city: data.city,
      zip: data.zip,
      quantity: quantity,
      paid: false,
    };
    fetch(`http://localhost:5000/place-order`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(placeDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div className="mx-20 mt-16 flex justify-around">
      <div className="w-1/2">
        <h1 className="text-2xl font-semibold font-ubu">Item you're buying:</h1>
        <div className=" p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50">
          <img
            style={{ height: "300px", width: "300px" }}
            src={product.img}
            alt=""
            className="object-cover object-center rounded-md dark:bg-gray-500"
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
          <div>
            <span className="text-xl font-semibold">Order Amount: &nbsp;</span>
            <button
              onClick={decreaseQuantity}
              className="btn text-white text-xl btn-error"
            >
              -
            </button>
            <input
              className="text-black  text-center w-12 mx-2"
              value={quantity}
              type="text"
              id="quantityValue"
            />
            <button
              onClick={increaseQuantity}
              className="btn text-white text-xl btn-success"
            >
              +
            </button>
          </div>
        </div>
      </div>
      <div className="w-1/3">
        <h1 className="text-3xl font-semibold font-ubu">Your information:</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="col-span-full sm:col-span-3">
            <label htmlFor="name" className="text-sm">
              Name
            </label>
            <input
              id="name"
              type="text"
              {...register("name")}
              value={user.displayName}
              className="w-full border-2 py-1 px-2 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
            />
          </div>
          <div className="col-span-full sm:col-span-3">
            <label htmlFor="email" className="text-sm">
              Email
            </label>
            <input
              id="email"
              type="email"
              {...register("email")}
              value={user.email}
              className="w-full border-2 py-1 px-2 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
            />
          </div>
          <div className="col-span-full">
            <label htmlFor="address" className="text-sm">
              Address
            </label>
            <input
              id="address"
              type="text"
              required
              {...register("address")}
              placeholder=""
              className="w-full border-2 py-1 px-2 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
            />
          </div>
          <div className="col-span-full sm:col-span-2">
            <label htmlFor="city" className="text-sm">
              City
            </label>
            <input
              id="city"
              type="text"
              required
              {...register("city")}
              placeholder=""
              className="w-full border-2 py-1 px-2 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
            />
          </div>
          <div className="col-span-full sm:col-span-2">
            <label htmlFor="zip" className="text-sm">
              ZIP / Postal
            </label>
            <input
              id="zip"
              type="text"
              required
              {...register("zip")}
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
