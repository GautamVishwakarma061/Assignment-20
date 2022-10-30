import React from 'react';

function NoMatching() {
  return( 
    <>
      <div className="flex flex-col m-2 grow">
<div className="justify-center flex text-red-700 font-bold  text-xl">Product Not Found !</div>
    <span className="justify-center flex font-bold text-sm ">Try Searching Something Else</span>
  </div>
      
    </>
  )
};
export default NoMatching;