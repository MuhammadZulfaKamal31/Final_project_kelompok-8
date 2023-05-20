import React, { useContext, useState } from "react";
import { MdFavoriteBorder } from "react-icons/md";
import { FiSettings } from "react-icons/fi";
import { BiMoon, BiLogOut, BiSun, BiSearch, BiMenu, BiX, BiHome, BiMovie, BiInfoCircle } from "react-icons/bi";
import { RiMovieFill } from "react-icons/ri";
import { DataContext } from "../../contextProvider/DataProvider";
import { Link, useNavigate, NavLink } from "react-router-dom";
import { privateRequest } from "../../axios/RequestMethod";
import { AuthContext } from "../../contextProvider/AuthContext";

const Sidebar = () => {
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
  const [open, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen(!open);
  };

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <nav
      className={`${
        isScroll && theme && !open
          ? "bg-black shadow-md shadow-black transition duration-300 ease-in"
          : "bg-transparent shadow-sm"
      } w-full fixed z-50 items-center ${
        isScroll && !theme ? "bg-white shadow-md transition duration-300 ease-in" : ""
      }`}>
      <div className="p-1 px-3 lg:px-10 flex items-center w-full gap-2 relative">
        <button onClick={toggleMenu}>
          {!open ? (
            <BiMenu className={`w-10 h-10 mt-1 ${theme ? "text-white" : "text-black"}`} />
          ) : (
            <BiX className={`w-10 h-10 mt-1 ${theme ? "text-white" : "text-black"}`} />
          )}
        </button>
        <NavLink to="/">
          <img className="h-12 lg:h-16 inline" src={`${theme? "../assets/logo.png" : "../assets/user.png"}`} alt="" />
        </NavLink>
      </div>
      <div
        className={`absolute left-0 -z-[1] border-none w-full backdrop-blur-sm bg-opacity-5 ${
          open ? "top-0 h-screen" : "bg-transparent"
        } ${!theme ? "bg-white" : "bg-black "}`}>
        {open && (
          <div className={`w-1/2 h-full py-20 px-7 ${theme ? "bg-zinc-900" : "bg-gray-50"}`}>
            <h1 className="mb-5 font-bold text-[17px]">MENU</h1>
            <div className="px-3 flex flex-col gap-5 font-semibold mb-6">
              <NavLink
                className="flex items-center gap-2"
                to="/"
                onClick={() => {
                  closeMenu();
                }}>
                <BiHome />
                Home
              </NavLink>
              <NavLink
                className="flex items-center gap-2"
                to="/movie"
                onClick={() => {
                  closeMenu();
                }}>
                <RiMovieFill />
                Movie
              </NavLink>
              <NavLink
                className="flex items-center gap-2"
                to="/tv"
                onClick={() => {
                  closeMenu();
                }}>
                <BiMovie />
                TV Series
              </NavLink>
              <NavLink
                className="flex items-center gap-2"
                to="/search"
                onClick={() => {
                  closeMenu();
                }}>
                <BiSearch />
                Search
              </NavLink>
              <NavLink
                className="flex items-center gap-2"
                to="/about"
                onClick={() => {
                  closeMenu();
                }}>
                <BiInfoCircle />
                About Us
              </NavLink>
            </div>

            {currentUser !== null ? (
              <>
                <h1 className="mb-5 font-bold text-[17px]">PERSONAL</h1>
                <div className="px-3 flex flex-col gap-5 font-semibold mb-6">
                  <NavLink
                    className="flex items-center gap-2"
                    to="/favorite"
                    onClick={() => {
                      closeMenu();
                    }}>
                    <MdFavoriteBorder />
                    Favorite
                  </NavLink>
                  <NavLink
                    className="flex items-center gap-2"
                    to="/setting"
                    onClick={() => {
                      closeMenu();
                    }}>
                    <FiSettings />
                    Setting
                  </NavLink>
                  <NavLink className="flex items-center gap-2" onClick={logout}>
                    <BiLogOut />
                    Logout
                  </NavLink>
                </div>
              </>
            ) : (
              <Link
                to="/login"
                type="button"
                className="text-[17px] text-white bg-red-600 font-medium rounded-md text-center px-3 py-1.5 w-full hover:opacity-80 transition-all ease-in-out duration-75 mb-6">
                SIGN IN
              </Link>
            )}

            <h1 className="mb-5 font-bold text-[17px]">THEME</h1>
            <span className="flex gap-3 cursor-pointer font-semibold" onClick={() => setTheme(!theme)}>
              {!theme ? (
                <BiMoon className="text-black w-6 h-6 lg:w-7 lg:h-7" />
              ) : (
                <BiSun className=" text-white w-6 h-6 lg:w-7 lg:h-7" />
              )}
              {theme ? "Light Mode" : "Dark Mode"}
            </span>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Sidebar;
