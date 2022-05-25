import React from "react";
import { toast } from "react-toastify";

const ConfirmDelete = ({ product, allProduct, setAll }) => {
  const { _id, name, available } = product;
  //to delete
  const handleDelete = (id) => {
    fetch(`http://localhost:5000/delete-product/${id}`, {
      method: "DELETE",
      headers: {
        productId: id,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          const remain = allProduct.filter((x) => id !== x._id);
          toast.success(`Your product ${name} ${available} pcs is deleted.`);
          setAll(remain);
        }
      });
  };
  return (
    <div>
      <input
        type="checkbox"
        id="delete-product-form-modal"
        className="modal-toggle"
      />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Are you sure you want to delete this product?
          </h3>
          <div className="modal-action">
            <label for="delete-product-form-modal" className="btn btn-success">
              No
            </label>
            <label
              for="delete-product-form-modal"
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

export default ConfirmDelete;
