import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { BiMoon } from "react-icons/bi";
import { BiSun } from "react-icons/bi";
import { DataContext } from "../contextProvider/DataProvider";
import { Link, useNavigate, NavLink } from "react-router-dom";

const Navbar = () => {
  const [theme, setTheme, search, setSearch] = useContext(DataContext);

  const [isScroll, setIsScroll] = useState(false);
  window.onscroll = () => {
    setIsScroll(window.scrollY === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  const navigate = useNavigate();
  console.log(search);
  const handleSearch = (e) => {
    const value = e.target.value;
    if (value) {
      navigate("/search", { search: search, replace: true });
    }
    setSearch(value);
  };

  const handleTheme = () => {
    setTheme(!theme);
  };
  return (
    <nav
      className={`${
        isScroll ? "bg-black shadow-md " : "bg-transparent"
      } w-full fixed z-50 items-center`}
    >
      <div className="p-1 md:flex md:items-center md:justify-between ">
        <div className="flex  items-center">
          <NavLink to="/">
            <img
              className="h-16 inline mx-3 px-4"
              src="../assets/logo.png"
              alt=""
            />
          </NavLink>
          <div className=" flex px-6 gap-6">
            <NavLink
              onClick={() => setSearch("")}
              className={({ isActive }) =>
                isActive
                  ? "bg-red-900 text-xl font-medium text-white rounded-xl p-2"
                  : "text-white text-xl font-medium hover:bg-red-700 p-2 rounded-xl"
              }
              to="/"
            >
              HOME
            </NavLink>
            <NavLink
              onClick={() => setSearch("")}
              to="/movie"
              className={({ isActive }) =>
                isActive
                  ? "bg-red-900 text-xl font-medium text-white rounded-xl p-2"
                  : "text-white text-xl font-medium hover:bg-red-700 p-2 rounded-xl"
              }
            >
              MOVIES
            </NavLink>
            <NavLink
              onClick={() => setSearch("")}
              to="/tv"
              className={({ isActive }) =>
                isActive
                  ? "bg-red-900 text-xl font-medium text-white rounded-xl p-2"
                  : "text-white text-xl font-medium hover:bg-red-700 p-2 rounded-xl"
              }
            >
              TV SERIES
            </NavLink>
          </div>
          <button className=" ml-7" onClick={handleTheme}>
            {theme ? (
              <BiMoon className=" text-white w-6 h-6" />
            ) : (
              <BiSun className=" text-black w-6 h-6" />
            )}
          </button>
        </div>
        <div className="md:flex md:items-center relative md:justify-between">
          <div>
            <label
              htmlFor="default-search"
              className="mb-2 text-sm text-white sr-only"
            >
              Search
            </label>
            <div className="relative">
              <form action="" className="relative w-max mx-auto">
                <input
                  type="search"
                  value={search}
                  onChange={handleSearch}
                  name="search"
                  id="default-search"
                  className=" relative peer z-10 bg-transparent w-12 h-12 rounded-full border-2 outline-none cursor-pointer p-3 text-white flex item bg-center
                            focus:w-full focus:border-red-500 focus: border-spacing-3 focus:cursor-text focus:pl-14"
                />
                <FontAwesomeIcon
                  icon={faSearch}
                  className="h-6 w-6 absolute my-auto pl-3 inset-y-0 flex items-center text-white focus:text-red-600"
                />
              </form>
            </div>
          </div>
          <div className="md:flex md:items-center px-4 md:justify-between mr-2">
            <Link
              to="/login"
              type="button"
              className="text-white bg-red-700 font-medium rounded-xl px-5 py-2.5 text-lg hover:opacity-80 transition-all ease-in-out duration-75"
            >
              SIGN IN
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
