import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaPlay } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, History } from "swiper";

import { useGetGenreName } from "../../hooks/genre-name-api/useGetGenreName";
import { filterGenreName } from "../../utils/filterGenreName";

const Backdrop = ({ data, isLoading, isError, isFetching, error }) => {
  const { data: allGenresName } = useGetGenreName();

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
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        navigation={false}
        modules={[Autoplay, History]}
        className=" w-full h-screen absolute">
        {data?.results &&
          data?.results.map((el) => {
            const genresName = filterGenreName(allGenresName?.genres, el.genre_ids);
            return (
              <SwiperSlide className=" w-full h-screen" key={el.id}>
                <div className=" w-full h-screen absolute z-50 bg-gradient-to-t via-transparent from-black to-transparent"></div>
                <div className=" w-full h-screen absolute z-50 bg-gradient-to-r from-black to-transparent pl-52">
                  <div className=" h-full  max-w-[600px] flex flex-col justify-center gap-y-10">
                    <h1 className=" text-[65px] leading-[80px] font-bold text-white drop-shadow-lg">{el.title}</h1>
                    <div className=" text-white flex items-center gap-x-4">
                      {genresName.map((el) => {
                        return (
                          <span className=" h-9 flex justify-center items-center px-4 rounded-full bg-red-600">
                            {el.name}
                          </span>
                        );
                      })}
                    </div>
                    <p className=" text-white drop-shadow-md">{el.overview}</p>
                    <button className=" w-40 h-[45px] bg-red-600 shadow-xl rounded-lg flex justify-center items-center gap-x-3 text-white">
                      <FaPlay />
                      <span>Watch Now</span>
                    </button>
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
