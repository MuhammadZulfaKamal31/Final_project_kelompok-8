import React from "react";

import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <div className=" bg-zinc-800 w-96 p-6 shadow-lg rounded-md">
        <h1 className="text-3xl block font-semibold text-center"> Login </h1>
        <hr className="mt-3 text-white"></hr>
        <div className="mt-3">
          <label for="username" className="block text-base mb-2  text-white">
            {" "}
            Username
          </label>
          <input
            type="text"
            className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600 rounded-md text-black"
            placeholder="Enter username"
            id="username"
          />
          <label for="password" className="block text-base mb-2 mt-3  text-white">
            {" "}
            Password
          </label>
          <input
            type="Password"
            className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600 rounded-md text-black"
            placeholder="Enter password"
            id="password"
          />
        </div>
        <div className="mt-3 mb-2 flex justify-between items-center">
          <div>
            <input type="checkbox" className="cursor-pointer" />
            <label htmlFor="remember" className="ml-2  text-white">
              Remember me
            </label>
          </div>
          <div>
            <Link className="text-gray-600"> forgot password?</Link>
          </div>
        </div>
        <div className="flex mt-4 justify-center items-center p-4 bg-red-600 rounded-2xl cursor-pointer">
          <button className="text-white text-xl font-semibold">SIGN IN</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
