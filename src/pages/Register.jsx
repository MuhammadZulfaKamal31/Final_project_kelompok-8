import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { ValidationSchema } from "../helpers/RegValidation";
import axios from "axios";

const Register = () => {
  const onSubmit = async (actions) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
  };

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    isSubmitting,
  } = useFormik({
    // initialvalue
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      agreement: false,
    },
    // validation schema
    validationSchema: ValidationSchema,

    // handle submit
    onSubmit,
  });
  console.log(values);

  return (
    <div className=" flex justify-center sm:mt-0 max-[639]:mt-5 items-center h-screen bg-register">
      <div className=" bg-zinc-800 w-96 p-6 shadow-lg rounded-md">
        <h1 className="md:text-3xl sm:text-2xl max-[639px]:text-2xl font-semibold text-center">
          {" "}
          Register{" "}
        </h1>
        <hr className="mt-3 text-white"></hr>

        <form onSubmit={handleSubmit}>
          <div onSubmit={handleSubmit} className="mt-3">
            {/* username */}
            <label
              htmlFor="username"
              className="block md:text-lg sm:text-sm mb-1  text-white"
            >
              {" "}
              Username *
            </label>
            <input
              type="text"
              name="username"
              value={values.username}
              onChange={handleChange}
              onBlur={handleBlur}
              className="border w-full md:text-base sm:text-sm max-[639px]:text-sm px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600 rounded-md text-black"
              placeholder="Enter username"
              id="username"
            />
            {touched.username && errors.username && (
              <div className="errors">{errors.username}</div>
            )}

            {/* email */}
            <label
              htmlFor="email"
              className="block mt-2  md:text-lg sm:text-sm max-[639px]:text-sm mb-1  text-white"
            >
              {" "}
              Email *
            </label>
            <input
              type="text"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className="border w-full md:text-base sm:text-sm max-[639px]:text-sm px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600 rounded-md text-black"
              placeholder="Enter Email"
              id="email"
            />
            {touched.email && errors.email && (
              <div className="errors">{errors.email}</div>
            )}
            {/* pw */}
            <label
              htmlFor="password"
              className="block md:text-lg sm:text-sm max-[639px]:text-sm mt-2 mb-1  text-white"
            >
              {" "}
              Password *
            </label>
            <input
              type="Password"
              name="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              className="border  w-full md:text-base sm:text-sm max-[639px]:text-sm px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600 rounded-md text-black"
              placeholder="Enter password"
              id="password"
            />
            {touched.password && errors.password && (
              <div className="errors">{errors.password}</div>
            )}
            {/* confirm pw */}
            <label
              htmlFor="password"
              className="block mt-2 md:text-lg sm:text-sm max-[639px]:text-sm mb-1 text-white"
            >
              {" "}
              Confirm Password *
            </label>
            <input
              type="Password"
              name="confirmPassword"
              value={values.confirmPassword}
              onChange={handleChange}
              onBlur={handleBlur}
              className="border  w-full md:text-base sm:text-sm max-[639px]:text-sm px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600 rounded-md text-black"
              placeholder="Enter confirm password"
              id="confirmPassword"
            />
            {touched.confirmPassword && errors.confirmPassword && (
              <div className="errors">{errors.confirmPassword}</div>
            )}

            <div className="flex mt-3  justify-center items-center py-2 px-2 bg-red-600 rounded-2xl cursor-pointer">
              <button
                type="submit"
                disabled={isSubmitting}
                className="text-white md:text-xl sm:text-lg max-[639px]:text-lg font-semibold"
              >
                REGISTER
              </button>
            </div>
          </div>
        </form>
        <hr className=" mt-5 m-2 px-5 text-gray-900"></hr>
        <div className=" flex max-[639px]:flex-wrap  justify-center gap-4 mt-4  rounded-2xl cursor-pointer w-full">
          <div className="w-full bg-blue-500 flex justify-center items-center py-2 px-2 rounded-2xl cursor-pointer">
            <Link to="/login" type="button" className="text-white text-xl">
              Login
            </Link>
          </div>
          <div className="w-full bg-green-500 flex justify-center items-center py-2 px-2 rounded-2xl cursor-pointer text-xl">
            <Link to="/" type="button">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
