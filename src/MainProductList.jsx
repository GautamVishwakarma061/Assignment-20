import React, { useEffect, useState } from "react";
import ProductList from "./ProductList";
import { getProductList } from "./api";
import NoMatching from "./NoMatching";
import Loading from "./Loading";
import { range } from "lodash";
import { Link, useSearchParams } from "react-router-dom";
import { ImBackward2 } from "react-icons/im";
import { AiFillForward } from "react-icons/ai";

function MainProductList() {
  const [productData, setProductData] = useState();
  const [loading, setLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const params = Object.fromEntries([...searchParams]);

  let { query, sort, page } = params;

  page = +page || 1;
  query = query || "";
  sort = sort || "default";

  useEffect(
    function () {
      let sortBy;
      let sortType;
      if (sort == "title") {
        sortBy = "title";
      } else if (sort == "lowToHigh") {
        sortBy = "price";
      } else if (sort == "highToLow") {
        sortBy = "price";
        sortType = "desc";
      }
      getProductList(sortBy, query, page, sortType).then(function (xyz) {
        setProductData(xyz);
        setLoading(false);
      });
    },
    [sort, query, page]
  );
  useEffect(() => {}, [query, sort]);

  function handleQueryChange(event) {
    setSearchParams(
      { ...params, query: event.target.value, page: 1 },
      { replace: false }
    );
  }
  function handleSortChange(event) {
    setSearchParams(
      { ...params, sort: event.target.value },
      { replace: false }
    );
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Link to="/"></Link>
      <div className="w-full pt-4 pb-2 mb-4 bg-white sm:mx-4 sm:mt-8">
        <div className="max-w-4xl mx-auto mb-4 sm:flex sm:justify-between sm:mb-12">
          <div className="mb-2 sm:mb-0">
            <input
              className="w-32 border-2 border-black rounded-md sm:m-0"
              value={query}
              placeholder="Search"
              onChange={handleQueryChange}
            />
          </div>

          <div>
            <select
              onChange={handleSortChange}
              value={sort}
              className="w-32 border-2 border-black rounded-md "
            >
              <option value="default">Default Sort:</option>
              <option value="name">Sort By Title</option>
              <option value="lowToHigh">Sort By Price: Low To High</option>
              <option value="highToLow">Sort By Price: High To Low</option>
            </select>
          </div>
        </div>

        {productData.data.length > 0 && (
          <ProductList products={productData.data} />
        )}
        <div className="flex px-2 py-1 m-2">
          {productData.data.length == 0 && <NoMatching />}

          {page !== 1 && (
            <div>
              <Link
                to={"?" + new URLSearchParams({ ...params, page: page - 1 })}
              >
                <ImBackward2 className="text-2xl font-black text-red-400 hover:text-red-600" />
              </Link>
            </div>
          )}
          {range(1, productData.meta.last_page + 1).map((pageNo) => (
            <Link
              className={
                "px-2 py-1 m-2  text-white " +
                (pageNo == page ? "bg-orange-300" : " bg-orange-600")
              }
              key={pageNo}
              to={"?" + new URLSearchParams({ ...params, page: pageNo })}
            >
              {pageNo}
            </Link>
          ))}
          {page !== productData.meta.last_page && (
            <Link to={"?" + new URLSearchParams({ ...params, page: page + 1 })}>
              <AiFillForward className="text-2xl font-black text-red-400 hover:text-red-600" />
            </Link>
          )}
        </div>
      </div>
    </>
  );
}

export default MainProductList;
//56:30
// console.log("lodash", range(5, 9, 2));
