import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { BiMoon } from "react-icons/bi";
import { BiSun } from "react-icons/bi";
import { DataContext } from "../contextProvider/DataProvider";
import { Link, useNavigate, NavLink } from "react-router-dom";
import { privateRequest } from "../axios/RequestMethod";
import { AuthContext } from "../contextProvider/AuthContext";
import user from "../assets/user.png";

const Navbar = () => {
  const [theme, setTheme, search, setSearch] = useContext(DataContext);
  const { currentUser, setCurrentUser, ready } = useContext(AuthContext);
  const [noLogged, setNoLogged] = useState(true);

  const logout = async () => {
    try {
      await privateRequest.post("/logout");
      setCurrentUser(null);
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  const handleTheme = () => {
    setTheme(!theme);
  };
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

  console.log(ready);

  return (
    <nav
      className={`${isScroll && theme ? "bg-black shadow-md " : "bg-transparent"} w-full fixed z-50 items-center ${
        theme ? "" : " bg-slate-100"
      }`}>
      <div className="p-1 md:flex md:items-center md:justify-between ">
        <div className="flex  items-center">
          <NavLink to="/">
            <img className="h-16 inline mx-3 px-4" src="../assets/logo.png" alt="" />
          </NavLink>
          <div className=" flex px-6 gap-6">
            <NavLink
              onClick={() => setSearch("")}
              className={({ isActive }) =>
                isActive
                  ? "bg-red-900 text-xl font-medium text-white rounded-xl p-2"
                  : "text-white text-xl font-medium hover:bg-red-700 p-2 rounded-xl"
              }
              to="/">
              <span className={`${theme ? "text-white" : "text-black"}`}>HOME</span>
            </NavLink>
            <NavLink
              onClick={() => setSearch("")}
              to="/movie"
              className={({ isActive }) =>
                isActive
                  ? "bg-red-900 text-xl font-medium text-white rounded-xl p-2"
                  : "text-white text-xl font-medium hover:bg-red-700 p-2 rounded-xl"
              }>
              <span className={`${theme ? "text-white" : "text-black"}`}>MOVIES</span>
            </NavLink>
            <NavLink
              onClick={() => setSearch("")}
              to="/tv"
              className={({ isActive }) =>
                isActive
                  ? "bg-red-900 text-xl font-medium text-white rounded-xl p-2"
                  : "text-white text-xl font-medium hover:bg-red-700 p-2 rounded-xl"
              }>
              <span className={`${theme ? "text-white" : "text-black"}`}>TV SERIES</span>
            </NavLink>
          </div>
          <button className=" ml-7" onClick={() => setTheme(!theme)}>
            {theme ? <BiMoon className=" text-white w-6 h-6" /> : <BiSun className=" text-black w-6 h-6" />}
          </button>
        </div>
        <div className="md:flex md:items-center relative md:justify-between">
          <div>
            <label htmlFor="default-search" className="mb-2 text-sm text-white sr-only">
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
                  className={`relative peer z-10 bg-transparent w-12 h-12 rounded-full border-2 outline-none cursor-pointer p-3 ${
                    theme ? "text-white" : "text-black"
                  } flex item bg-center
                            focus:w-full focus:border-red-500 focus: border-spacing-3 focus:cursor-text focus:pl-14`}
                />
                <FontAwesomeIcon
                  icon={faSearch}
                  className={`h-6 w-6 absolute my-auto pl-3 inset-y-0 flex items-center focus:text-red-600 ${
                    theme ? "text-white" : "text-black"
                  }`}
                />
              </form>
            </div>
          </div>
          <div className="md:flex md:items-center px-4 md:justify-between mr-2 flex gap-x-2">
            {currentUser !== null && ready === false ? (
              <>
                <button
                  onClick={logout}
                  type="button"
                  className="text-white bg-red-700 font-medium rounded-xl px-5 py-2.5 text-lg hover:opacity-80 transition-all ease-in-out duration-75">
                  {currentUser?.username}
                </button>
                <div className=" w-10 h-10 rounded-full overflow-hidden">
                  <img src={`/assets/${currentUser?.avatar}`} alt="avatar-user" className=" w-full h-full" />
                </div>
              </>
            ) : null}
            {currentUser === null && noLogged === true && (
              <Link
                to="/login"
                type="button"
                className="text-white bg-red-700 font-medium rounded-xl px-5 py-2.5 text-lg hover:opacity-80 transition-all ease-in-out duration-75">
                SIGN IN
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
