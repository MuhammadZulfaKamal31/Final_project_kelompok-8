import React from "react";
import Backdrop from "../components/Backdrop";
import { useGetMovies } from "../hooks/movie-api/useGetMovies";

const HomePage = () => {
  const {
    data: dataBackdrop,
    isLoading: isLoadingBackDrop,
    isError: isErrorBackDrop,
    isFetching: isFetchingBackDrop,
    error: errorBackDrop,
  } = useGetMovies({ pageParam: 1, mediaCategory: "popular" });

  return (
    <div className=" w-full h-full bg-black">
      <div className=" w-full h-full">
        <Backdrop
          data={dataBackdrop}
          isLoading={isLoadingBackDrop}
          isError={isErrorBackDrop}
          error={errorBackDrop}
          isFetching={isFetchingBackDrop}
        />
      </div>
    </div>
  );
};

export default HomePage;
