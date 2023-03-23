import React, { useContext, useRef, useState } from "react";
import { useGetDetail } from "../hooks/detail-api/useGetDetail";
import { useParams } from "react-router";
import { useGetDetailCategory } from "../hooks/detail-api/useGetDetailCategory";

import { Swiper, SwiperSlide } from "swiper/react";
import { useGetDetailVideos } from "../hooks/detail-api/useGetDetailVideos";
import ReactPlayer from "react-player/youtube";

import { Navigation, Pagination } from "swiper";

import "swiper/css/pagination";
import "swiper/css/navigation";

import { DetailHeader } from "../components/detail-components/DetailHeader";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import placeholderPoster from "../assets/placeholder-img.png";
import placeholderBackdrop from "../assets/placeholder-backdrop.png";
import { Link } from "react-router-dom";
import LoadingPage from "./LoadingPage";
import { FaPlay } from "react-icons/fa";
import { DataContext } from "../contextProvider/DataProvider";

import CircleRating from "../components/circle-rating/CircleRating";

import SliderCard from "../components/SliderCard";
import { BsFillPlayFill } from "react-icons/bs";

const DetailPage = () => {
  const [theme] = useContext(DataContext);
  const { mediaType, mediaId } = useParams();
  const [isPlaying, setIsPlaying] = useState(null);
  const myRef = useRef(null);

  const executeScroll = () => {
    window.scrollTo({ behavior: "smooth", top: myRef.current.offsetTop });
  };

  const detailCategories = {
    credits: "credits",
    similar: "similar",
    images: "images",
    videos: "videos",
  };
  const {
    data: detail,
    isLoading: loadingDetail,
    isError: isErrorDetail,
    isFetching: isFetchingDetail,
  } = useGetDetail({ mediaId: mediaId, mediaType: mediaType });

  const {
    data: detailCredits,
    isLoading: loadingDetailCredits,
    isError: isErrorDetailCredits,
    isFetching: isFetchingDetailCredits,
  } = useGetDetailCategory({ mediaId: mediaId, mediaType: mediaType, detailCategory: detailCategories.credits });

  const { data: detailVideos } = useGetDetailVideos({
    mediaId: mediaId,
    mediaType: mediaType,
    detailCategory: detailCategories.videos,
  });

  const {
    data: detailBackdrops,
    isLoading: loadingDetailBackdrops,
    isError: isErrorDetailBackdrops,
    isFetching: isFetchingDetailBackdrops,
  } = useGetDetailCategory({ mediaId: mediaId, mediaType: mediaType, detailCategory: detailCategories.images });

  const {
    data: detailPosters,
    isLoading: loadingDetailPosters,
    isError: isErrorDetailPosters,
    isFetching: isFetchingDetailPosters,
  } = useGetDetailCategory({ mediaId: mediaId, mediaType: mediaType, detailCategory: detailCategories.images });

  const {
    data: detailSimilar,
    isLoading: loadingDetailSimilar,
    isError: isErrorDetailSimilar,
    isFetching: isFetchingDetailSimilar,
  } = useGetDetailCategory({ mediaId: mediaId, mediaType: mediaType, detailCategory: detailCategories.similar });

  console.log({ isErrorDetail });

  if (
    loadingDetail ||
    isFetchingDetail ||
    loadingDetailCredits ||
    isFetchingDetailCredits ||
    loadingDetailBackdrops ||
    isFetchingDetailBackdrops ||
    loadingDetailPosters ||
    isFetchingDetailPosters ||
    loadingDetailSimilar ||
    isFetchingDetailSimilar
  ) {
    return <LoadingPage />;
  }

  return (
    <div className=" w-full h-full">
      <div className=" absolute w-full h-screen">
        <div className=" absolute  w-full h-screen">
          <div className={` ${theme ? "bg-[#0000004d]" : "bg-[#f5f5f580]"} w-full h-1/3 hidden lg:block`}></div>
          <div
            className={` bg-gradient-to-t ${theme ? "from-black" : "from-background_light"} ${
              theme ? "to-[#0000004d]" : "to-[#f5f5f580]"
            } w-full h-1/3 lg:hidden block`}></div>
          <div className={` ${theme ? "bg-black" : " bg-background_light"} w-full h-1/3 lg:hidden block`}></div>
          <div
            className={` bg-gradient-to-t ${theme ? "from-black" : "from-background_light"} ${
              theme ? "to-[#0000004d]" : "to-[#f5f5f580]"
            } w-full h-1/3 hidden lg:block`}></div>
          <div className={`${theme ? "bg-black" : " bg-background_light"}  w-full h-1/3`}></div>
        </div>
        {detail?.backdrop_path === null ? (
          <img src={placeholderBackdrop} alt={detail?.title} className=" w-full h-screen object-top object-cover" />
        ) : (
          <img
            src={`https://image.tmdb.org/t/p/original${detail?.backdrop_path}`}
            alt={detail?.title}
            className=" w-full h-screen object-top object-cover"
          />
        )}
      </div>
      <div className="w-full h-full flex-col flex">
        <div className="w-full h-full flex gap-x-7 z-40 lg:pt-56 lg:px-[90px] lg:flex-row flex-col pt-20 md:pt-40 md:px-[40px] px-[10px]">
          <div className=" xl:w-[39%] lg:[60%] lg:block flex items-center justify-center w-full ">
            <div className=" md:w-[50%] lg:w-full w-[70%]">
              {detail?.poster_path === null ? (
                <LazyLoadImage
                  src={placeholderPoster}
                  alt={detail?.title}
                  className=" w-full object-cover"
                  effect="blur"
                  placeholderSrc={placeholderPoster}
                />
              ) : (
                <LazyLoadImage
                  src={`https://image.tmdb.org/t/p/w500${detail?.poster_path}`}
                  alt={detail?.title}
                  className=" w-full object-cover"
                  effect="blur"
                  placeholderSrc={placeholderPoster}
                />
              )}
            </div>
          </div>
          <div className=" lg:w-[58%] w-full flex flex-col lg:gap-y-12 gap-y-10 lg:px-0 px-4 lg:pt-0 pt-5 ">
            <h1 className=" lg:text-[60px] font-bold lg:leading-[75px] drop-shadow-xl text-4xl">
              {detail?.name || detail?.title}
            </h1>
            <div div className=" text-white flex items-center gap-x-4">
              {detail?.genres?.slice(0, 2).map((el, i) => {
                return (
                  <span
                    className=" lg:h-9 h-7 flex justify-center items-center lg:px-4 px-2 rounded-full bg-primary_button lg:text-base text-sm font-semibold"
                    key={i}>
                    {el.name}
                  </span>
                );
              })}
              <div className=" pl-4">
                <CircleRating
                  rating={detail.vote_average}
                  textRating={detail.vote_average.toFixed(1)}
                  textColor={`${theme ? "white" : "black"}`}
                />
              </div>
            </div>
            <p className=" drop-shadow-lg">{detail?.overview}</p>
            <div>
              <button
                className=" text-white lg:w-40 w-[147px] lg:h-[45px] h-[37px] bg-primary_button shadow-xl lg:rounded-lg rounded flex justify-center items-center gap-x-3 hover:bg-secondary_button"
                onClick={executeScroll}>
                <FaPlay />
                Watch Now
              </button>
            </div>
            {loadingDetailCredits ? (
              "Loading.."
            ) : (
              <div>
                <h1 className="md:text-[26px] text-2xl font-bold mb-5 uppercase">cast</h1>
                <div>
                  <Swiper
                    spaceBetween={10}
                    pagination={{
                      clickable: true,
                    }}
                    breakpoints={{
                      0: {
                        slidesPerView: 2,
                      },
                      445: {
                        slidesPerView: 3,
                      },
                      600: {
                        slidesPerView: 4,
                      },
                      768: {
                        slidesPerView: 4,
                      },
                      1280: {
                        slidesPerView: 5,
                      },
                    }}
                    className=" h-[210px] cursor-grab">
                    <div>
                      {detailCredits?.cast &&
                        detailCredits?.cast?.map((cast, i) => {
                          return (
                            <SwiperSlide className=" w-full h-full relative">
                              <div className=" absolute z-10 w-full h-full">
                                <div className=" w-full h-[80%] bg-transparent"></div>
                                <div className=" w-full h-[20%] bg-black/60 flex justify-center items-center">
                                  <h1 className=" font-semibold text-white">{cast?.name}</h1>
                                </div>
                              </div>
                              {cast?.profile_path === null ? (
                                <img src={placeholderPoster} alt={cast.name} key={i} />
                              ) : (
                                <LazyLoadImage
                                  src={`https://image.tmdb.org/t/p/original${cast?.profile_path}`}
                                  alt={cast.name}
                                  key={i}
                                  effect="blur"
                                  placeholderSrc={placeholderPoster}
                                />
                              )}
                            </SwiperSlide>
                          );
                        })}
                    </div>
                  </Swiper>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className=" w-full h-full md:px-[40px] lg:px-[90px] px-[20px]">
          <div className=" w-full h-full  mt-20 flex flex-col lg:gap-y-32 gap-y-24">
            <div className=" w-full h-auto">
              <h1 className=" md:text-3xl text-2xl font-bold mb-10" ref={myRef}>
                TRAILER
              </h1>
              <Swiper
                slidesPerView={"auto"}
                navigation={true}
                modules={[Navigation, Pagination]}
                className=" text-white w-full">
                {detailVideos?.results &&
                  detailVideos?.results?.slice(0, 3).map((el) => {
                    return (
                      <SwiperSlide className=" w-full" key={el?.id}>
                        <div className=" aspect-video">
                          {/* <iframe
                            src={`https://www.youtube.com/embed/${el?.key}?showinfo=0&enablejsapi=1&origin=http://localhost:3000`}
                            title={el?.id}
                            frameborder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                            width="100%"
                            height="90%"></iframe> */}
                          {/* <ReactPlayer
                            url={`https://www.youtube.com/embed/${el?.key}?showinfo=0&enablejsapi=1&origin=http://localhost:3000`}
                            config={{ youtube: { playerVars: { origin: "https://www.youtube.com" } } }}
                            width="100%"
                            height="100%"
                          /> */}
                        </div>
                      </SwiperSlide>
                    );
                  })}
              </Swiper>
            </div>
            <div className=" w-full">
              <h1 className=" md:text-[26px] text-2xl font-bold mb-5">BACKDROPS</h1>
              <Swiper navigation={true} modules={[Navigation, Pagination]} className=" text-white">
                {detailBackdrops?.backdrops &&
                  detailBackdrops?.backdrops.map((el, i) => {
                    return (
                      <SwiperSlide>
                        <LazyLoadImage
                          effect="blur"
                          src={`https://image.tmdb.org/t/p/original${el.file_path}`}
                          alt="backdrops"
                          key={i}
                          className=" h-auto"
                          placeholderSrc={placeholderBackdrop}
                        />
                      </SwiperSlide>
                    );
                  })}
              </Swiper>
            </div>
            <div className=" w-full h-full">
              <h1 className="md:text-[26px] text-2xl font-bold mb-5">POSTERS</h1>
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
                className="h-full cursor-grab">
                {detailPosters?.posters &&
                  detailPosters?.posters.map((el, i) => {
                    return (
                      <SwiperSlide className=" !h-auto" key={i}>
                        <LazyLoadImage
                          effect="blur"
                          src={`https://image.tmdb.org/t/p/w500${el.file_path}`}
                          alt="posters"
                          placeholderSrc={placeholderPoster}
                          className=" h-full"
                        />
                      </SwiperSlide>
                    );
                  })}
              </Swiper>
            </div>
            <div className=" w-full h-full lg:mb-20 md:mb-16 mb-12">
              <h1 className=" md:text-[26px] text-2xl font-bold mb-5">SIMILAR MOVIE</h1>
              <SliderCard data={detailSimilar} mediaType={`/${mediaType}`} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
