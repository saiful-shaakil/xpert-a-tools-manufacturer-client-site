import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import LoadingPage from "../Shared/LoadingPage";

const MyOrders = () => {
  const [user, loading] = useAuthState(auth);
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/my-orders/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [user]);
  if (loading) {
    return <LoadingPage></LoadingPage>;
  }
  //to cancel order
  const cancelOrder = (id) => {
    console.log(id);
  };
  //to pay
  const payNow = (id) => {
    console.log(id);
  };
  return (
    <div className="mx-10 mt-6">
      <h1 className="text-2xl font-semibold font-ubu">Your Orders: </h1>
      <div>
        {
          <div class="container mx-auto px-4 sm:px-8 max-w-3xl">
            <div class="py-8">
              <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
                  <table class="min-w-full leading-normal">
                    <thead>
                      <tr>
                        <th
                          scope="col"
                          class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                        >
                          Product Name
                        </th>
                        <th
                          scope="col"
                          class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                        >
                          Quantity
                        </th>
                        <th
                          scope="col"
                          class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                        >
                          Per Price
                        </th>
                        <th
                          scope="col"
                          class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                        >
                          Total Price
                        </th>
                        <th
                          scope="col"
                          class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                        >
                          Status
                        </th>
                        <th
                          scope="col"
                          class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                        >
                          Action
                        </th>
                      </tr>
                    </thead>

                    <tbody>
                      {orders.map((order) => (
                        <tr key={order._id}>
                          <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <div class="flex items-center">
                              <div class="ml-3">
                                <p class="text-gray-900 whitespace-no-wrap">
                                  {order.productName}
                                </p>
                              </div>
                            </div>
                          </td>
                          <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <p class="text-gray-900 whitespace-no-wrap">
                              {order.quantity}
                            </p>
                          </td>
                          <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <p class="text-gray-900 whitespace-no-wrap">
                              ${order.price}
                            </p>
                          </td>
                          <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <p class="text-gray-900 whitespace-no-wrap">
                              ${order.price * order.quantity}
                            </p>
                          </td>
                          <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                              <span
                                aria-hidden="true"
                                class="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                              ></span>
                              <span class="relative">
                                <button onClick={() => payNow(order._id)}>
                                  Pay Now
                                </button>
                              </span>
                            </span>
                          </td>
                          <td class="px-5 py-5 border-b border-red-200 bg-white text-sm">
                            <span class="relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight">
                              <span
                                aria-hidden="true"
                                class="absolute inset-0 bg-red-200 opacity-50 rounded-full"
                              ></span>
                              <span class="relative">
                                <button onClick={() => cancelOrder(order._id)}>
                                  Cancel
                                </button>
                              </span>
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        }
      </div>
    </div>
  );
};

export default MyOrders;
