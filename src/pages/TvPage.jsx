import React, { useState } from "react";
import Backdrop from "../components/Backdrop";

import { BsFillPlayFill } from "react-icons/bs";

import { useGetGenreTv } from "../hooks/tv-api/useGetGenreTv";
import { useGetTv } from "../hooks/tv-api/useGetTv";
import { useGetInfiniteTv } from "../hooks/tv-api/useGetInfiniteTv";

import { LazyLoadImage } from "react-lazy-load-image-component";

import placeholderPoster from "../assets/placeholder-img.png";
import "react-lazy-load-image-component/src/effects/blur.css";

import "react-circular-progressbar/dist/styles.css";
import CircleRating from "../components/circle-rating/CircleRating";
import { Link } from "react-router-dom";

const TvPage = () => {
  const mediaType = "tv";
  const [category, setCategory] = useState("popular");
  const { data, isError, error, isLoading, isFetching } = useGetTv({
    mediType: mediaType,
    pageParam: 1,
    mediaCategory: category,
  });
  const { data: infiniteTv, hasNextPage, fetchNextPage } = useGetInfiniteTv({ pageParam: 1, mediaCategory: category });

  const { data: genreTv } = useGetGenreTv();
  return (
    <>
      <div className=" w-full h-full">
        <Backdrop
          mediaType={mediaType}
          data={data}
          isError={isError}
          isLoading={isLoading}
          isFetching={isFetching}
          error={error}
          genre={genreTv}
        />
      </div>
      {/* TV Series */}
      <div className=" lg:px-20 md:px-10 px-3">
        <div className="w-full my-3 lg:flex lg:justify-between">
          {/* Title Movies */}
          <div className="flex justify-center">
            <h1 className="text-2xl mb-5 lg:mb-0 lg:py-2 font-bold md:text-4xl">TV SERIES</h1>
          </div>
          {/* Button Popular & Top rated Movies */}
          <div className="flex justify-center text-xl font-semibold">
            <button
              className={`${
                category === "popular" ? "bg-primary_button" : "hover:bg-opacity-10"
              }  hover:bg-secondary_button rounded-md px-5 py-1 mr-3 lg:mr-5`}
              onClick={() => setCategory("popular")}>
              POPULAR
            </button>
            <button
              className={`${
                category === "top_rated" ? "bg-primary_button" : "hover:bg-opacity-10"
              } hover:bg-secondary_button rounded-md px-4 py-1`}
              onClick={() => setCategory("top_rated")}>
              TOP RATED
            </button>
          </div>
        </div>

        {/* Mapping TV Series */}
        <div className="my-20">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {infiniteTv?.pages.map((page) =>
              page?.results.map((el, i) => {
                return (
                  <div key={i} className="group">
                    <div className=" h-full relative cursor-pointer rounded overflow-hidden">
                      <Link to={`/tv/${el.id}`}>
                        {el.poster_path === null ? (
                          <LazyLoadImage
                            src={placeholderPoster}
                            placeholderSrc={placeholderPoster}
                            effect="blur"
                            className="w-full h-full object-cover lg:group-hover:opacity-50 transition duration-300"
                          />
                        ) : (
                          <LazyLoadImage
                            src={`https://image.tmdb.org/t/p/w500/${el.poster_path}`}
                            placeholderSrc={placeholderPoster}
                            effect="blur"
                            className="w-full h-full object-cover lg:group-hover:opacity-50 transition duration-300"
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
                            <CircleRating rating={el.vote_average} textRating={el.vote_average} textColor={"white"} />
                            <p className="truncate  mt-2 md:mt-3 lg:mt-4 font-semibold md:font-bold">
                              {el.first_air_date}
                            </p>
                            <p className="truncate font-bold mt-2 md:font-bold lg:text-lg">{el.name}</p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
        {/* LOAD MORE */}
        <div className="w-full bg text-center text-lg font-semibold text-primary_button hover:bg-secondary_button hover:bg-opacity-10 transition duration-300">
          <button disabled={!hasNextPage} onClick={fetchNextPage}>
            LOAD MORE
          </button>
        </div>
      </div>
    </>
  );
};

export default TvPage;
