import { Link } from "react-router-dom";
import unauthorizedImg from "../assets/unathorized.png";
import { MdOutlineClose } from "react-icons/md";

export const Modal = ({ open, onClose }) => {
  return (
    // Backdrop
    <div
      onClick={onClose}
      className={` ${
        open ? "visible bg-black/60" : "invisible"
      } fixed inset-0 flex justify-center items-center transition-colors z-50 shadow-xl`}>
      {/* Modal */}
      <div className=" lg:w-[38%] lg:h-[70%] md:w-[60%] md:h-[80%] w-[70%] h-[60%] bg-zinc-900 mt-7 flex flex-col items-center justify-center gap-y-5 relative">
        <button className=" text-white w-10 h-10 absolute top-0 right-0" onClick={onClose}>
          <MdOutlineClose className=" w-full h-full" />
        </button>
        <img src={unauthorizedImg} alt="unauthorized-img" className=" w-72 h-52" />
        <h1 className=" lg:text-3xl text-2xl">
          Unauthorized <span className=" font-semibold text-red-600">401</span>
        </h1>
        <p className=" lg:text-lg text-sm">
          Sorry, but you must be logged in to proceed further. Please{" "}
          <Link className=" text-red-600 font-medium" to={"/login"}>
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};
