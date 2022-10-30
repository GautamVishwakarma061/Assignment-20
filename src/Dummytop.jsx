import React from "react";
function Dummytop() {
  return (
    <>
      <div className="hidden sm:block">
        <div className="grid items-center max-w-4xl grid-cols-5 space-y-1 bg-white border-2 border-gray-500 rounded-md ">
          <div className="text-xl">Remove</div>
          <div className="text-xl">Products</div>
          <div className="text-xl ">Price</div>
          <div className="text-xl ">Quantity</div>
          <div className="items-end text-xl ">Total</div>
        </div>
      </div>
      {/* <div className="block border-2 sm:hidden">
        <div className="text-xl">Remove</div>
        <div className="text-xl">Products</div>
        <div className="text-xl ">Price</div>
        <div className="text-xl ">Quantity</div>
        <div className="items-end text-xl ">Total</div>
      </div> */}
    </>
  );
}
export default Dummytop;
