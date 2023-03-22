import { useState, CSSProperties, useContext } from "react";
import FadeLoader from "react-spinners/FadeLoader";
import { DataContext } from "../contextProvider/DataProvider";

const LoadingPage = ({ loading }) => {
  const [theme] = useContext(DataContext);
  return (
    <>
      <div className={` w-full h-[calc(100vh_-_100px)]  justify-center items-center ${!theme ? "hidden" : "flex"} `}>
        <FadeLoader color="#ffff" loading />
      </div>
      <div className={` w-full h-[calc(100vh_-_100px)]   justify-center items-center ${theme ? "hidden" : "flex"} `}>
        <FadeLoader color="#161616" loading />
      </div>
    </>
  );
};

export default LoadingPage;
