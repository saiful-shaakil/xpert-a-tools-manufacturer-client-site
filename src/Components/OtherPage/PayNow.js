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

  const url = `http://localhost:5000/orders/${id}`;

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
      <div>
        <div class="shadow-lg rounded-2xl w-96 p-4 bg-white relative overflow-hidden">
          <div class="w-4/6">
            <p class=" text-lg font-pop font-bold text-primary mb-2">
              Hello! {order.name}
            </p>
            <p class="text-info text-sm mb-2">
              {`You ordered product ${order.productName} ${order.quantity} is ready. Pay now to get your product at home as soon as possible.`}
            </p>
            <p class="text-indigo-500 text-xl font-ubu">
              Total Price: ${parseInt(order.quantity) * parseInt(order.price)}
            </p>
          </div>
        </div>
      </div>
      <div>
        <Elements stripe={stripePromise}>
          <PaymentForm orderDet={order} />
        </Elements>
      </div>
    </div>
  );
};

export default PayNow;
