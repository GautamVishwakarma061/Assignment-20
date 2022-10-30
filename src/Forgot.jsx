import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { AiFillUnlock } from "react-icons/ai";
import FormikInput from "./FormikInput";
import { Link } from "react-router-dom";

function Forgot() {
  function callForgotApi(values) {
    console.log(values.otp, values.email);
  }

  const schema = Yup.object().shape({
    email: Yup.string().email().required(),
    otp: Yup.string().min(6, "Must have 6 characters").required(),
  });

  const initialValues = { email: "", otp: "" };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={callForgotApi}
      validationSchema={schema}
      validateOnMount
    >
      <Form>
        <div className="flex flex-col gap-4 mx-auto bg-indigo-300 border-4 border-indigo-600 rounded-md w-80 h-96">
          <Link className="text-5xl text-indigo-500" to="/">
            ←
          </Link>
          <AiFillUnlock className="mx-auto text-center text-indigo-500 text-9xl" />

          <FormikInput
            id="email"
            type="email"
            name="email"
            placeholder="E-mail"
            className="m-auto border-2 border-gray-700 rounded-md "
          />

          <FormikInput
            id="otp"
            name="otp"
            placeholder="Enter OTP"
            className="mx-auto border-2 border-gray-500 rounded-md w-44"
          />

          <button
            type="submit"
            // disabled={!dirty || !isValid}

            className="px-2 py-1 mx-auto text-xl text-center bg-indigo-500 border-2 border-indigo-600 rounded-md disabled:bg-indigo-200"
          >
            Done
          </button>
        </div>
      </Form>
    </Formik>
  );
}
export default Forgot;
