import React, { useContext } from "react";
import { DataContext } from "../contextProvider/DataProvider";
import { useGetMultiSearch } from "../hooks/search-api/useGetMultiSearch";
import { Link, useNavigate } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import placeholderPoster from "../assets/placeholder-img.png";
import "react-lazy-load-image-component/src/effects/blur.css";
import { BsFillPlayFill } from "react-icons/bs";
import { AiOutlineLoading } from "react-icons/ai";
import CircleRating from "../components/circle-rating/CircleRating";
import { useDebounce } from "../utils/useDebounce";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchPage = () => {
  const [theme, setTheme, search, setSearch] = useContext(DataContext);

  const debounceSearchResults = useDebounce(search, 200);
  const { data, hasNextPage, fetchNextPage, isLoading } = useGetMultiSearch({
    searchQuery: debounceSearchResults,
    pageParam: 1,
  });

  const navigate = useNavigate();
  const handleSearch = (e) => {
    const value = e.target.value;
    if (value) {
      navigate("/search", { search: search, replace: true });
    }
    setSearch(value);
  };

  return (
    <div className="w-full pb-10 h-screen">
      <div className=" max-h-full w-full flex flex-col pt-28 overflow-auto gap-y-10 px-2 md:px-32 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
        <div className={`w-full h-16 flex justify-center items-center ${theme ? "text-white" : "text-black"}`}>
          <div className="w-full flex flex-col items-center justify-center">
            <form action="" className="relative mx-auto w-full">
              <input
                type="search"
                value={search}
                onChange={handleSearch}
                name="search"
                id="default-search"
                className={`text-[25px] relative peer bg-transparent w-full h-12 rounded-full border-2 outline-none cursor-pointer p-3 pl-14 ${
                  theme ? "text-white border-white" : "text-black border-black"
                } flex item bg-center focus:w-full focus:border-red-500 focus: border-spacing-3 focus:cursor-text focus:pl-14`}
              />
              <FontAwesomeIcon
                icon={faSearch}
                className={` absolute my-auto pl-3 inset-y-0 flex items-center focus:text-red-600 ${
                  theme ? "text-white" : "text-black"
                }`}
              />
            </form>
            <h1 className="text-5xl">{search.toLowerCase()}</h1>
          </div>
        </div>
        {isLoading ? (
          <div className=" text-white flex justify-center items-center w-full">
            <AiOutlineLoading className=" animate-spin w-16 h-16" />
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {data?.pages.map((page) =>
              page?.results.map((el, i) => {
                return el.media_type === "person" ? null : (
                  <div key={i} className="group">
                    <div className=" h-full relative cursor-pointer rounded overflow-hidden">
                      <Link to={`/${el.media_type}/${el.id}`}>
                        {el.poster_path === null ? (
                          <LazyLoadImage
                            src={placeholderPoster}
                            placeholderSrc={placeholderPoster}
                            effect="blur"
                            className="w-full object-cover lg:group-hover:opacity-50 transition duration-300"
                          />
                        ) : (
                          <LazyLoadImage
                            src={`https://image.tmdb.org/t/p/w500/${el.poster_path}`}
                            placeholderSrc={placeholderPoster}
                            effect="blur"
                            className="w-full object-cover lg:group-hover:opacity-50 transition duration-300"
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
                              {el.release_date || el.first_air_date}
                            </p>
                            <p className="truncate font-bold mt-2 md:font-bold lg:text-lg">{el.title || el.name}</p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
