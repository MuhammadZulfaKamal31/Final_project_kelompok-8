import React, { useContext } from "react";
import { DataContext } from "../contextProvider/DataProvider";
import Watching from "../assets/family_watching_tv.jpg";
import Dev from "../hooks/data-json/dev.json";

const About = () => {
  const [theme] = useContext(DataContext);
  return (
    <div className="w-full h-full">
      <div
        className={`w-full h-[70vh] md:h-screen relative ${
          theme ? "bg-about-dark" : "bg-about-light"
        }`}
      >
        <div
          className={`w-full md:h-screen h-screen absolute bottom-0 z-30 bg-gradient-to-t ${
            theme ? "from-black" : "from-white"
          } via-transparent to-transparent`}
        ></div>
        <div
          className={`w-full flex flex-col items-center justify-center px-4 md:px-10 lg:px-44 h-[70vh] md:h-screen absolute z-40 ${
            theme ? "text-white" : "text-black"
          }`}
        >
          <h1 className="lg:text-[62px] md:text-[49px] text-[30px] lg:leading-[75px] font-bold mb-2">
            About Us
          </h1>
          <p className="text-[15px] text-base text-center drop-shadow-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            efficitur ultricies libero, at interdum purus vulputate id. Donec
            convallis tincidunt dui.
          </p>
        </div>
      </div>

      <div className="w-full h-full md:px-12 py-16">
        <div className="text-center">
          <h1 className="text-[30px] lg:leading-[75px] font-bold underline decoration-red-600 decoration-4 underline-offset-8 mb-5">
            FIBRA MOVIE
          </h1>
          <p className="text-[15px] text-base text-justify drop-shadow-md px-4 md:px-10 lg:px-44 mb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            efficitur ultricies libero, at interdum purus vulputate id. Donec
            convallis tincidunt dui, eu placerat urna lacinia ac. Sed hendrerit
            mi vitae nisl volutpat, in mollis sem euismod. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Proin efficitur ultricies libero,
            at interdum purus vulputate id. Donec convallis tincidunt dui, eu
            placerat urna lacinia ac. Sed hendrerit mi vitae nisl volutpat, in
            mollis sem euismod.
          </p>
          <p className="text-[15px] text-base text-justify drop-shadow-md px-4 md:px-10 lg:px-44 mb-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            efficitur ultricies libero, at interdum purus vulputate id. Donec
            convallis tincidunt dui, eu placerat urna lacinia ac. Sed hendrerit
            mi vitae nisl volutpat, in mollis sem euismod. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Proin efficitur ultricies libero,
            at interdum purus vulputate id. Donec convallis tincidunt dui,
          </p>
        </div>
      </div>

      <div
        className={`w-full h-full bg-transparent ${
          theme ? "md:bg-zinc-900" : "md:bg-zinc-200"
        }`}
      >
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0 w-full">
            <img src={Watching} alt="" className="bg-cover" />
          </div>
          <div className="w-full md:w-2/3">
            <div className="px-4 md:px-16">
              <h1 className="text-[30px] lg:leading-[75px] font-bold">
                Why Fibra Movie ?
              </h1>
              <p className="text-[15px] text-base text-justify drop-shadow-md mb-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                efficitur ultricies libero, at interdum purus vulputate id.
                Donec convallis tincidunt dui, eu placerat urna lacinia ac. Sed
                hendrerit mi vitae nisl volutpat, in mollis sem euismod. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Proin
                efficitur ultricies libero, at interdum purus vulputate id.
                Donec convallis tincidunt dui,
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-full md:px-12 py-16">
        <p className="md:text-[26px] text-2xl font-bold mb-5 uppercase">
          Developer
        </p>
        <div className="grid grid-cols-5 gap-5">
          {Dev.map(({ name, profile }, i) => (
            <div tabIndex={1} className="h-full relative">
              <div className="absolute z-10 w-full h-full">
                <div className="w-full h-[80%] bg-transparent"></div>
                <div className="w-[225px] h-[20%] bg-black/60 flex justify-center items-center">
                  <h1 className=" font-semibold text-white">{name}</h1>
                </div>
              </div>
              <img src={profile} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
