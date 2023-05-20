import React, { useContext } from "react";
import { DataContext } from "../contextProvider/DataProvider";
import { Link } from "react-router-dom";
import unauthorizedImg from "../assets/unathorized.png";
import { MdOutlineClose } from "react-icons/md";


export const Modal = ({ open, onClose }) => {
  const [theme] = useContext(DataContext);
  return (
    // Backdrop
    <div
      onClick={onClose}
      className={` ${
        open ? "visible bg-black/60" : "invisible"
      } fixed inset-0 flex justify-center items-center transition-colors z-50 shadow-xl`}>
      {/* Modal */}
      <div className={`lg:w-[38%] lg:h-[70%] md:w-[60%] md:h-[80%] w-[70%] h-[60%] rounded-md mt-7 flex flex-col items-center justify-center gap-y-5 relative ${theme? "bg-zinc-900" : "bg-slate-200"}`}>
        <button className="w-10 h-10 absolute top-2 right-2" onClick={onClose}>
          <MdOutlineClose className={`w-full h-full ${theme? "text-white" : "text-dark"}`} />
        </button>
        <img src={unauthorizedImg} alt="unauthorized-img" className=" w-72 h-52" />
        <h1 className=" lg:text-3xl text-2xl text-center">
          Unauthorized <span className=" font-semibold text-red-600">401</span>
        </h1>
        <p className=" lg:text-lg text-sm text-center">
          Sorry, but you must be logged in to proceed further. Please{" "}
          <Link className=" text-red-600 font-medium hover:underline" to={"/login"}>
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};
