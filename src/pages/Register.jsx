import React, { useState } from "react";
import { Link } from "react-router-dom";
import { privateRequest } from "../axios/RequestMethod";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [register, setRegister] = useState({
    username: "",
    email: "",
    password: "",
    confPassword: "",
  });
  const [msg, setMsg] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    setRegister((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8800/register", register);
      navigate("/login");
      setRegister("");
    } catch (error) {
      console.log(error);
      setMsg(error);
    }
  };

  return (
    <div className=" flex justify-center items-center h-screen bg-black">
      <div className=" bg-zinc-800 w-96 p-6 shadow-lg rounded-md">
        <h1 className="md:text-3xl sm:text-2xl max-[639px]:text-2xl font-semibold text-center"> Register </h1>
        <hr className="mt-3 text-white"></hr>
        <form className=" w-full" onSubmit={handleSubmit}>
          <div className="mt-3">
            {/* username */}
            <label htmlFor="username" className="block md:text-base sm:text-sm mb-2  text-white">
              {" "}
              Username
            </label>
            <input
              type="text"
              className="border w-full md:text-base sm:text-sm max-[639px]:text-sm px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600 rounded-md text-black"
              placeholder="Enter username"
              name="username"
              onChange={handleChange}
              autoComplete="off"
            />
            {/* email */}
            <label htmlFor="email" className="block md:text-base sm:text-sm max-[639px]:text-sm mb-2  text-white">
              {" "}
              Email
            </label>
            <input
              type="text"
              className="border w-full md:text-base sm:text-sm max-[639px]:text-sm px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600 rounded-md text-black"
              placeholder="Enter Email"
              name="email"
              onChange={handleChange}
              autoComplete="off"
            />

            {/* pw */}
            <label
              htmlFor="password"
              className="block md:text-base sm:text-sm max-[639px]:text-sm mb-2 mt-3  text-white">
              {" "}
              Password
            </label>
            <input
              type="Password"
              className="border w-full md:text-base sm:text-sm max-[639px]:text-sm px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600 rounded-md text-black"
              placeholder="Enter password"
              name="password"
              onChange={handleChange}
              autoComplete="off"
            />
            <label
              htmlFor="password"
              className="block md:text-base sm:text-sm max-[639px]:text-sm mb-2 mt-3  text-white">
              {" "}
              Confirm Password
            </label>
            <input
              type="Password"
              className="border w-full md:text-base sm:text-sm max-[639px]:text-sm px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600 rounded-md text-black"
              placeholder="Enter password"
              name="confPassword"
              onChange={handleChange}
              autoComplete="off"
            />
          </div>

          <div className="flex mt-4 justify-center items-center p-4 bg-red-600 rounded-2xl cursor-pointer">
            <button
              className="text-white md:text-xl sm:text-lg max-[639px]:text-lg font-semibold"
              onClick={handleSubmit}>
              REGISTER
            </button>
          </div>
        </form>
        <div className="flex mt-4 justify-between items-center  rounded-2xl cursor-pointer">
          <div className="bg-blue-500 flex justify-between items-center p-4 rounded-2xl cursor-pointer ">
            <Link to="/login" type="button" className="text-white text-xl font-semibold">
              Login
            </Link>
          </div>
          <div>
            <Link
              to="/"
              type="button"
              className="bg-green-500 flex justify-between items-center p-4 rounded-2xl cursor-pointer font-semibold ">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
