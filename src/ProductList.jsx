import React from "react";
import Product from "./Product";

function ProductList({ products }) {
  return (
    <div className="max-w-4xl grid-cols-3 gap-10 mx-auto shadow-lg md:grid ">
      {products.map(function (item) {
        return (
          <Product
            key={item.id}
            title={item.title}
            category={item.category}
            photo={item.thumbnail}
            price={item.price}
            rating={item.rating}
            sale={item.sale}
            {...item}
          />
        );
      })}
    </div>
  );
}
export default ProductList;
