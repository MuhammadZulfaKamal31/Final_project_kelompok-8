import React, { useContext, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { MdFavoriteBorder } from "react-icons/md";
import { FiSettings } from "react-icons/fi";
import { BiMoon, BiLogOut, BiSun, BiSearch } from "react-icons/bi";
import { DataContext } from "../../contextProvider/DataProvider";
import { Link, useNavigate, NavLink } from "react-router-dom";
import { privateRequest } from "../../axios/RequestMethod";
import { AuthContext } from "../../contextProvider/AuthContext";
// import './style/Topbar.css'

const Topbar = () => {
  const [theme, setTheme, search, setSearch] = useContext(DataContext);

  const { currentUser, setCurrentUser } = useContext(AuthContext);

  const logout = async () => {
    try {
      await privateRequest.post("/logout");
      setCurrentUser(null);
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
    setSearch("");
  };

  const [isScroll, setIsScroll] = useState(false);

  window.onscroll = () => {
    setIsScroll(window.scrollY === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  const navigate = useNavigate();
  const handleSearch = (e) => {
    const value = e.target.value;
    if (value) {
      navigate("/search", { search: search, replace: true });
    }
    setSearch(value);
  };

  const [open, setOpen] = useState(false);

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <nav
      className={`${
        isScroll && theme
          ? "bg-black shadow-md shadow-black transition duration-300 ease-in"
          : "bg-transparent shadow-sm"
      } w-full fixed z-50 items-center ${
        isScroll && !theme ? "bg-white shadow-md transition duration-300 ease-in" : ""
      }`}>
      <div className="p-1 px-3 lg:px-10 flex items-center justify-between w-full relative">
        <NavLink to="/">
          <img className="h-12 lg:h-16 inline" src="../assets/logo.png" alt="" />
        </NavLink>

        <div className="flex items-center ml-10 gap-10 text-[15px] lg:text-[18px] font-semibold">
          <NavLink
            onClick={() => {
              setSearch("");
            }}
            to="/"
            className={({ isActive }) => (isActive ? "border-red-500 border-b-2 text-red-500" : "relative nav")}>
            <span className={`nav${theme ? "text-white" : "text-black"}`}>Home</span>
          </NavLink>
          <NavLink
            onClick={() => {
              setSearch("");
            }}
            to="/movie"
            className={({ isActive }) =>
              isActive ? "border-red-500 border-b-2 text-red-500" : "relative hover:text-red-500 nav"
            }>
            <span className={`nav${theme ? "text-white" : "text-black"}`}>Movies</span>
          </NavLink>
          <NavLink
            onClick={() => {
              setSearch("");
            }}
            to="/tv"
            className={({ isActive }) =>
              isActive ? "border-red-500 border-b-2 text-red-500" : "relative hover:text-red-500 nav"
            }>
            <span className={`nav${theme ? "text-white" : "text-black"}`}>TV Series</span>
          </NavLink>
          <NavLink
            onClick={() => {
              setSearch("");
            }}
            to="/about"
            className={({ isActive }) =>
              isActive ? "border-red-500 border-b-2 text-red-500" : "relative hover:text-red-500 nav"
            }>
            <span className={`nav${theme ? "text-white" : "text-black"}`}>About Us</span>
          </NavLink>
        </div>

        <div className="flex gap-3 items-center font-semibold">
          <button className="px-1" onClick={() => setTheme(!theme)}>
            {theme ? (
              <BiSun className=" text-white w-6 h-6 lg:w-7 lg:h-7" />
            ) : (
              <BiMoon className="text-black w-6 h-6 lg:w-7 lg:h-7" />
            )}
          </button>
          <NavLink className="text-[25px] lg:text-[30px]" to="/search">
            <BiSearch className={`nav${theme ? "text-white" : "text-black"}`} />
          </NavLink>
          <div className="">
            {currentUser !== null ? (
              <>
                <div className="relative">
                  <div
                    className={`w-7 h-7 lg:w-9 lg:h-9 rounded-full overflow-hidden border ${
                      theme ? "border-gray-400" : "border-black"
                    }`}>
                    <img
                      onClick={() => setOpen(!open)}
                      src={`/assets/${currentUser?.avatar}`}
                      alt="avatar-user"
                      className="w-full h-full cursor-pointer"
                    />
                    /
                  </div>
                  {open && (
                    <div
                      className={`absolute rounded-lg w-52 -right-1 lg:-right-1 mt-2 shadow-sm ${
                        theme ? "bg-zinc-900 shadow-black" : "bg-zinc-200"
                      }`}>
                      <div className="flex px-3 items-center py-2 gap-2">
                        <div className="w-7 h-7 rounded-full overflow-hidden border border-gray-400">
                          <img src={`/assets/${currentUser?.avatar}`} alt="avatar-user" className=" w-full h-full" />
                        </div>
                        <p className={`capitalize font-bold ${theme ? "text-white" : "text-black"}`}>
                          {currentUser?.username}
                        </p>
                      </div>
                      <div className={`rounded-lg p-4 flex flex-col gap-2 ${theme ? "bg-black" : "bg-white"}`}>
                        <NavLink
                          className="flex items-center gap-2 mb-2"
                          to="/favorite"
                          onClick={() => {
                            setSearch("");
                            closeMenu();
                          }}>
                          <MdFavoriteBorder />
                          Favorite
                        </NavLink>
                        <NavLink
                          className="flex items-center gap-2 mb-2"
                          to="/setting"
                          onClick={() => {
                            setSearch("");
                            closeMenu();
                          }}>
                          <FiSettings />
                          Setting
                        </NavLink>
                        <NavLink className="flex items-center gap-2 mb-2" onClick={logout}>
                          <BiLogOut />
                          Logout
                        </NavLink>
                      </div>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <Link
                to="/login"
                type="button"
                className="text-[15px] text-white bg-red-600 font-medium rounded-md px-3 py-1 hover:opacity-80 transition-all ease-in-out duration-75">
                SIGN IN
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Topbar;
