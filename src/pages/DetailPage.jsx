import React from "react";
import { useGetDetail } from "../hooks/detail-api/useGetDetail";
import { useParams } from "react-router";
import { useGetDetailCategory } from "../hooks/detail-api/useGetDetailCategory";
import { FaPlay } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";

const DetailPage = () => {
  const { mediaType, mediaId } = useParams();
  const detailCategories = {
    credits: "credits",
    similiar: "similiar",
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

  return (
    <div className=" w-full h-full text-white">
      <div className="w-full h-full">
        <div className=" w-full h-screen">
          <div className="w-full h-screen relative">
            <div className="w-full h-full flex gap-x-7 absolute z-40 lg:pt-56 lg:px-[90px] lg:flex-row flex-col pt-20 md:pt-40">
              <div className=" lg:w-[39%]  flex items-center justify-center w-full">
                <div className=" md:w-[50%] lg:w-full w-[70%]">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${detail?.poster_path}`}
                    alt={detail?.title}
                    className=" w-full object-cover"
                  />
                </div>
              </div>
              <div className=" lg:w-[58%] w-full flex flex-col lg:gap-y-12 gap-y-10 lg:px-0 px-4 lg:pt-0 pt-5">
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

                  {/* //       className=" lg:h-9 h-7 flex justify-center items-center lg:px-4 px-2 rounded-full bg-primary_button lg:text-base text-sm font-semibold"
                  //       key={i}>
                  //       {el.name}
                  //     </>
                  //   );
                  // })} */}
                </div>
                <p className=" drop-shadow-lg">{detail?.overview}</p>
                <div>
                  <button className=" lg:w-40 w-[147px] lg:h-[45px] h-[37px] bg-primary_button shadow-xl lg:rounded-lg rounded flex justify-center items-center gap-x-3">
                    <FaPlay />
                    Watch Now
                  </button>
                </div>
                {loadingDetailCredits ? (
                  "Loading.."
                ) : (
                  <div>
                    <h1 className=" font-bold text-3xl mb-6 uppercase">cast</h1>
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
                          768: {
                            slidesPerView: 4,
                          },
                        }}
                        className=" h-[210px] cursor-grab">
                        <div>
                          {detailCredits?.cast &&
                            detailCredits?.cast?.map((cast, i) => {
                              return cast?.profile_path === null ? null : (
                                <SwiperSlide>
                                  <img
                                    src={`https://image.tmdb.org/t/p/original${cast.profile_path}`}
                                    alt={cast.name}
                                    key={i}
                                  />
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
            <div className=" absolute z-10 w-full h-screen flex flex-col">
              <div className="bg-[#0000004d] w-full h-1/3"></div>
              <div className=" bg-gradient-to-t from-black to-[#0000004d]  w-full h-1/3"></div>
              <div className=" bg-black  w-full h-1/3"></div>
            </div>
            <div className=" absolute w-full h-screen">
              <img
                src={`https://image.tmdb.org/t/p/original${detail?.backdrop_path}`}
                alt={detail?.title}
                className=" w-full h-screen object-top object-cover"
              />
            </div>
          </div>
        </div>
        <div className=" w-full h-full px-24 lg:pt-[300px] pt-[500px] bg-black"></div>
      </div>
    </div>
  );
};

export default DetailPage;
