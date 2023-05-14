import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="md:flex bg-[rgb(19,19,19)] w-full justify-between p-5 align-middle font-semibold">
        <div className="flex items-center justify-center p-5">
          <img src="../assets/logo.png" className="h-[80px] " alt="" />
        </div>
        <div className="flex items-center justify-center gap-3 text-white p-5">
          <a href="/" className=" hover:bg-red-900 p-2 rounded-lg">
            Home
          </a>
          <a href="/" className="hover:bg-red-900 p-2 rounded-lg">
            Movies
          </a>
          <a href="/" className="hover:bg-red-900 p-2 rounded-lg">
            TV Series
          </a>
          <a href="/" className="hover:bg-red-900 p-2 rounded-lg">
            Search
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
