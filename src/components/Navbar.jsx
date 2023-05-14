import React, { useContext, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { BiMoon, BiMenu, BiSun, BiX } from "react-icons/bi";
import { DataContext } from "../contextProvider/DataProvider";
import { Link, useNavigate, NavLink } from "react-router-dom";

const Navbar2 = () => {
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

  const [open, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen(!open);
  };

  const closeMenu = () => {
    setOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <nav
      className={`${
        isScroll && theme
          ? "bg-black shadow-md shadow-zinc-900 transition duration-300 ease-in"
          : "bg-transparent"
      } w-full fixed z-50 items-center ${
        isScroll && !theme ? "bg-white shadow-md transition duration-300 ease-in" : ""
      }`}
    >
      <div className="p-1 flex flex-col md:flex-row md:items-center justify-between w-full">
        <div>
          <NavLink to="/">
            <img
              className="h-16 inline mx-3 md:px-4"
              src="../assets/logo.png"
              alt=""
            />
          </NavLink>
        </div>
        <div className="flex justify-between w-full">
          <div className="absolute right-4 bottom-[10px] md:hidden">
            <button onClick={toggleMenu}>
              {!open ? (
                <BiMenu
                  className={`w-10 h-10 ${theme ? "text-white" : "text-black"}`}
                />
              ) : (
                <BiX
                  className={`w-10 h-10 ${theme ? "text-white" : "text-black"}`}
                />
              )}
            </button>
          </div>

          <div
            className={`absolute z-[-1] left-0 border-none w-full transition-all duration-300 ease-linear md:flex md:items-center md:static md:z-auto md:w-auto md:pl-0 ${
              open
                ? "top-0 py-20 md:py-0 h-screen"
                : "bg-transparent bottom-[4000px]"
            } ${!theme ? "bg-white md:bg-transparent" : "bg-black"}`}
          >
            <div className="flex flex-col px-6 gap-6 md:flex-row md:items-center md:justify-between">
              <NavLink
                onClick={() => {
                  setSearch("");
                  closeMenu();
                }}
                className={({ isActive }) =>
                  isActive
                    ? "bg-[#ff0606] text-xl font-medium text-white rounded-xl p-2"
                    : "text-white text-xl font-medium hover:bg-red-700 p-2 rounded-xl"
                }
                to="/"
              >
                <span className={`${theme ? "text-white" : "text-black"}`}>
                  HOME
                </span>
              </NavLink>
              <NavLink
                onClick={() => {
                  setSearch("");
                  closeMenu();
                }}
                to="/movie"
                className={({ isActive }) =>
                  isActive
                    ? "bg-[#ff0606] text-xl font-medium text-white rounded-xl p-2"
                    : "text-white text-xl font-medium hover:bg-red-700 p-2 rounded-xl"
                }
              >
                <span className={`${theme ? "text-white" : "text-black"}`}>
                  MOVIES
                </span>
              </NavLink>
              <NavLink
                onClick={() => {
                  setSearch("");
                  closeMenu();
                }}
                to="/tv"
                className={({ isActive }) =>
                  isActive
                    ? "bg-[#ff0606] text-xl font-medium text-white rounded-xl p-2"
                    : "text-white text-xl font-medium hover:bg-red-700 p-2 rounded-xl"
                }
              >
                <span className={`${theme ? "text-white" : "text-black"}`}>
                  TV SERIES
                </span>
              </NavLink>
              <NavLink
                onClick={() => {
                  setSearch("");
                  closeMenu();
                }}
                to="/search"
                className={({ isActive }) =>
                  isActive
                    ? "bg-[#ff0606] text-xl font-medium text-white rounded-xl p-2 md:hidden"
                    : "text-white text-xl font-medium hover:bg-red-700 p-2 rounded-xl md:hidden"
                }
              >
                <span
                  className={`${theme ? "text-white" : "text-black"} md:hidden`}
                >
                  SEARCH
                </span>
              </NavLink>
              <NavLink
                onClick={() => {
                  setSearch("");
                  closeMenu();
                }}
                to="/login"
                className={({ isActive }) =>
                  isActive
                    ? "bg-[#ff0606] text-xl font-medium text-white rounded-xl p-2 md:hidden"
                    : "text-white text-xl font-medium hover:bg-red-700 p-2 rounded-xl md:hidden"
                }
              >
                <span
                  className={`${theme ? "text-white" : "text-black"} md:hidden`}
                >
                  LOGIN
                </span>
              </NavLink>
              <div className="flex flex-col gap-5 md:hidden md:flex-row md:justify-between md:items-center md:gap-0 relative">
                <div className="md:ml-2 md:flex md:items-center md:justify-between"></div>
                <button className="px-1" onClick={() => setTheme(!theme)}>
                  {theme ? (
                    <BiMoon className="text-white w-8 h-8" />
                  ) : (
                    <BiSun className=" text-black w-8 h-8" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* mobile layout hidden */}
          <div className="hidden md:flex md:items-center gap-3 relative">
            <button className="px-1" onClick={() => setTheme(!theme)}>
              {theme ? (
                <BiMoon className="text-white w-9 h-9 mt-1" />
              ) : (
                <BiSun className=" text-black w-8 h-8" />
              )}
            </button>
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
                  className={`relative z-10 bg-transparent w-64 h-12 rounded-full border-2 outline-none p-3 pl-14 focus:border-red-500 focus: border-spacing-3 focus:cursor-text focus:pl-14 ${
                    theme
                      ? "text-white border-white"
                      : "text-black border-black"
                  }`}
                />
                <FontAwesomeIcon
                  icon={faSearch}
                  className={`h-6 w-6 absolute my-auto pl-3 inset-y-0 flex items-center focus:text-red-600 ${
                    theme ? "text-white" : "text-black"
                  }`}
                />
              </form>
            </div>
            <div className="md:flex md:items-center px-4 md:justify-between">
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
      </div>
    </nav>
  );
};

export default Navbar2;
