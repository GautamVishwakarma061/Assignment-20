import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

function Hemburger() {
  const [menu, setMenu] = useState(false);
  function handleMenuClick() {
    setMenu(!menu);
  }
  return (
    <>
      <div>
        <div className="flex gap-1">
          <GiHamburgerMenu
            onClick={handleMenuClick}
            className="text-3xl text-bold "
          />

          {menu && (
            <div className="flex items-start justify-start">
              <Link className="pr-4 text-2xl" to="/">
                <FaHome />
              </Link>
              <Link className="pr-4 text-xl" to="/login">
                LOG IN
              </Link>
              <Link className="text-xl" to="/signup">
                SIGN UP
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
export default Hemburger;
