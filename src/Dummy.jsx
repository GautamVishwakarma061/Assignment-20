// CartPage
import React from "react";
import { Link } from "react-router-dom";
import Coupan from "./Coupan";
import CartTotal from "./CartTotal";
import Dummytop from "./Dummytop";
import Dummy1 from "./Dummy1";
import { withCart } from "./withProvider";

function Dummy() {
  return (
    <>
      <Link to="/cart"></Link>
      <div>
        <div className="ml-20">
          <Dummytop />
          <div className="flex flex-col h-full max-w-4xl p-2 bg-gray-200">
            <div className="p-4 my-2 bg-white rounded-lg">
              <Dummy1 />
              <Coupan />
              <CartTotal />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default withCart(Dummy);
