import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaPlay } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, History } from "swiper";

import { filterGenreName } from "../utils/filterGenreName";
import { truncateString } from "../utils/truncateString";

import { DataContext } from "../contextProvider/DataProvider";
import { Link } from "react-router-dom";
import LoadingPage from "../pages/LoadingPage";

import placeholderBackdrop from "../assets/placeholder-backdrop.png";

import CircleRating from "./circle-rating/CircleRating";

const Backdrop = ({ genre, data, isLoading, isError, isFetching, error, mediaType }) => {
  const [theme, setTheme] = useContext(DataContext);

  if (isLoading || isFetching) {
    return <LoadingPage loading={isLoading} />;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <div className=" w-full md:h-screen h-[70vh] relative">
      <Swiper
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        navigation={false}
        modules={[Autoplay, History]}
        className=" w-full md:h-screen h-full absolute">
        {data?.results &&
          data?.results.map((el, i) => {
            //karena errornya adalah key harus unik, karena genre_ids itu isinya array dan menerima parameter id
            // maka lebih cocok i sebegai objeknya karena melakukan looping secara berurutan
            const getGenres = filterGenreName(genre?.genres, i.genre_ids);
            return (
              <SwiperSlide className=" w-full md:h-screen" key={i}>
                <div
                  className={`
                      w-full md:h-screen h-full absolute z-50 bg-gradient-to-t ${
                        theme ? "from-black" : "from-white"
                      } via-transparent to-transparent
                  `}></div>
                <div
                  className={` w-full md:h-screen h-full absolute z-50 bg-gradient-to-r ${
                    theme ? "from-black" : "from-white "
                  }  to-transparent lg:pl-52 md:pl-16 md:pr-0 px-5`}>
                  <div className=" h-full  max-w-[600px] lg:pt-10 flex flex-col justify-center md:gap-y-10 gap-y-6">
                    <h1
                      className={`" lg:text-[62px] md:text-[49px] text-[30px] lg:leading-[75px] font-bold ${
                        theme ? "text-white" : "text-black"
                      } drop-shadow-lg"`}>
                      {truncateString(el.title, 32) || truncateString(el.name, 32)}
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
                      <CircleRating
                        rating={el.vote_average}
                        textRating={el.vote_average}
                        textColor={theme ? "white" : "black"}
                      />
                    </div>
                    <p
                      className={` ${theme ? "text-white" : "text-black"} drop-shadow-md md:text-base hidden md:block`}>
                      {truncateString(el.overview, 230)}
                    </p>
                    <p className={` ${theme ? "text-white" : "text-black"} drop-shadow-md md:hidden text-[15px]`}>
                      {truncateString(el.overview, 120)}
                    </p>
                    <Link to={`/${mediaType}/${el.id}`}>
                      <button className=" text-white md:w-40 w-[147px] md:h-[45px] h-[37px] bg-primary_button shadow-xl md:rounded-lg rounded flex justify-center items-center gap-x-3 hover:bg-secondary_button transition-all ease-in-out duration-200">
                        <FaPlay />
                        Watch Now
                      </button>
                    </Link>
                  </div>
                </div>
                {el.backdrop_path === null ? (
                  <img src={placeholderBackdrop} alt={el.title} className="  w-full h-full object-cover" />
                ) : (
                  <img
                    src={`https://image.tmdb.org/t/p/original${el.backdrop_path}`}
                    alt={el.title}
                    className="  w-full h-full object-cover"
                  />
                )}
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
};

export default Backdrop;
