import { useField } from "formik";
import React from "react";
import Input from "./Input";

function FormikInput({ name, ...rest }) {
  const field = useField(name);
  const [data, meta] = field;
  const { value, onBlur, onChange } = data;
  const { error, touched } = meta;
  return (
    <div>
      <Input
        onChange={onChange}
        onBlur={onBlur}
        touched={touched}
        error={error}
        value={value}
        {...rest}
      />
    </div>
  );
}

export default FormikInput;
