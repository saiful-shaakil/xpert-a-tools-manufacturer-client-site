import React, { useEffect, useState } from "react";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { toast } from "react-toastify";
import LoadingPage from "../Shared/LoadingPage";

const PaymentForm = ({ orderDet }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [paymentSuccess, setPaymentSuccess] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const { price, quantity, name, email, _id } = orderDet;

  useEffect(() => {
    const totalPrice = parseInt(price) * parseInt(quantity);
    fetch(
      "https://xpert-tools-manufacturer-server-site.onrender.com/create-payment-intent",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify({ totalPrice }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false);
        setClientSecret(data.clientSecret);
      });
  }, []);
  if (isLoading) {
    return <LoadingPage></LoadingPage>;
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setCardError(error.message);
    } else {
      setCardError("");
    }

    const { paymentIntent, error: errorOfIntent } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: name,
            email: email,
          },
        },
      });
    if (errorOfIntent) {
      setIsLoading(false);
      setCardError(errorOfIntent?.message);
    } else {
      setIsLoading(true);
      setPaymentSuccess("Congrats! Your payment is success.");
      setTransactionId(paymentIntent.id);
      fetch(
        `https://xpert-tools-manufacturer-server-site.onrender.com/update-order/${_id}`,
        {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
          body: JSON.stringify({ transId: paymentIntent.id }),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          setIsLoading(false);
        });
    }
  };

  return (
    <div className="w-80 md:w-1/2 mx-auto my-10">
      <form className="border-lg" onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                padding: "12px",
                borderRadius: "5px",
                backgroundColor: "#FDE0D9",
                fontSize: "16px",
                color: "black",
                "::placeholder": {
                  color: "black",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn mt-3 btn-sm btn-success"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
      </form>
      {cardError && <p className="text-red-600">{cardError}</p>}
      {paymentSuccess && (
        <p className="text-green-600">
          {paymentSuccess}. Your transaction Id is{" "}
          <span className="text-primary">{transactionId}</span>
        </p>
      )}
    </div>
  );
};

export default PaymentForm;
