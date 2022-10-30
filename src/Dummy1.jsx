//cartlist
import React, { useEffect, useState } from "react";
import Dummy2 from "./Dummy2";
import { withCart } from "./withProvider";

function Dummy1({ cart, updateCart }) {
  const [loading, setLoading] = useState(true);
  const [quantityMap, setQuantityMap] = useState({});

  const cartToQuantityMap = () =>
    cart.reduce(
      (m, cartItem) => ({ ...m, [cartItem.product.id]: cartItem.quantity }),
      {}
    );
  useEffect(
    function () {
      setQuantityMap(cartToQuantityMap());
      setLoading(false);
    },
    [cart]
  );

  function handleQuantityChange(productId, newValue) {
    const newQuantityMap = { ...quantityMap, [productId]: newValue };
    setQuantityMap(newQuantityMap);
  }

  function handleUpdateCartClick() {
    updateCart(quantityMap);
  }

  function handleRemove(productId) {
    const newQuantityMap = cartToQuantityMap();
    delete newQuantityMap[productId];
    updateCart(newQuantityMap);
  }
  if (loading) {
    return <div>loading</div>;
  }
  return (
    <>
      {cart.length <= 0 ? (
        <div className="p-10 text-4xl font-black text-center text-blue-600 bg-blue-200 ">
          NOTHING HAS BEEN ADDED...
        </div>
      ) : (
        <>
          <div>
            {cart.map((cartItem) => (
              <Dummy2
                key={cartItem.product.id}
                product={cartItem.product}
                quantity={quantityMap[cartItem.product.id] || cartItem.quantity}
                onQuantityChange={handleQuantityChange}
                onRemove={handleRemove}
              />
            ))}
          </div>
          <div className="flex justify-end">
            <button
              onClick={handleUpdateCartClick}
              className="px-6 py-1 bg-blue-500 rounded-md hover:bg-blue-600 "
            >
              UpdateCart
            </button>
          </div>
          {/* <Dummydown updateCart={handleUpdateCartClick} /> */}
        </>
      )}
    </>
  );
}
export default withCart(Dummy1);
