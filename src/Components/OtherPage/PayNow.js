import React from "react";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { useParams } from "react-router-dom";
import LoadingPage from "../Shared/LoadingPage";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import PaymentForm from "./PaymentForm";

const stripePromise = loadStripe(
  "pk_test_51L3GjVAjo3Oz9HwztP0K4uT8wQgUycRVbtITED5jXTYZC9fd4ry3uaCfssebrXqM9JRABtehNLQqXmSa1yyjbQ8Q00RkyHdNNa"
);

const PayNow = () => {
  const { id } = useParams();

  const url = `https://xpert-tools-manufacturer-server-site.onrender.com/orders/${id}`;

  const {
    data: order,
    isLoading,
    error,
  } = useQuery(["order", id], () => fetch(url).then((res) => res.json()));

  if (isLoading) return <LoadingPage></LoadingPage>;

  if (error) return "An error has occurred: " + error.message;

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="pt-36 mx-20">
      <div className="">
        <div className="shadow-lg rounded-2xl w-80 md:w-96 mx-auto p-4 bg-white relative overflow-hidden">
          <div className="w-4/6">
            <p className=" text-lg font-pop font-bold text-primary mb-2">
              Hello! {order.name}
            </p>
            <p className="text-info text-sm mb-2">
              You ordered product{" "}
              <span className="text-primary">
                {order.productName} {order.quantity}
              </span>{" "}
              pcs is ready. Pay now to get your product at home as soon as
              possible
            </p>
            <p className="text-info text-xl font-ubu">
              Total Price: ${parseInt(order.quantity) * parseInt(order.price)}
            </p>
          </div>
        </div>
      </div>
      <div className="w-full">
        <Elements stripe={stripePromise}>
          <PaymentForm orderDet={order} />
        </Elements>
      </div>
    </div>
  );
};

export default PayNow;
