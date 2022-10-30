import React from "react";
import { Link } from "react-router-dom";

function Newpage({ ...data }) {
  return (
    <>
      <div className="flex justify-end p-2">
        <Link
          to="/"
          className="px-2 py-2 text-xl font-bold bg-blue-500 border rounded-full "
        >
          Back
        </Link>
      </div>
      <div className="px-12 pr-16 mb-8">
        <div key={data.id}>
          <img src={data.photo} className="w-2/6 rounded-md" />
          <div className="text-xs font-black text-gray-500">
            {data.category}
          </div>
          <div className="font-black text-black text-md">{data.title}</div>
          <div className="text-sm font-black">{data.item}</div>
          <div className="text-sm font-normal">{data.detail}</div>
          <div className="text-blue-400">{data.rating}</div>
          <div className="flex gap-1">
            <div class="text-gray-400 line-through text-xs">{data.sale}</div>
            <div className="text-sm font-black ">₹{data.price}</div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Newpage;

//changes
