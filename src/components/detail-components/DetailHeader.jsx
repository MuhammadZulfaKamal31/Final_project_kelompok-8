import { FaPlay } from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";
import { LazyLoadImage } from "react-lazy-load-image-component";

import detailHeaderPlaceholder from "../../assets/detail-header-placeholder.png";
import placeholderPoster from "../../assets/placeholder-img.png";
import "react-lazy-load-image-component/src/effects/blur.css";

import { DataContext } from "../../contextProvider/DataProvider";
import { useContext } from "react";

export const DetailHeader = ({ detail, detailCredits, loadingDetailCredits, scrollFunction }) => {
  const [theme] = useContext(DataContext);

  return (
    <div className=" w-full h-screen">
      <div className="w-full h-screen relative">
        <div className="w-full h-full flex gap-x-7 absolute z-40 lg:pt-56 lg:px-[90px] lg:flex-row flex-col pt-20 md:pt-40">
          <div className=" lg:w-[39%]  flex items-center justify-center w-full lg:pt-64">
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
            </div>
            <p className=" drop-shadow-lg">{detail?.overview}</p>
            <div>
              <button
                className=" text-white lg:w-40 w-[147px] lg:h-[45px] h-[37px] bg-primary_button shadow-xl lg:rounded-lg rounded flex justify-center items-center gap-x-3 hover:bg-secondary_button"
                onClick={scrollFunction}>
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
                      768: {
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
                                  // effect="blur"
                                  // placeholderSrc={placeholderPoster}
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
        <div className=" absolute z-10 w-full h-screen flex flex-col">
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
        <div className=" absolute w-full h-screen">
          {detail?.backdrop_path === null ? (
            <img
              src={detailHeaderPlaceholder}
              alt={detail?.title}
              className=" w-full h-screen object-top object-cover"
            />
          ) : (
            <img
              src={`https://image.tmdb.org/t/p/original${detail?.backdrop_path}`}
              alt={detail?.title}
              className=" w-full h-screen object-top object-cover"
            />
          )}
        </div>
      </div>
    </div>
  );
};
