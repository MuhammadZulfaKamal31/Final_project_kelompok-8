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
          Immerse yourself in the captivating realm of cinema at Fabira Movie's digital stage, where cinematic beauty breathes life into enchanting tales with unforgettable charm!
          </p>
        </div>
      </div>

      <div className="w-full h-full md:px-12 py-16">
        <div className="text-center">
          <h1 className="text-[30px] lg:leading-[75px] font-bold underline decoration-red-600 decoration-4 underline-offset-8 mb-5">
            FABIRA MOVIE
          </h1>
          <p className="text-[15px] text-base text-justify drop-shadow-md px-4 md:px-10 lg:px-52 mb-5 indent-4">
          Welcome to Fabira Movie, the digital stage where extraordinary cinematic experiences come to life. We are the ultimate destination for film enthusiasts seeking a new and exciting way to explore the world of cinema. With our vast collection of films spanning various genres, we are committed to providing captivating and inspiring entertainment.
          </p>
          <p className="text-[15px] text-base text-justify drop-shadow-md px-4 md:px-10 lg:px-52 mb-5">
          At Fabira Movie, we understand the profound impact of films in evoking emotions, sparking thoughts, and igniting the imagination. Our mission is to deliver unforgettable stories that seamlessly blend breathtaking cinematography with compelling narratives. Using the latest technology, we offer stunning online viewing experiences with the highest quality of visuals and sound, ensuring a truly immersive and satisfying encounter for our users.
          </p>
          <p className="text-[15px] text-base text-justify drop-shadow-md px-4 md:px-10 lg:px-52 mb-5">
          We believe that film is a universal language that transcends boundaries and connects people from all walks of life. With this belief, we strive to cultivate an active and passionate community around Fabira Movie, where film lovers can come together to share, discuss, and indulge in the magic of cinema. Join us today and embark on an unforgettable journey through the limitless world of film.
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
            <div className="px-5 lg:px-16">
              <h1 className="text-[25px] lg:leading-[75px] font-bold">
                Why Fabira Movie ?
              </h1>
              <p className="text-[15px] text-base text-justify drop-shadow-md mb-2">
              Active and Enthusiastic Community: Joining Fabira Movie means becoming a part of an active and enthusiastic community of film enthusiasts. You can interact with fellow users, share perspectives, recommend films, and engage in discussions on fascinating topics related to the world of cinema. Experience the camaraderie with like-minded individuals, broaden your horizons, and forge deeper connections through a shared love for films.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-full px-4 md:px-12 py-16">
        <p className="md:text-[26px] text-2xl font-bold mb-10 uppercase text-center underline decoration-red-600 decoration-4 underline-offset-8">
          Our Team
        </p>
        <div className="grid grid-cols-4 lg:grid-cols-8 gap-4">
          {Dev.map(({ name, profile }, i) => (
            <div tabIndex={1}>
              <img src={profile} alt="" className="w-28 h-28 flex m-auto rounded-full bg-cover mb-3"/>
              <p className="text-[15px] font-semibold text-center capitalize">{name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
