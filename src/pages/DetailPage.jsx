import React, { useContext, useRef, useState } from "react";
import { useGetDetail } from "../hooks/detail-api/useGetDetail";
import { useParams } from "react-router";
import { useGetDetailCategory } from "../hooks/detail-api/useGetDetailCategory";
import { Swiper, SwiperSlide } from "swiper/react";
import { useGetDetailVideos } from "../hooks/detail-api/useGetDetailVideos";
import { Navigation, Pagination } from "swiper";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import placeholderPoster from "../assets/placeholder-img.png";
import placeholderBackdrop from "../assets/placeholder-backdrop.png";
import LoadingPage from "./LoadingPage";
import { FaPlay } from "react-icons/fa";
import { DataContext } from "../contextProvider/DataProvider";
import CircleRating from "../components/circle-rating/CircleRating";
import SliderCard from "../components/slider-card/SliderCard";
import { IoMdSend, IoMdTrash } from "react-icons/io";
import { useGetComment } from "../hooks/comment-api/useGetComment";
import { AuthContext } from "../contextProvider/AuthContext";
import { usePostComment } from "../hooks/comment-api/usePostComment";
import Moment from "react-moment";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { useGetSingleFavorite } from "../hooks/favorite-api/useGetSingleFavorite";
import { useAddFavorite } from "../hooks/favorite-api/usePostFavorite";
import { useUnFavorite } from "../hooks/favorite-api/useUnFavorite";
import { useDeleteComment } from "../hooks/comment-api/useDeleteComment";
import { PulseLoader } from "react-spinners";
import { PuffLoader } from "react-spinners";
import { Modal } from "../components/Modal";

const DetailPage = () => {
  const { currentUser } = useContext(AuthContext);
  const [addComment, setAddComment] = useState("");
  const [theme] = useContext(DataContext);
  const [open, setOpen] = useState(false);
  const { mediaType, mediaId } = useParams();
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
  } = useGetDetailCategory({
    mediaId: mediaId,
    mediaType: mediaType,
    detailCategory: detailCategories.credits,
  });

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
  } = useGetDetailCategory({
    mediaId: mediaId,
    mediaType: mediaType,
    detailCategory: detailCategories.images,
  });

  const {
    data: detailPosters,
    isLoading: loadingDetailPosters,
    isError: isErrorDetailPosters,
    isFetching: isFetchingDetailPosters,
  } = useGetDetailCategory({
    mediaId: mediaId,
    mediaType: mediaType,
    detailCategory: detailCategories.images,
  });

  const {
    data: detailSimilar,
    isLoading: loadingDetailSimilar,
    isError: isErrorDetailSimilar,
    isFetching: isFetchingDetailSimilar,
  } = useGetDetailCategory({
    mediaId: mediaId,
    mediaType: mediaType,
    detailCategory: detailCategories.similar,
  });
  const { data: getSingleFavorite } = useGetSingleFavorite({
    mediaId: mediaId,
    mediaType: mediaType,
    currentUser: currentUser?.id,
  });

  const { mutate: addFavorite, isLoadingAddFavorite } = useAddFavorite();

  const handleAddFavorite = () => {
    addFavorite({
      mediaType: mediaType,
      mediaId: mediaId,
      posterPath: detail?.poster_path,
      title: detail?.title || detail?.name,
      vote: detail?.vote_average,
    });
  };

  const { mutate: unFavorite, isLoading: isLoadingUnFavorite } = useUnFavorite();

  const handleUnFavorite = () => {
    unFavorite({ mediaId: mediaId, mediaType: mediaType });
  };

  const { data: getComment } = useGetComment({ mediaType: mediaType, mediaId: mediaId });

  const { mutate: postComment, isLoading: isLoadingAddComment } = usePostComment();

  const { mutate: deleteComment, isLoading: isLoadingDeleteComment } = useDeleteComment();

  const handleAddComment = (e) => {
    setAddComment(e.target.value);
  };

  const handleSubmitComment = () => {
    postComment({ text: addComment, media_id: mediaId, media_type: mediaType });
    setAddComment("");
  };

  const handleDeleteCommmet = (e) => {
    deleteComment(e);
  };

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
            {/* Favorite */}
            <div className="flex gap-x-3 items-center">
              {getSingleFavorite !== null && currentUser !== null && (
                <button onClick={handleUnFavorite} className=" w-7 h-7" disabled={isLoadingUnFavorite}>
                  {isLoadingUnFavorite ? (
                    <PuffLoader color="#ffff" size={25} />
                  ) : (
                    <MdFavorite className=" w-full h-full text-red-600" />
                  )}
                </button>
              )}
              {getSingleFavorite === null && currentUser !== null && (
                <button onClick={handleAddFavorite} className=" lg:w-7 lg:h-7 w-6 h-6" disabled={isLoadingAddFavorite}>
                  {isLoadingAddFavorite ? (
                    <PuffLoader color="#ffff" size={25} />
                  ) : (
                    <MdFavoriteBorder className=" w-full h-full text-red-600" />
                  )}
                </button>
              )}
              {currentUser === null && (
                <button className=" lg:w-7 lg:h-7 w-6 h-6" onClick={() => setOpen(true)}>
                  <MdFavoriteBorder className=" w-full h-full text-red-600" />
                </button>
              )}
              <Modal open={open} onClose={() => setOpen(false)} />
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
                            //untuk key bagian ini sebaiknya ditaruh di bagianswiper slide karena itu bagian elemen utama
                            // supaya elemen tersebut dapat membedakan setiap slide dalam Swiper ketika melakukan perenderan ulang.
                            <SwiperSlide className=" w-full h-full relative" key={i}>
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
                                  // key={i}
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
                          <iframe
                            title="video"
                            width="100%"
                            height="100%"
                            src={`https://www.youtube-nocookie.com/embed/${el.key}`}
                            allow="autoplay; encrypted-media"
                            allowFullScreen></iframe>
                          {/* <ReactPlayer url={`https://www.youtube.com/embed/${el?.key}`} controls /> */}
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
                      //untuk key bagian ini sebaiknya ditaruh di bagianswiper slide karena itu bagian elemen utama
                      // supaya elemen tersebut dapat membedakan setiap slide dalam Swiper ketika melakukan perenderan ulang.
                      <SwiperSlide key={i}>
                        <LazyLoadImage
                          effect="blur"
                          src={`https://image.tmdb.org/t/p/original${el.file_path}`}
                          alt="backdrops"
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
                      //untuk key bagian ini sebaiknya ditaruh di bagian swiper slide karena itu bagian elemen utama
                      // supaya elemen tersebut dapat membedakan setiap slide dalam Swiper ketika melakukan perenderan ulang.
                      <SwiperSlide className=" !h-auto" key={i}>
                        <LazyLoadImage
                          effect="blur"
                          src={`https://image.tmdb.org/t/p/w500${el.file_path}`}
                          alt="posters"
                          placeholderSrc={placeholderPoster}
                          className=" h-full object-cover"
                        />
                      </SwiperSlide>
                    );
                  })}
              </Swiper>
            </div>
            {/* Comment Section */}
            <div className="w-full h-full lg:mb-20 md:mb-16 mb-12">
              <div className="flex mb-5">
                <h1 className=" md:text-[26px] text-2xl font-bold mr-3">COMMENT</h1>
                <h1 className=" md:text-[26px] text-2xl font-bold">({getComment?.length})</h1>
              </div>
              {getComment?.map((el, i) => {
                return (
                  <div
                    className={`flex ${!theme ? " hover:bg-white/80" : "hover:bg-[rgb(19,19,19)]"}  rounded-md p-3`}
                    key={i}>
                    <div className="mr-3">
                      <div className="w-10 h-10 overflow-hidden rounded-full">
                        <img
                          src={`/assets/${el?.user.avatar}`}
                          alt="userImage"
                          className="w-full h-full text-red-500"
                        />
                      </div>
                    </div>
                    <div className=" flex-grow flex md:flex-row justify-between md:items-center flex-col">
                      <div>
                        <h2 className="text-2xl font-semibold mb-2">{el?.user.username}</h2>
                        <Moment format="DD-MM-YYYY" className="mb-3 text-sm">
                          {el?.createdAt}
                        </Moment>
                        <h2 className="mb-2 lg:text-lg lg:font-semibold font-medium text-base">{el?.text}</h2>
                      </div>
                      {currentUser?.id === el?.user.id ? (
                        <div>
                          <button
                            className={` ${
                              isLoadingDeleteComment && " bg-red-500"
                            } h-9 w-24 md:w-28 md:h-10  flex gap-x-1 bg-red-600 items-center justify-center rounded hover:bg-red-700 ease-in-out transition-all duration-200 text-white`}
                            onClick={() => handleDeleteCommmet(el?.id)}
                            disabled={isLoadingDeleteComment}>
                            {isLoadingDeleteComment ? (
                              <PulseLoader color="#ffff" size={6} />
                            ) : (
                              <>
                                <IoMdTrash className=" md:w-5 md:h-5 w-4 h-4 " />
                                <span className=" font-medium md:text-lg text-md">Remove</span>{" "}
                              </>
                            )}
                          </button>
                        </div>
                      ) : null}
                    </div>
                  </div>
                );
              })}
              <hr className="border-[rgb(19,19,19)] mb-7" />
              {currentUser !== null ? (
                <div className="flex">
                  <div>
                    <div className="w-10 h-10 overflow-hidden rounded-full mr-3">
                      <img
                        src={`/assets/${currentUser.avatar}`}
                        alt="userImage"
                        className="w-full h-full text-red-500"
                      />
                    </div>
                  </div>
                  <div className="w-full">
                    <h2 className="text-2xl font-semibold mb-5">{currentUser?.username}</h2>
                    <textarea
                      value={addComment}
                      onChange={handleAddComment}
                      rows="5"
                      className={`${!theme ? "bg bg-transparent hover:border-black" : "hover:border-white"}
                       w-full mb-3 bg-black border rounded p-2 border-[rgb(19,19,19)] `}
                      placeholder="Fill your comment . . ."
                    />
                    <button
                      onClick={handleSubmitComment}
                      disabled={isLoadingAddComment}
                      className={` ${
                        isLoadingAddComment && "bg-red-600"
                      } text-white flex text-center items-center gap-x-2 bg-primary_button md:w-28 md:h-10 w-[70px] h-8 justify-center rounded font-semibold hover:bg-red-700 ease-out transition-all duration-300`}>
                      {isLoadingAddComment ? (
                        <PulseLoader color="#ffff" size={6} />
                      ) : (
                        <>
                          <span className=" font-medium md:text-lg text-md">Post</span>{" "}
                          <IoMdSend className=" md:w-5 md:h-5 w-4 h-4 " />
                        </>
                      )}
                    </button>
                  </div>
                </div>
              ) : null}
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
