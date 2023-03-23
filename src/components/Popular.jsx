import React from "react";
import { images } from "../images";

const Popular = () => {
  return (
    <>
      <div className="mx-24 flex flex-col gap-y-18">
        <div className="">
          <h1 className="mb-8 text-2xl font-semibold text-white">
            <span className="underline decoration-red-600 decoration-4 underline-offset-8">POPULAR</span> MOVIES
          </h1>

          <div className="container items-center flex gap-x-5">
            <div className=" p-2 w-60 shadow-md rounded-xl h-[350px]">
              <picture className="rounded-md overflow-hidden inline-block">
                <img className="hover:scale-125 ease-in duration-300" src={images.popularMovie1} alt="Avengers" />
              </picture>
            </div>
            <div className="p-2 w-60 shadow-md rounded-xl h-[350px]">
              <picture className="rounded-md overflow-hidden inline-block">
                <img className="hover:scale-125 ease-in duration-300" src={images.popularMovie2} alt="Avengers" />
              </picture>
            </div>
            <div className="p-2 w-60  shadow-md rounded-xl h-[350px]">
              <picture className="rounded-md overflow-hidden inline-block">
                <img className="hover:scale-125 ease-in duration-300" src={images.popularMovie3} alt="Avengers" />
              </picture>
            </div>
            <div className="p-2 w-60  shadow-md rounded-xl h-[350px]">
              <picture className="rounded-md overflow-hidden inline-block">
                <img className="hover:scale-125 ease-in duration-300" src={images.popularMovie4} alt="Avengers" />
              </picture>
            </div>
            <div className="p-2 w-60  shadow-md rounded-xl h-[350px]">
              <picture className="rounded-md overflow-hidden inline-block">
                <img className="hover:scale-125 ease-in duration-300" src={images.popularMovie5} alt="Avengers" />
              </picture>
            </div>
          </div>
        </div>
        {/* <!--Popular Movies End  --> */}
        {/* 
      <!--Popular Series start  --> */}
        <div className="">
          <h1 className="mb-8 text-2xl font-semibold text-white">
            <span className="underline decoration-red-600 decoration-4 underline-offset-8">POPULAR</span> SERIES
          </h1>

          <div className="container items-center content-center flex gap-x-5">
            <div className="p-2 w-60  shadow-md rounded-xl h-[350px]">
              <picture className="rounded-md overflow-hidden inline-block">
                <img className="hover:scale-125 ease-in duration-300" src={images.popularSeries1} alt="Avengers" />
              </picture>
            </div>
            <div className="p-2 w-60  shadow-md rounded-xl h-[350px]">
              <picture className="rounded-md overflow-hidden inline-block">
                <img className="hover:scale-125 ease-in duration-300" src={images.popularSeries2} alt="Avengers" />
              </picture>
            </div>
            <div className="p-2 w-60  shadow-md rounded-xl h-[350px]">
              <picture className="rounded-md overflow-hidden inline-block">
                <img className="hover:scale-125 ease-in duration-300" src={images.popularSeries3} alt="Avengers" />
              </picture>
            </div>
            <div className="p-2 w-60  shadow-md rounded-xl h-[350px]">
              <picture className="rounded-md overflow-hidden inline-block">
                <img className="hover:scale-125 ease-in duration-300" src={images.popularSeries4} alt="Avengers" />
              </picture>
            </div>
            <div className="p-2 w-60  shadow-md rounded-xl h-[350px]">
              <picture className="rounded-md overflow-hidden inline-block">
                <img className="hover:scale-125 ease-in duration-300" src={images.popularSeries5} alt="Avengers" />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Popular;
