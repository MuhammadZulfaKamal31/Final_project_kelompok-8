import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, History } from "swiper";
import "swiper/css";

import { useGetGenreName } from "../../hooks/genre-name-api/useGetGenreName";
import { filterGenreName } from "../../utils/filterGenreName";

const Backdrop = ({ data, isLoading, isError, isFetching, error }) => {
  const { data: allGenresName } = useGetGenreName();

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
          data?.results.map((el, i) => {
            const genresName = filterGenreName(allGenresName?.data?.genres, el.genre_ids);
            console.log(genresName);
            return (
              <SwiperSlide className=" w-full h-screen" key={i}>
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
