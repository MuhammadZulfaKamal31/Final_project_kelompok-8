import React, { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { privateRequest } from "../axios/RequestMethod";
import { AuthContext } from "../contextProvider/AuthContext";
import Validation from "../helpers/LoginValidation";
import ClipLoader from "react-spinners/ClipLoader";

const Login = () => {
  const { setCurrentUser } = useContext(AuthContext);
  const [redirect, setRedirect] = useState(false);
  const [loading, setLoading] = useState(false);
  const [login, setLogin] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [msg, setMsg] = useState(null);

  const handleChange = (e) => {
    setLogin((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors(Validation(login));
    setLoading(true);
    try {
      const { data } = await privateRequest.post("/login", login);
      setCurrentUser(data);
      setLoading(false);
      setRedirect(true);
      setLogin("");
    } catch (error) {
      setLoading(false);
      setMsg(error.response.data);
    }
  };

  if (redirect) {
    return <Navigate to={"/"} />;
  }
  return (
    <div className="flex justify-center items-center h-screen bg-register">
      <div className=" bg-zinc-800 w-96 absolute z-50 p-6 shadow-lg rounded-md">
        <h1 className="text-3xl block font-semibold text-center"> Login </h1>
        <hr className="mt-3 text-white"></hr>
        <div className=" w-full flex items-center justify-center text-red-600">
          {msg !== null && <span>*{msg}</span>}
        </div>
        <form className=" w-full" onSubmit={handleSubmit}>
          <div className={`${msg === null && "mt-3"} `}>
            <label htmlFor="username" className="block text-base mb-2  text-white">
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
            <label htmlFor="password" className="block text-base mb-2 mt-3  text-white">
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
            {errors.password && <span className="errors">{errors.password}</span>}
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
          <div className="flex mt-5 justify-center items-center py-2 px-2 bg-red-600 rounded-2xl rounded-md hover:opacity-80 transition-all ease-in-out duration-75">
            <button
              type="submit"
              className="text-white md:text-xl sm:text-lg max-[639px]:text-lg"
              onClick={handleSubmit}>
              {loading ? <ClipLoader color="#ffff" size={24} /> : "Login"}
            </button>
          </div>
        </form>
        <div className="flex mt-5 justify-center items-center py-2 px-2 bg-blue-400 rounded-2xl rounded-md hover:opacity-80 transition-all ease-in-out duration-75">
          <Link to="/register" type="button" className="text-white md:text-xl sm:text-lg max-[639px]:text-lg">
            REGISTER
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
