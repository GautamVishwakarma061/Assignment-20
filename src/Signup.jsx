import React from "react";
import axios from "axios";
import { withFormik } from "formik";
import { BsCart3 } from "react-icons/bs";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import Input from "./Input";

function callSignupApi(values, bag) {
  console.log(
    "sending my data",
    values.email,
    values.password,
    values.fullname
  );
  axios
    .post("https://myeasykart.codeyogi.io/signup", {
      fullName: values.fullname,
      email: values.email,
      password: values.password,
    })
    .then((response) => {
      console.log("response in signup", response.data);
      const { user, token } = response.data;
      localStorage.setItem("token", token);
      bag.props.setUser(user);
      console.log("token in signup", token);
    })
    .catch(() => {
      console.log("invalid credentials in sign up");
    });
}

const schema = Yup.object().shape({
  email: Yup.string().required().email(),
  password: Yup.string().min(6, "Must have 6 characters").required(),

  fullname: Yup.string().required(),
});

const initialValues = {
  email: "",
  password: "",
  fullname: "",
};
function Signup({
  handleSubmit,
  values,
  handleBlur,
  touched,
  errors,
  handleChange,
}) {
  return (
    <form onSubmit={handleSubmit}>
      <div className="mx-auto bg-indigo-200 border-4 border-indigo-500 rounded-md w-80 ">
        <div className="m-auto">
          <BsCart3 className="m-auto text-indigo-500 text-9xl" />
          <p className="mb-2 text-2xl text-center text-white">Sign Up</p>

          <div className="flex flex-col gap-4 ">
            <Input
              id="fullname"
              type="text"
              name="fullname"
              className="m-auto border-2 border-gray-700 rounded-md "
              placeholder="Full Name"
              values={values.fullname}
              error={errors.fullname}
              touched={touched.fullname}
              onChange={handleChange}
              onBlur={handleBlur}
            />

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
              type="password"
              name="password"
              className="m-auto border-2 border-gray-700 rounded-md "
              placeholder="Password"
              values={values.password}
              error={errors.password}
              touched={touched.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <button
              type="submit"
              className="w-20 m-auto text-white bg-indigo-500 rounded-md disabled:bg-indigo-300 "
            >
              SignUp
            </button>

            <p className="m-auto text-xl">
              Already have an account?
              <Link to="/Login" className="text-2xl text-indigo-500">
                Log In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </form>
  );
}

const myHOC = withFormik({
  validationSchema: schema,
  initialValues: initialValues,
  handleSubmit: callSignupApi,
});
const EasySignup = myHOC(Signup);

export default EasySignup;
