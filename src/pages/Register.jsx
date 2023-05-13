import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className=" flex justify-center items-center h-screen bg-black">
      <div className=" bg-zinc-800 w-96 p-6 shadow-lg rounded-md">
        <h1 className="md:text-3xl sm:text-2xl max-[639px]:text-2xl font-semibold text-center">
          {" "}
          Register{" "}
        </h1>
        <hr className="mt-3 text-white"></hr>
        <div className="mt-3">
          {/* username */}
          <label
            htmlFor="username"
            className="block md:text-base sm:text-sm mb-2  text-white"
          >
            {" "}
            Username
          </label>
          <input
            type="text"
            className="border w-full md:text-base sm:text-sm max-[639px]:text-sm px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600 rounded-md text-black"
            placeholder="Enter username"
            id="username"
          />
          {/* email */}
          <label
            htmlFor="email"
            className="block md:text-base sm:text-sm max-[639px]:text-sm mb-2  text-white"
          >
            {" "}
            Email
          </label>
          <input
            type="text"
            className="border w-full md:text-base sm:text-sm max-[639px]:text-sm px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600 rounded-md text-black"
            placeholder="Enter Email"
            id="email"
          />

          {/* pw */}
          <label
            htmlFor="password"
            className="block md:text-base sm:text-sm max-[639px]:text-sm mb-2 mt-3  text-white"
          >
            {" "}
            Password
          </label>
          <input
            type="Password"
            className="border w-full md:text-base sm:text-sm max-[639px]:text-sm px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600 rounded-md text-black"
            placeholder="Enter password"
            id="password"
          />
        </div>

        <div className="flex mt-4 justify-center items-center p-4 bg-red-600 rounded-2xl cursor-pointer">
          <button className="text-white md:text-xl sm:text-lg max-[639px]:text-lg font-semibold">
            REGISTER
          </button>
        </div>
        <div className="flex mt-4 justify-between items-center  rounded-2xl cursor-pointer">
          <div className="bg-blue-500 flex justify-between items-center p-4 rounded-2xl cursor-pointer ">
            <Link
              to="/login"
              type="button"
              className="text-white text-xl font-semibold"
            >
              Login
            </Link>
          </div>
          <div>
            <Link
              to="/"
              type="button"
              className="bg-green-500 flex justify-between items-center p-4 rounded-2xl cursor-pointer font-semibold "
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
