import React from "react";
import { useNavigate } from "react-router-dom";

const EachProduct = ({ product }) => {
  const { _id, name, img, desc, minimumOrder, available, price } = product;
  const navigate = useNavigate();
  const purchaseButton = (id) => {
    navigate(`/purchase/${id}`);
  };
  return (
    <div className="bg-white mx-auto p-2 sm:p-4 sm:h-64 rounded-2xl shadow-lg flex flex-col sm:flex-row lg:flex-row-reverse gap-5 select-none mb-8 laptop">
      <div className="sm:h-40 rounded-xl ">
        <img style={{ height: "200px" }} src={img} alt="" />
      </div>
      <div className="flex flex-col flex-1 gap-5 sm:p-2">
        <div className="flex flex-1 flex-col gap-3">
          <div className=" w-full  sm:h-16 rounded-2xl font-semibold">
            {name}
          </div>
          <div className=" sm:h-16 rounded-2xl">{desc.slice(0, 100)}</div>
          <div className=" sm:h-3 rounded-2xl">
            <b> Minimum Order: {minimumOrder}</b>
          </div>
        </div>
        <div className="mt-auto flex gap-3">
          <div className=" w-20 sm:h-8  rounded-full">
            $ <b>{price}</b>
          </div>
          <div className=" w-28 sm:h-8   rounded-full">
            In stock: <b>{available}</b>
          </div>
          <div className=" w-40 sm:h-8  rounded-full ml-auto">
            <button
              type="button"
              className="px-8 font-semibold rounded btn-primary text-white"
              onClick={() => purchaseButton(_id)}
            >
              Purchase
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EachProduct;
