import React, { useEffect } from "react";
import { BsCheckSquareFill } from "react-icons/bs";
import { VscError } from "react-icons/vsc";
import { AiFillWarning } from "react-icons/ai";
import { withAlert } from "./withProvider";
const themeMap = {
  success: {
    color: "bg-green-300 border-green-600 text-white",
    color1: "border-green-700",
    Icon: BsCheckSquareFill, //change
  },
  error: {
    color: "bg-red-300 border-red-600 text-white",
    color1: "border-red-700",
    Icon: VscError,
  },
  warning: {
    color: "bg-yellow-300 border-yellow-600 text-white",
    color1: "border-yellow-700",
    Icon: AiFillWarning,
  },
};

function Alert({ alert, removeAlert }) {
  useEffect(
    function () {
      if (alert) {
        const Timeout = setTimeout(removeAlert, 3 * 1000);
        return function () {
          clearTimeout(Timeout);
        };
      }
    },
    [alert]
  );

  if (!alert) {
    return <></>;
  }

  const { message, type } = alert;
  const { color, color1, Icon } = themeMap[type];

  return (
    <div className="">
      <div
        className={
          " flex items-center px-2 py-1 border-2 border-gray-400 rounded-md bg-gray-100 justify-between " +
          color1
        }
      >
        <div className="flex items-center">
          <div className={" px-1 py-1 rounded-md " + color}>
            <Icon />
          </div>
          <h1
            className={
              "border-white border-2 px-1 py-1 rounded-md text-xs font-black " +
              color
            }
          >
            <div className="flex items-center gap-1">
              <div className="text-black"> {type}:</div> <div>{message}</div>
            </div>
          </h1>
        </div>
        <div>
          <button
            onClick={removeAlert}
            className="px-2 text-xs bg-blue-400 rounded-md "
          >
            Dismiss
          </button>
        </div>
      </div>
    </div>
  );
}

export default withAlert(Alert);
