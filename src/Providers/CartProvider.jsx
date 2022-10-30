import React, { useEffect, useState } from "react";
import { getCart, getProductByIds, saveCart } from "../api";
import { CartContext } from "../Context";
import Loading from "../Loading";
import { withUser } from "../withProvider";

function CartProvider({ isLoggedIn, children }) {
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]);
  useEffect(
    function () {
      if (isLoggedIn) {
        getCart().then(function (savedCart) {
          setCart(savedCart);
          setLoading(false);
        });
      } else {
        const savedDataString = localStorage.getItem("my-Cart") || "{}";
        const savedData = JSON.parse(savedDataString);
        quantityMapToCart(savedData);
        setLoading(false);
      }
    },
    [isLoggedIn]
  );

  function quantityMapToCart(quantityMap) {
    getProductByIds(Object.keys(quantityMap)).then(function (products) {
      const savedCart = products.map((p) => ({
        product: p,
        quantity: quantityMap[p.id],
      }));
      setCart(savedCart);
    });
  }

  function addToCart(productId, count) {
    const quantityMap = cart.reduce(
      (m, cartItem) => ({ ...m, [cartItem.product.id]: cartItem.quantity }),
      {}
    );

    const oldCount = quantityMap[productId] || 0;

    const newCart = { ...quantityMap, [productId]: oldCount + count };
    updateCart(newCart);
  }
  function updateCart(quantityMap) {
    if (isLoggedIn) {
      saveCart(quantityMap).then(function (response) {
        quantityMapToCart(quantityMap);
      });
    } else {
      const quantityMapString = JSON.stringify(quantityMap);
      localStorage.setItem("my-cart", quantityMapString);
      quantityMapToCart(quantityMap);
    }
  }

  const cartCount = cart.reduce(function (previous, current) {
    return previous + current.quantity;
  }, 0);
  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  return (
    <div>
      <CartContext.Provider value={{ cart, cartCount, updateCart, addToCart }}>
        {children}
      </CartContext.Provider>
    </div>
  );
}

export default withUser(CartProvider);
