import React from "react";

function updateCart() {}

export default function Coupan({ updatemyCart }) {
  return (
    <div className="flex mb-2 justify-evenly">
      <div>
        <input
          className="w-32 p-1 mr-2 text-sm border-2 border-gray-700 rounded-md sm:text-xl sm:w-48"
          placeholder="Coupon Code"
        />
        <button className="p-1 text-sm text-white bg-orange-500 border-2 border-gray-700 rounded-md sm:text-xl ">
          APPLY CODE
        </button>
      </div>
    </div>
  );
}
