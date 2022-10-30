import React from "react";

function Input({ label, id, name, className, touched, error, ...rest }) {
  let borderClass = "";
  if (error && touched) {
    borderClass = "border-red-500";
  }
  return (
    <div className="flex flex-col items-center justify-center">
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <input id={id} name={name} {...rest} className={"rounded-md"} />
      {touched && error && <div className="text-red-500">{error}</div>}
    </div>
  );
}

export default Input;
