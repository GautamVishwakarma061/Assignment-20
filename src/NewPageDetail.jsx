import React, { useState, useEffect } from "react";
import NoData from "./NoData";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi";
import { getProductData } from "./api";

import { withCart } from "./withProvider";

function NewPageDetail({ addToCart }) {
  const id = +useParams().id;
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(1);

  useEffect(
    function () {
      const p = getProductData(id);
      p.then(function (response) {
        setProduct(response);
        setLoading(false);
      }).catch(function () {
        setLoading(false);
      });
    },
    [id]
  );

  function handleInputInitial() {
    setCount(1);
  }

  function handleCountChange(event) {
    setCount(+event.target.value);
  }

  function handleButtonClick() {
    addToCart(id, count);
    setCount(1);
  }

  if (loading) {
    return <div>loading</div>;
  }
  if (!product) {
    return <NoData />;
  }

  return (
    <>
      <div className="flex p-2">
        <Link
          to="/"
          onClick={handleInputInitial}
          className="px-2 py-2 text-xl font-bold text-white bg-indigo-500 border rounded-full hover:bg-indigo-700 "
        >
          <HiArrowNarrowLeft />
        </Link>
      </div>

      <div className="p-4 m-4 bg-white rounded-md">
        <div className="md:flex md:gap-4 xl:gap-0">
          <div className="md:w-1/4 ">
            <img src={product.thumbnail} />
          </div>
          <div className="md:w-2/6">
            <h1 className="text-sm font-bold text-gray-500">
              {product.category}
            </h1>
            <h1 className="text-sm font-bold text-gray-500">{product.brand}</h1>
            <h1 className="font-black ">{product.title}</h1>
            <h1 className="text-sm font-normal ">{product.description}</h1>
            <h1 className="text-blue-500 ">{product.rating}</h1>
            <div className="flex flex-row-reverse justify-end">
              <h1 className="text-sm font-bold ">₹{product.price}</h1>
              <h1 className="mr-2 text-sm font-bold text-gray-500 line-through">
                {product.sale}
              </h1>
            </div>
            <div className="flex m-2 ">
              <div>
                <input
                  value={count}
                  onChange={handleCountChange}
                  type="number"
                  className="w-8 border-2 border-red-300 rounded-md"
                />
              </div>

              <div>
                <button
                  onClick={handleButtonClick}
                  className="px-6 py-1 ml-4 bg-red-300 rounded-md text-bold hover:bg-red-500"
                >
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between p-2">
        <div>
          {id > 1 && (
            <Link to={"/products/" + (id - 1)} onClick={handleInputInitial}>
              <div className="flex items-center px-2 py-1 bg-green-500 rounded-md hover:bg-green-700 hover:text-white">
                <HiArrowNarrowLeft className="text-2xl" />
                <div>Previous</div>
              </div>
            </Link>
          )}
        </div>

        <div>
          <Link to={"/products/" + (id + 1)} onClick={handleInputInitial}>
            <div className="flex items-center px-2 py-1 bg-green-500 rounded-md hover:bg-green-700 hover:text-white">
              <div>Next</div>
              <HiArrowNarrowRight className="text-2xl" />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
export default withCart(NewPageDetail);

//lot of error
