import React from "react";
import Backdrop from "../components/Backdrop";

import { useGetMovies } from "../hooks/movie-api/useGetMovies";
import { useGetGenreMovie } from "../hooks/movie-api/useGetGenreMovie";

const HomePage = () => {
  const { data: genreMovie } = useGetGenreMovie();
  const {
    data: dataPopularMovie,
    isLoading: isLoadingPopularMovie,
    isError: isErrorPopularMovie,
    isFetching: isFetchingPopularMovie,
    error: errorPopularMovie,
  } = useGetMovies({ pageParam: 1, mediaCategory: "popular" });

  return (
    <div className=" w-full h-full">
      <div className=" w-full h-full">
        <Backdrop
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
