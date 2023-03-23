import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { BiMoon } from "react-icons/bi";
import { BiSun } from "react-icons/bi";
import { DataContext } from "../contextProvider/DataProvider";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [theme, setTheme] = useContext(DataContext);

  const handleTheme = () => {
    setTheme(!theme);
  };
  return (
    <nav className="bg-transparent w-full fixed z-50 items-center">
      <div className="p-1 md:flex md:items-center md:justify-between ">
        <div className="flex  items-center">
          <button>
            <img className="h-16 inline mx-3 px-4" src="../assets/logo.png" alt="" />
          </button>
          <div className="flex px-6 gap-6">
            <a
              href="/"
              className={` ${
                theme ? " text-white" : " text-black"
              } text-xl font-medium hover:scale-90 transition hover:text-red-500`}>
              HOME
            </a>
            <a
              href="/movie"
              className={`${
                theme ? " text-white" : "text-black"
              } text-xl font-medium hover:scale-90 transition hover:text-red-500`}>
              MOVIES
            </a>
            <a
              href="/tv"
              className={`${
                theme ? " text-white" : "text-black"
              } text-xl font-medium hover:scale-90 transition hover:text-red-500`}>
              TV SERIES
            </a>
          </div>
          <button className=" ml-7" onClick={handleTheme}>
            {theme ? <BiMoon className=" text-white w-6 h-6" /> : <BiSun className=" text-black w-6 h-6" />}
          </button>
        </div>
        <div className="md:flex md:items-center relative md:justify-between">
          <div>
            <label htmlFor="default-search" className="mb-2 text-sm text-white sr-only">
              Search
            </label>
            <div className="relative">
              <div className=" absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-white">
                {/* <!-- contoh ionicon --> */}
                {/* <ion-icon name="search-outline"></ion-icon> */}
                <FontAwesomeIcon icon={faSearch} />
                {/* <!-- ionicon --> */}
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-3 pl-10 text-base text-white border border-white focus:border-spacing-1 focus:border-white rounded-3xl bg-transparent border-spacing-2"
                placeholder="Search movie"
              />
            </div>
          </div>
          <div className="md:flex md:items-center px-4 md:justify-between mr-2">
            <button
              type="button"
              className="text-white bg-red-700 font-medium rounded-xl px-5 py-2.5 text-lg hover:opacity-80 transition-all ease-in-out duration-75">
              SIGN IN
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
