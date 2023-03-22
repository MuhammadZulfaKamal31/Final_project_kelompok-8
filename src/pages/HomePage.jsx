import React, { useState } from "react";
import Backdrop from "../components/Backdrop";

import { useGetMovies } from "../hooks/movie-api/useGetMovies";
import { useGetGenreMovie } from "../hooks/movie-api/useGetGenreMovie";
import { Swiper, SwiperSlide } from "swiper/react";

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
    </div>
  );
};

export default HomePage;
