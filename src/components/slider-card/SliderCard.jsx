import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

import placeholderPoster from "../../assets/placeholder-img.png";
import { BsFillPlayFill } from "react-icons/bs";
import CircleRating from "../circle-rating/CircleRating";

import "./sliderCard.css";

const SliderCard = ({ data, mediaType }) => {
  return (
    <>
      <Swiper
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          0: {
            slidesPerView: 2,
          },
          450: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 5,
          },
        }}
        className=" h-full">
        {data?.results.map((el, i) => {
          return (
            <SwiperSlide key={i} className=" !h-auto group">
              <div className=" h-full relative cursor-pointer  overflow-hidden">
                <Link to={`${mediaType}/${el.id}`}>
                  {el.poster_path === null ? (
                    <LazyLoadImage
                      src={placeholderPoster}
                      placeholderSrc={placeholderPoster}
                      effect="blur"
                      className=" h-full"
                    />
                  ) : (
                    <LazyLoadImage
                      src={`https://image.tmdb.org/t/p/w500${el.poster_path}`}
                      placeholderSrc={placeholderPoster}
                      effect="blur"
                      className=" h-full"
                    />
                  )}
                  <div
                    className="absolute w-full h-full bg-gradient-to-t from-black to-transparent
                        flex items-center justify-center lg:-bottom-10 lg:opacity-0 opacity-1 lg:group-hover:opacity-100 lg:group-hover:bottom-0 transition-all duration-300 bottom-0">
                    <div className="absolute w-full h-full lg:flex justify-center items-center hidden">
                      <button className="w-[70px] h-9 rounded absolute bg-primary_button text-white hover:bg-secondary_button transition-all ease-out duration-200 flex justify-center items-center">
                        <BsFillPlayFill className=" w-8 h-8" />
                      </button>
                    </div>
                    <div className="absolute bottom-0 lg:bottom-2 left-0 right-0 text-white px-2 py-2 lg:px-4 lg:py-3">
                      <CircleRating
                        rating={el.vote_average}
                        textRating={el.vote_average.toFixed(1)}
                        textColor={"white"}
                      />
                      <p className="truncate  mt-2 md:mt-3 lg:mt-4 font-semibold md:font-bold">
                        {el.last_air_date || el.release_date || el.first_air_date}
                      </p>
                      <p className="truncate font-bold mt-2 md:font-bold lg:text-lg">{el.title || el.name}</p>
                    </div>
                  </div>
                </Link>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default SliderCard;
