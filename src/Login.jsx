import axios from "axios";
import { withFormik } from "formik";
import React from "react";
import { BsCart3 } from "react-icons/bs";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import Alert from "./Alert";
import Input from "./Input";
import { withAlert, withUser } from "./withProvider";

function callLoginApi(values, bag) {
  axios
    .post("https://myeasykart.codeyogi.io/login", {
      email: values.email,
      password: values.password,
    })
    .then((response) => {
      const { user, token } = response.data;
      localStorage.setItem("token", token);
      bag.props.setUser(user);
      bag.props.setAlert({
        type: "success",
        message: " Logged in successfully",
      });
    })
    .catch(() => {
      bag.props.setAlert({
        type: "error",
        message: "Something went wrong",
      });
    });
}

const schema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().required(),
});
const initialValues = { email: "", password: "" };

function Login({
  handleSubmit,
  values,
  handleBlur,
  touched,
  errors,
  handleChange,
  isValid,
}) {
  return (
    <form onSubmit={handleSubmit} className="mx-auto rounded-md ">
      <div className="max-w-2xl m-auto border-2 border-gray-400 rounded-lg">
        <BsCart3 className="m-auto text-indigo-500 text-9xl" />

        <h1 className="mb-2 text-2xl text-center text-indigo-500">Log In</h1>

        <div className="flex flex-col gap-4 ">
          <Input
            id="email"
            type="email"
            name="email"
            autoComplete="current-email"
            placeholder="E-mail"
            className="m-auto border-2 border-gray-700 rounded-md "
            values={values.email}
            error={errors.email}
            touched={touched.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          <Input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            placeholder="Password"
            className="m-auto border-2 border-gray-700 rounded-md "
            values={values.password}
            error={errors.password}
            touched={touched.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          <Link className="text-2xl text-center text-indigo-500" to="/Forgot">
            Forgot Password!
          </Link>

          <div className="mx-auto ">
            <button
              type="submit"
              disabled={!isValid}
              className="w-20 m-auto text-white bg-indigo-500 rounded-md disabled:bg-indigo-300"
            >
              Log In
            </button>
            <Alert />
          </div>
          <div>
            <p>Don't have account?</p>
            <Link className="text-indigo-500" to="/SignUp">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </form>
  );
}
const myHOC = withFormik({
  validationSchema: schema,
  initialValues: initialValues,
  handleSubmit: callLoginApi,
  validationOnMount: true,
});
const EasyLogin = myHOC(Login);
export default withAlert(withUser(EasyLogin));

//changes
