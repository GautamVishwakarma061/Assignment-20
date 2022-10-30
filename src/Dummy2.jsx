// cartRow
import React from "react";
import { AiOutlineDelete } from "react-icons/ai";

function Dummy2({ product, quantity, onQuantityChange, onRemove }) {
  function handleChange(event) {
    onQuantityChange(product.id, +event.target.value);
  }

  function handleRemove() {
    onRemove(product.id);
  }
  return (
    <>
      <div className="hidden sm:block">
        <div className="grid items-center justify-center max-w-4xl grid-cols-6 mx-auto my-2 border-2 border-gray-300 rounded-sm bg-blue-50">
          <div className="mx-auto text-2xl text-red-600 hover:text-red-800 hover:animate-bounce">
            <button onClick={handleRemove}>
              <AiOutlineDelete className="font-black" />
            </button>
          </div>
          <div className="w-20 aspect-square">
            <img
              src={product.thumbnail}
              className="object-cover w-full h-full"
            />
          </div>
          <div>
            <div className="text-xs font-black text-orange-400">
              {product.title}
            </div>
          </div>

          <div className="flex gap-1">
            <div className="text-sm font-semibold">₹{product.price}</div>
          </div>

          <div>
            <input
              value={quantity}
              className="flex items-center justify-center w-12 border-2 border-blue-300 rounded-md "
              type="number"
              onChange={handleChange}
            />
          </div>
          <div className="flex gap-1">
            <span className="font-bold">₹</span>
            {product.price * quantity}
          </div>
        </div>
      </div>
      {/* for mobile screen */}

      <div className="block mb-5 border-4 sm:hidden">
        <div className="flex justify-between px-5 border-b-2 ">
          <span>Remove</span>
          <button onClick={handleRemove}>X</button>
        </div>
        <div className="flex justify-between pl-5 border-b-2 ">
          <span>Product</span>
          <div className="w-20 aspect-square">
            <img
              src={product.thumbnail}
              className="object-cover w-full h-full"
            />
            <div className="text-xs font-black text-orange-400">
              {product.title}
            </div>
          </div>
        </div>
        <div className="flex justify-between px-5 border-b-2">
          <div>Price</div>
          <div className="text-sm font-semibold">₹{product.price}</div>
        </div>
        <div className="flex justify-between px-5 border-b-2">
          <span>Quantity</span>
          <input
            value={quantity}
            className="flex items-center justify-center w-12 border-2 border-blue-300 rounded-md "
            type="number"
            onChange={handleChange}
          />
        </div>
        <div className="flex justify-between px-5 border-b-2">
          <div>Total</div>₹{product.price * quantity}
        </div>
      </div>
    </>
  );
}
export default Dummy2;
