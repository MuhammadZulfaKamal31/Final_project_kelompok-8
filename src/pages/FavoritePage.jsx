import React from 'react'
import { useGetAllFavorite } from '../hooks/favorite-api/useGetAllFavorite'
import { BsFillPlayFill } from "react-icons/bs";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from 'react-router-dom';
import CircleRating from "../components/circle-rating/CircleRating";
import placeholderPoster from "../assets/placeholder-img.png";
import { FaTrash } from "react-icons/fa" 



const FavoritePage = () => {
  const {data} = useGetAllFavorite()
  console.log(data);
  return (
    <div className='w-full h-fit flex flex-col pt-16 px-20'>

    <h1 className={`text-2xl mb-5 lg:mb-0 lg:py-2 font-bold md:text-4xl py-2 ${data ? "text-white" : "text-black"}`}> FAVORITE </h1>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
      {data?.map((el, i) => {
        return (
          <div className='flex-col flex gap-y-3'>
          <div key={i} className="group"> 
            <div className="h-full relative cursor-pointer rounded overflow-hidden">
              <Link to={`/${el.media_type}/${el.media_id}`}>
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
                            <CircleRating rating={el.vote} textRating={el.vote} textColor={"white"} />
                            <p className="truncate  mt-2 md:mt-3 lg:mt-4 font-semibold md:font-bold">
                              {el.release_date}
                            </p>
                            <p className="truncate font-bold mt-2 md:font-bold lg:text-lg">{el.title}</p>
                          </div>
                        </div>
                        
              </Link>
             
            
            </div>
          </div>

          <button className='flex gap-x-2 w-full py-2 bg-red-600 rounded items-center justify-center text-white '> <FaTrash className='text-white'/> 
          <span> REMOVE</span>
           </button>
          </div>
        )
      })}
    </div>
    </div>
  )
 
}



export default FavoritePage
