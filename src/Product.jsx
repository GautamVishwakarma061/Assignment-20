import React from "react";
import { Link } from "react-router-dom";

function Product({ thumbnail, category, title, rating, sale, price, id }) {
  return (
    <>
      <Link to={"/products/" + id}>
        <div className="max-w-xs mb-2 bg-white border-2 shadow-lg sm:mb-0 sm:shadow-none">
          <div className="w-full aspect-square">
            <img src={thumbnail} className="object-cover w-full h-full" />
          </div>
          <div>
            <div className="text-xs text-gray-500">{category}</div>
            <div className="text-sm font-black">{title}</div>
            <div className="text-xs text-blue-400">{rating}</div>
            <div className="flex gap-1">
              <div className="text-xs text-gray-400 line-through">{sale}</div>
              <div className="font-bold text-md">₹{price}</div>
            </div>
          </div>
          <div className="mt-2 mb-2">
            <Link
              to={"/products/" + id}
              className="px-3 py-1 text-xs font-bold text-white bg-orange-500 border-2 rounded-md"
            >
              View Detail
            </Link>
          </div>
        </div>
      </Link>
    </>
  );
}
export default Product;
