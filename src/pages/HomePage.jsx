import React, { useState } from "react";
import Backdrop from "../components/Backdrop";

import { useGetMovies } from "../hooks/movie-api/useGetMovies";
import { useGetGenreMovie } from "../hooks/movie-api/useGetGenreMovie";
import { Swiper, SwiperSlide } from "swiper/react";

import { SliderSwiper } from "../components/SliderSwiper";
import { useGetTv } from "../hooks/tv-api/useGetTv";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [category, setCategory] = useState("top_rated");
  const mediaType = "movie";

  const { data: genreMovie } = useGetGenreMovie();
  const {
    data: dataPopularMovie,
    isLoading: isLoadingPopularMovie,
    isError: isErrorPopularMovie,
    isFetching: isFetchingPopularMovie,
    error: errorPopularMovie,
  } = useGetMovies({ pageParam: 1, mediaCategory: category });

  const {
    data: dataTopRated,
    isLoading: isLoadingTopRated,
    isError: isErrorTopRated,
    isFetching: isFetchingTopRated,
    error: errorTopRated,
  } = useGetMovies({ pageParam: 1, mediaCategory: "top_rated" });

  const {
    data: dataTvPopular,
    isLoading: isLoadingTvPopular,
    isError: isErrorTvPopular,
    isFetching: isFetchingTvPopular,
    error: errorTvPopular,
  } = useGetTv({ pageParam: 1, mediType: "tv", mediaCategory: "popular" });
  const {
    data: dataTvTopRated,
    isLoading: isLoadingTvTopRated,
    isError: isErrorTvTopRated,
    isFetching: isFetchingTvTopRated,
    error: errorTvTopRated,
  } = useGetTv({ pageParam: 1, mediType: "tv", mediaCategory: "top_rated" });

  return (
    <div className=" w-full h-full">
      <div className=" w-full h-full">
        <Backdrop
          mediaType={mediaType}
          genre={genreMovie}
          data={dataPopularMovie}
          isLoading={isLoadingPopularMovie}
          isError={isErrorPopularMovie}
          error={errorPopularMovie}
          isFetching={isFetchingPopularMovie}
        />
      </div>
      <div>
        <h1 className="my-10 mx-24 mb-8 text-2xl font-semibold text-white">
          <span className="underline decoration-red-600 decoration-4 underline-offset-8">POPULAR</span> MOVIES
        </h1>
      </div>
      <Swiper
        spaceBetween={5}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          0: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 5,
          },
        }}>
        {dataPopularMovie?.results.map((el, i) => {
          return (
            <SwiperSlide key={i}>
              <Link to={`movie/${el.id}`}>
                <LazyLoadImage src={`https://image.tmdb.org/t/p/w500${el.poster_path}`} />
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div>
        <h1 className="my-10 mx-24 mb-8 text-2xl font-semibold text-white">
          <span className="underline decoration-red-600 decoration-4 underline-offset-8">TOP RATED</span> MOVIES
        </h1>
      </div>
      <Swiper
        spaceBetween={5}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          0: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 5,
          },
        }}>
        {dataTopRated?.results.map((el, i) => {
          return (
            <SwiperSlide key={i}>
              <Link to={`movie/${el.id}`}>
                <LazyLoadImage src={`https://image.tmdb.org/t/p/w500${el.poster_path}`} />
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div>
        <h1 className="my-10 mx-24 mb-8 text-2xl font-semibold text-white">
          <span className="underline decoration-red-600 decoration-4 underline-offset-8">POPULAR</span> SERIES
        </h1>
      </div>
      <Swiper
        spaceBetween={5}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          0: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 5,
          },
        }}>
        {dataTvPopular?.results.map((el, i) => {
          return (
            <SwiperSlide key={i}>
              <Link to={`tv/${el.id}`}>
                <LazyLoadImage src={`https://image.tmdb.org/t/p/w500${el.poster_path}`} />
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div>
        <h1 className="my-10 mx-24 mb-8 text-2xl font-semibold text-white">
          <span className="underline decoration-red-600 decoration-4 underline-offset-8">TOP RATED</span> SERIES
        </h1>
      </div>
      <Swiper
        spaceBetween={5}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          0: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 5,
          },
        }}>
        {dataTvTopRated?.results.map((el, i) => {
          return (
            <SwiperSlide key={i}>
              <Link to={`tv/${el.id}`}>
                <LazyLoadImage src={`https://image.tmdb.org/t/p/w500${el.poster_path}`} />
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default HomePage;
