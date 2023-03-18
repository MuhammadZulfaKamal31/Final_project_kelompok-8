import React, { useState } from "react";
import { useGetDetail } from "../hooks/detail-api/useGetDetail";
import { useParams } from "react-router";
import { useGetDetailCategory } from "../hooks/detail-api/useGetDetailCategory";

import { Swiper, SwiperSlide } from "swiper/react";
import { useGetDetailVideos } from "../hooks/detail-api/useGetDetailVideos";
import ReactPlayer from "react-player/lazy";
import { Navigation, Pagination } from "swiper";

import "swiper/css/pagination";
import "swiper/css/navigation";

import { DetailHeader } from "../components/detail-components/DetailHeader";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import placeholderPoster from "../assets/placeholder-img.png";
import placeholderBackdrop from "../assets/placeholder-backdrop.png";
import { Link } from "react-router-dom";

const DetailPage = () => {
  const { mediaType, mediaId } = useParams();
  const [isPlaying, setIsPlaying] = useState(null);
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

  return (
    <div className=" w-full h-full text-white">
      <div className="w-full h-full">
        <DetailHeader detail={detail} loadingDetailCredits={loadingDetailCredits} detailCredits={detailCredits} />
        <div className=" w-full h-full lg:px-32 md:px-20 px-7 lg:pt-[300px] pt-[500px]">
          <div className=" w-full h-full  mt-20 flex flex-col lg:gap-y-32 gap-y-24">
            <div className=" w-full h-auto">
              <h1 className=" md:text-3xl text-2xl font-bold mb-10">TRAILER</h1>
              {/* <Swiper
                slidesPerView={"auto"}
                navigation={true}
                modules={[Navigation, Pagination]}
                className=" text-white w-full">
                {detailVideos?.results &&
                  detailVideos?.results?.map((el) => {
                    return (
                      <SwiperSlide className=" w-full" key={el.id}>
                        <div className="aspect-video">
                          <ReactPlayer
                            url={`https://www.youtube.com/watch?v=${el.key}`}
                            width="100%"
                            height="100%"
                            onPlay={() => {
                              setIsPlaying(el.id);
                            }}
                            playing={isPlaying === el.id}
                          />
                        </div>
                      </SwiperSlide>
                    );
                  })}
              </Swiper> */}
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
                  768: {
                    slidesPerView: 5,
                  },
                }}
                className="h-full cursor-grab">
                <div>
                  {detailPosters?.posters &&
                    detailPosters?.posters.map((el, i) => {
                      return (
                        <SwiperSlide className=" h-full object-cover">
                          <LazyLoadImage
                            effect="blur"
                            src={`https://image.tmdb.org/t/p/w500${el.file_path}`}
                            alt="posters"
                            key={i}
                            placeholderSrc={placeholderPoster}
                          />
                        </SwiperSlide>
                      );
                    })}
                </div>
              </Swiper>
            </div>
            <div className=" w-full h-full">
              <h1 className=" md:text-[26px] text-2xl font-bold mb-5">SIMILAR MOVIE</h1>
              <Swiper
                slidesPerView={5}
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
                <div>
                  {detailSimilar?.results &&
                    detailSimilar?.results.map((el) => {
                      return (
                        <SwiperSlide>
                          <Link key={el?.id} to={`/${mediaType}/${el?.id}`}>
                            {el?.poster_path === null ? (
                              <LazyLoadImage
                                src={placeholderPoster}
                                alt={el?.title}
                                placeholderSrc={placeholderPoster}
                                effect="blur"
                                className=" h-full"
                              />
                            ) : (
                              <LazyLoadImage
                                src={`https://image.tmdb.org/t/p/w500${el?.poster_path}`}
                                alt={el.title}
                                placeholderSrc={placeholderPoster}
                                effect="blur"
                              />
                            )}
                          </Link>
                        </SwiperSlide>
                      );
                    })}
                </div>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
