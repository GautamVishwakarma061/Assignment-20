import React from "react";
import { ImSpinner9 } from "react-icons/im";

function Loading() {
  return (
    <div className="flex justify-center my-28 ">
      <ImSpinner9 className="text-orange-700 text-9xl animate-spin" />
    </div>
  );
}
export default Loading;
