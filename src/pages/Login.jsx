import React, { useContext, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { privateRequest } from "../axios/RequestMethod";
import { AuthContext } from "../contextProvider/AuthContext";

const Login = () => {
  const { currentUser, setCurrentUser } = useContext(AuthContext);
  const [redirect, setRedirect] = useState(false);
  const [login, setLogin] = useState({
    username: "",
    password: "",
  });
  const [msg, setMsg] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    setLogin((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await privateRequest.post("/login", login);
      setCurrentUser(data);
      setRedirect(true);
      setLogin("");
    } catch (error) {
      console.log(error);
      setMsg(error);
    }
  };

  if (redirect) {
    return <Navigate to={"/"} />;
  }
  return (
    <div className="flex justify-center items-center h-screen bg-login">
      <div className=" bg-zinc-800 w-96 p-6 shadow-lg rounded-md">
        <h1 className="text-3xl block font-semibold text-center"> Login </h1>
        <hr className="mt-3 text-white"></hr>
        <form className=" w-full" onSubmit={handleSubmit}>
          <div className="mt-3">
            <label
              htmlFor="username"
              className="block text-base mb-2  text-white"
            >
              {" "}
              Username
            </label>
            <input
              type="text"
              className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600 rounded-md text-black"
              placeholder="Enter username"
              name="username"
              onChange={handleChange}
              autoComplete="off"
            />
            <label
              htmlFor="password"
              className="block text-base mb-2 mt-3  text-white"
            >
              {" "}
              Password
            </label>
            <input
              type="Password"
              className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600 rounded-md text-black"
              placeholder="Enter password"
              name="password"
              onChange={handleChange}
              autoComplete="off"
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
          <div className="flex mt-5 justify-center items-center py-2 px-2 bg-red-600 rounded-2xl cursor-pointer">
            <button
              type="submit"
              className="text-white md:text-xl sm:text-lg max-[639px]:text-lg"
              onClick={handleSubmit}
            >
              Login
            </button>
          </div>
        </form>

        <div className="flex mt-5 justify-center items-center py-2 px-2 bg-blue-400 rounded-2xl cursor-pointer">
          <Link
            to="/register"
            type="button"
            className="text-white md:text-xl sm:text-lg max-[639px]:text-lg"
          >
            REGISTER
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
