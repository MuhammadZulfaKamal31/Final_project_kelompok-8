import React, { useEffect, useState } from "react";
import Backdrop from "../components/Backdrop";
import { useGetMovies } from "../hooks/movie-api/useGetMovies";
import { useGetGenreMovie } from "../hooks/movie-api/useGetGenreMovie";
import { AiOutlineLoading } from "react-icons/ai";

const MoviePage = () => {
  const mediaType = "movie";
  const [category, setCategory] = useState("popular");

  const { data, isError, error, isFetching, isLoading, refetch } = useGetMovies({
    pageParam: 1,
    mediaCategory: category,
  });

  const { data: genreMovie } = useGetGenreMovie();

  return (
    <div className=" w-full h-full">
      <Backdrop
        mediaType={mediaType}
        data={data}
        isError={isError}
        isFetching={isFetching}
        isLoading={isLoading}
        error={error}
        genre={genreMovie}
      />
    </div>
  );
};

export default MoviePage;
