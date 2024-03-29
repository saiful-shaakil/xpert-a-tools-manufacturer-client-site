import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import LoadingPage from "../Shared/LoadingPage";
import Confirm from "./Confirm";

const MyOrders = () => {
  const [user, loading] = useAuthState(auth);
  const [orders, setOrders] = useState([]);
  const [confirm, setConfirm] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    fetch(
      `https://xpert-tools-manufacturer-server-site.onrender.com/my-orders/${user?.email}`,
      {
        method: "GET",
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [user]);
  if (loading) {
    return <LoadingPage></LoadingPage>;
  }

  const payNow = (id) => {
    navigate(`/dashboard/payment/${id}`);
  };
  return (
    <div className="mx-10 mt-6">
      <h1 className="text-2xl font-semibold text-primary font-ubu">
        Your Orders:{" "}
      </h1>
      <div>
        {
          <div className="container mx-auto px-4 sm:px-8">
            <div className="py-8">
              <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                  <table className="min-w-full leading-normal">
                    <thead>
                      <tr>
                        <th
                          scope="col"
                          className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                        >
                          Product Name
                        </th>
                        <th
                          scope="col"
                          className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                        >
                          Quantity
                        </th>
                        <th
                          scope="col"
                          className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                        >
                          Per Price
                        </th>
                        <th
                          scope="col"
                          className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                        >
                          Total Price
                        </th>
                        <th
                          scope="col"
                          className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                        >
                          Status
                        </th>
                        <th
                          scope="col"
                          className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                        >
                          Transaction Id
                        </th>
                        <th
                          scope="col"
                          className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                        >
                          Action
                        </th>
                      </tr>
                    </thead>

                    <tbody>
                      {orders.map((order) => (
                        <tr key={order._id}>
                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <div className="flex items-center">
                              <div className="ml-3">
                                <p className="text-gray-900 whitespace-no-wrap">
                                  {order.productName}
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">
                              {order.quantity}
                            </p>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">
                              ${order.price}
                            </p>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">
                              ${order.price * order.quantity}
                            </p>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                              <span
                                aria-hidden="true"
                                className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                              ></span>
                              <span className="relative">
                                <button
                                  disabled={order.paid === true}
                                  onClick={() => payNow(order._id)}
                                >
                                  {order.paid === false ? "Pay Now" : "Paid"}
                                </button>
                              </span>
                            </span>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">
                              {order.transactionId}
                            </p>
                          </td>
                          <td className="px-5 py-5 border-b border-red-200 bg-white text-sm">
                            <span
                              className={`relative inline-block px-3 py-1 font-semibold ${
                                order.paid === false
                                  ? "text-red-900"
                                  : "text-gray-100"
                              } leading-tight`}
                            >
                              <span
                                aria-hidden="true"
                                className={`absolute inset-0 ${
                                  order.paid === false
                                    ? "bg-red-200"
                                    : "bg-gray-100"
                                } opacity-50 rounded-full`}
                              ></span>
                              <span className="relative">
                                <label
                                  htmlFor={
                                    order.paid === false
                                      ? "delete-form-modal"
                                      : ""
                                  }
                                  onClick={() => setConfirm(order)}
                                  className="cursor-pointer"
                                >
                                  Cancel
                                </label>
                              </span>
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              {confirm && orders && (
                <Confirm
                  order={confirm}
                  allOrder={orders}
                  setOrders={setOrders}
                ></Confirm>
              )}
            </div>
          </div>
        }
      </div>
    </div>
  );
};

export default MyOrders;
