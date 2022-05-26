import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import ConfirmCancelOrder from "./ConfirmCancelOrder";

const AllOrders = () => {
  const [orders, setOrders] = useState([]);
  const [confirm, setConfirm] = useState(null);
  useEffect(() => {
    fetch("https://still-mesa-94038.herokuapp.com/all-orders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [orders]);
  const shipped = (id) => {
    fetch(`https://still-mesa-94038.herokuapp.com/shipped-order/${id}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged === true) {
          toast.success("Product is shipped.");
        }
      });
  };
  return (
    <div className="mx-10 mt-6">
      <h1 className="text-2xl font-semibold text-primary font-ubu">
        All Orders:{" "}
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
                          Buyer Name
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
                          Payment Status
                        </th>
                        <th
                          scope="col"
                          className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                        >
                          Product Status
                        </th>
                        <th
                          scope="col"
                          className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                        >
                          Action
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
                              {order.name}
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
                                {order.status === "Not Faid"
                                  ? "Not Paid"
                                  : "Paid"}
                              </span>
                            </span>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                              <span
                                aria-hidden="true"
                                className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                              ></span>
                              <span className="relative">
                                {order.shippingStatus === "Pending"
                                  ? "Pending"
                                  : "Shipped"}
                              </span>
                            </span>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-200  bg-white text-sm">
                            <span
                              className={`relative inline-block px-3 py-1 font-semibold ${
                                order.shippingStatus === "Shipped"
                                  ? "text-gray-400"
                                  : "text-green-900"
                              } leading-tight`}
                            >
                              <span
                                aria-hidden="true"
                                className={`absolute inset-0 ${
                                  order.shippingStatus === "Shipped"
                                    ? "bg-gray-400"
                                    : "bg-green-200"
                                } opacity-50 rounded-full`}
                              ></span>
                              <span className="relative">
                                <button
                                  disabled={order.paid === false}
                                  onClick={() => shipped(order._id)}
                                >
                                  Ship Now
                                </button>
                              </span>
                            </span>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-200  bg-white text-sm">
                            <span
                              className={`relative inline-block px-3 py-1 font-semibold ${
                                order.paid === false
                                  ? "text-red-900  cursor-pointer"
                                  : "text-gray-400"
                              } leading-tight`}
                            >
                              <span
                                aria-hidden="true"
                                className={`absolute inset-0 ${
                                  order.paid === false
                                    ? "bg-red-200"
                                    : "bg-gray-200"
                                } opacity-50 rounded-full`}
                              ></span>
                              <span className="relative">
                                <label
                                  for={
                                    order.paid === false
                                      ? "delete-order-form-modal"
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
            </div>
            {confirm && orders && (
              <ConfirmCancelOrder
                order={confirm}
                orders={orders}
                setOrders={setOrders}
              ></ConfirmCancelOrder>
            )}
          </div>
        }
      </div>
    </div>
  );
};

export default AllOrders;
