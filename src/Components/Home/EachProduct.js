import React from "react";

const EachProduct = ({ product }) => {
  const { name, img, desc, minimumOrder, available, price } = product;
  console.log(product);
  return (
    <div class="card w-96 bg-base-100 shadow-xl">
      <figure class="px-10 pt-10">
        <img src={img} alt="Photo" class="rounded-xl" />
      </figure>
      <div class="card-body items-center text-center">
        <h2 class="card-title">{name}</h2>
        <p>{desc}</p>
        <div>
          <p className="font-semibold">
            Available: <span className="font-bold">{available} pcs</span>
          </p>
          <p>Price: {price}</p>
        </div>
        <div class="card-actions">
          <button class="btn btn-primary">Purchase</button>
        </div>
      </div>
    </div>
  );
};

export default EachProduct;
