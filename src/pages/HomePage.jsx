import React, { useContext, useState } from "react";
import Backdrop from "../components/Backdrop";

import { useGetMovies } from "../hooks/movie-api/useGetMovies";
import { useGetGenreMovie } from "../hooks/movie-api/useGetGenreMovie";

import { useGetTv } from "../hooks/tv-api/useGetTv";

import "react-lazy-load-image-component/src/effects/blur.css";

import SliderCard from "../components/slider-card/SliderCard";

import { DataContext } from "../contextProvider/DataProvider";
import LoadingPage from "./LoadingPage";

const HomePage = () => {
  const [theme] = useContext(DataContext);
  const [category, setCategory] = useState("top_rated");
  const mediaType = "movie";

  const { data: genreMovie } = useGetGenreMovie();
  const {
    data: dataPopularMovie,
    isLoading: isLoadingPopularMovie,
    isError: isErrorPopularMovie,
    isFetching: isFetchingPopularMovie,
    error: errorPopularMovie,
  } = useGetMovies({ pageParam: 1, mediaCategory: "popular" });

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

  if (
    isLoadingPopularMovie ||
    isFetchingPopularMovie ||
    isLoadingTopRated ||
    isFetchingTopRated ||
    isLoadingTvPopular ||
    isFetchingTvPopular ||
    isLoadingTvTopRated ||
    isFetchingTvTopRated
  ) {
    return <LoadingPage />;
  }
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
      <div className=" w-full h-full lg:px-16 md:px-12 sm:pt-12 lg:pt-16 sm:px-10 px-4 pb-10 pt-4">
        <div>
          <h1
            className={`my-10  mb-8 text-2xl font-bold ${
              theme ? "text-white" : "text-black"
            }`}
          >
            <span
              className={`  underline decoration-red-600 decoration-4 underline-offset-8`}
            >
              POPULAR
            </span>{" "}
            MOVIES
          </h1>
        </div>
        <SliderCard data={dataPopularMovie} mediaType={"movie"} />
        <div>
          <h1
            className={`my-10  mb-8 text-2xl font-bold ${
              theme ? "text-white" : "text-black"
            }`}
          >
            <span
              className={`  underline decoration-red-600 decoration-4 underline-offset-8`}
            >
              TOP RATED
            </span>{" "}
            MOVIES
          </h1>
        </div>
        <SliderCard data={dataTopRated} mediaType={"movie"} />
        <div>
          <h1
            className={`my-10  mb-8 text-2xl font-bold ${
              theme ? "text-white" : "text-black"
            }`}
          >
            <span
              className={`  underline decoration-red-600 decoration-4 underline-offset-8`}
            >
              POPULAR
            </span>{" "}
            SERIES
          </h1>
        </div>
        <SliderCard data={dataTvPopular} mediaType={"tv"} />
        <div>
          <h1
            className={`my-10  mb-8 text-2xl font-bold ${
              theme ? "text-white" : "text-black"
            }`}
          >
            <span
              className={`  underline decoration-red-600 decoration-4 underline-offset-8`}
            >
              TOP RATED
            </span>{" "}
            SERIES
          </h1>
        </div>
        <SliderCard data={dataTvTopRated} mediaType={"tv"} />
      </div>
    </div>
  );
};

export default HomePage;
