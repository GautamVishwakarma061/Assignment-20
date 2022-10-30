import React from "react";

export default function CartTotal() {
  return (
    <div className="flex justify-end">
      <div className="w-40 p-2 bg-white border-2 border-gray-500 rounded-md sm:w-64">
        <h2 className="text-xl text-center sm:text-2xl text-bold ">
          CART TOTAL
        </h2>
        <div className="flex justify-between border-2 border-gray-200 rounded-md">
          <span className="text-sm sm:text-xl text-bold">Subtotal</span>
          <span className="text-sm sm:text-xltext-bold">Rs60</span>
        </div>
        <div className="flex justify-between border-2 border-gray-200 rounded-md">
          <span className="text-sm sm:text-xl text-bold">Total</span>
          <span className="text-sm sm:text-xl text-bold">Rs60</span>
        </div>
        <button className="px-1 my-1 text-sm text-white bg-orange-500 border-2 border-gray-500 rounded-md sm:my-4 sm:mx-10 sm:text-xl ">
          Proceed to checkout
        </button>
      </div>
    </div>
  );
}
