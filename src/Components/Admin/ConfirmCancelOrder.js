import React from "react";
import { toast } from "react-toastify";

const ConfirmCancelOrder = ({ order, orders, setOrders }) => {
  const { _id, name } = order;
  //to delete
  const handleDelete = (id) => {
    fetch(`https://still-mesa-94038.herokuapp.com/delete-order/${id}`, {
      method: "DELETE",
      headers: {
        productId: id,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          const remain = orders.filter((x) => id !== x._id);
          toast.success(`Order for ${name} is canceled.`);
          setOrders(remain);
        }
      });
  };
  return (
    <div>
      <input
        type="checkbox"
        id="delete-order-form-modal"
        className="modal-toggle"
      />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Are you sure you want to delete this order?
          </h3>
          <div className="modal-action">
            <label for="delete-order-form-modal" className="btn btn-success">
              No
            </label>
            <label
              for="delete-order-form-modal"
              onClick={() => handleDelete(_id)}
              className="btn btn-error"
            >
              Yes
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmCancelOrder;
