import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaPlay } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, History } from "swiper";

import { filterGenreName } from "../utils/filterGenreName";
import { truncateString } from "../utils/truncateString";

import { DataContext } from "../contextProvider/DataProvider";
import { Link } from "react-router-dom";

import CircleRating from "./circle-rating/CircleRating";

const Backdrop = ({ genre, data, isLoading, isError, isFetching, error, mediaType }) => {
  const [theme, setTheme] = useContext(DataContext);

  if (isLoading || isFetching) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <div className=" w-full h-screen relative">
      <Swiper
        loop={true}
        centeredSlides={true}
        // autoplay={{
        //   delay: 4000,
        //   disableOnInteraction: false,
        // }}
        navigation={false}
        modules={[Autoplay, History]}
        className=" w-full h-screen absolute">
        {data?.results &&
          data?.results.map((el) => {
            const getGenres = filterGenreName(genre?.genres, el.genre_ids);
            return (
              <SwiperSlide className=" w-full h-screen" key={el.id}>
                <div
                  className={`
                     w-full h-screen absolute z-50 bg-gradient-to-t ${
                       theme ? "from-black" : "from-white"
                     } via-transparent to-transparent
                  `}></div>
                <div
                  className={` w-full h-screen absolute z-50 bg-gradient-to-r ${
                    theme ? "from-black" : "from-white "
                  }  to-transparent pl-52`}>
                  <div className=" h-full  max-w-[600px] flex flex-col justify-center gap-y-10">
                    <h1
                      className={`" text-[65px] leading-[75px] font-bold ${
                        theme ? "text-white" : "text-black"
                      } drop-shadow-lg"`}>
                      {el.title || el.name}
                    </h1>
                    <div className=" flex items-center gap-x-8">
                      <div className=" text-white flex items-center gap-x-4">
                        {!getGenres.length ? (
                          <span className=" h-9 flex justify-center items-center px-4 rounded-full bg-red-600">
                            Action
                          </span>
                        ) : (
                          getGenres?.slice(0, 2).map((el) => {
                            return (
                              <span className=" h-9 flex justify-center items-center px-4 rounded-full bg-red-600">
                                {el.name}
                              </span>
                            );
                          })
                        )}
                      </div>
                      <CircleRating rating={el.vote_average} textRating={el.vote_average} />
                    </div>
                    <p className={` ${theme ? "text-white" : "text-black"} drop-shadow-md`}>
                      {truncateString(el.overview, 230)}
                    </p>
                    <Link to={`/${mediaType}/${el.id}`}>
                      <button className=" w-40 h-[45px] bg-primary_button hover:bg-secondary_button transition-all ease-in-out duration-200 shadow-xl rounded-lg flex justify-center items-center gap-x-3 text-white">
                        <FaPlay />
                        <span>Watch Now</span>
                      </button>
                    </Link>
                  </div>
                </div>
                <img
                  src={`https://image.tmdb.org/t/p/original${el.backdrop_path}`}
                  alt={el.title}
                  className="  w-full"
                />
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
};

export default Backdrop;
