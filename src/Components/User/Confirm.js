import React from "react";
import { toast } from "react-toastify";

const Confirm = ({ order, allOrder, setOrders }) => {
  const { _id, productName, quantity } = order;
  //to delete
  const handleDelete = (id) => {
    fetch(`http://localhost:5000/delete-order/${id}`, {
      method: "DELETE",
      headers: {
        productId: id,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          const remain = allOrder.filter((x) => id !== x._id);
          toast(`Your order ${productName} ${quantity} pcs is canceled.`);
          setOrders(remain);
        }
      });
  };
  return (
    <div>
      <input type="checkbox" id="delete-form-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Are you sure you want to cancel your order?
          </h3>
          <div className="modal-action">
            <label for="delete-form-modal" className="btn btn-success">
              No
            </label>
            <label
              for="delete-form-modal"
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

export default Confirm;
