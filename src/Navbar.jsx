import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import Hemburger from "./Hemburger";
import { FaHome } from "react-icons/fa";
import { withCart, withUser } from "./withProvider";

function Navbar({ user, handleLogout, cartCount }) {
  return (
    <>
      <div className="border-b-2 ">
        {user && (
          <div className="text-xl font-semibold">
            Welcome -{user.full_name.toUpperCase()}
          </div>
        )}
        <div className="gap-2 bg-white ">
          <div className="block sm:hidden ">
            <Hemburger />
          </div>
          <div className="flex justify-end invisible gap-2 sm:visible">
            <div>
              <Link className="text-2xl" to="/">
                <FaHome />
              </Link>
            </div>
            <div>
              <Link className="ml-2 text-xl " to="/login">
                LOGIN
              </Link>
            </div>
            <div>
              <Link className="ml-2 text-xl" to="/signup">
                SIGNUP
              </Link>
            </div>
          </div>
          <div className="flex justify-between max-w-4xl ml-16 bg-white">
            <div>
              <img
                src="https://media.discordapp.net/attachments/1001667010620559443/1009337374125326366/unknown.png?"
                className="w-24"
              />
            </div>
            <Link to="/cart">
              <div className="flex flex-col items-center">
                <FiShoppingCart className="text-4xl text-red-500" />
                <span className="-m-8"> {cartCount}</span>
              </div>
            </Link>
          </div>
          <div className="flex justify-end ">
            {/* <div>welcome,{user.full_name}</div> */}
            {user && (
              <button onClick={handleLogout}>
                <p className="px-1 bg-orange-500 rounded-md hover:text-white ">
                  Log out
                </p>
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default withUser(withCart(Navbar));
