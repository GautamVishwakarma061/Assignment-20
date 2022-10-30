import React from "react";

function NoData() {
  return (
    <div className="flex flex-col items-center mb-8 ">
      <p className="w-40 mb-2 font-mono text-5xl text-green-500 hover:text-red-500">
        Error404 Not found!
      </p>
      <img
        className="w-7/12 "
        src="https://miro.medium.com/max/1200/1*EQisBuMOijQT8woW0Jn6pA.jpeg"
      />
    </div>
  );
}

export default NoData;
