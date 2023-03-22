import React, {  useState } from "react";
import Backdrop from "../components/Backdrop";
import { useGetMovies } from "../hooks/movie-api/useGetMovies";
import { useGetGenreMovie } from "../hooks/movie-api/useGetGenreMovie";
import { AiOutlineLoading } from "react-icons/ai";
import { BsFillPlayFill } from "react-icons/bs";
import Box from '@mui/joy/Box';
import CircularProgress from '@mui/joy/CircularProgress';
import { Typography } from "@mui/joy";
import { useInfiniteMovies } from "../hooks/movie-api/useInfiniteMovies";


const MoviePage = () => {

  const mediaType = "movie";
  const [category, setCategory] = useState("popular");



  const { data, isError, error, isFetching, isLoading, refetch } = useGetMovies({ pageParam: 1, mediaCategory: category });
  const { data: infiniteMovie, hasNextPage, fetchNextPage } = useInfiniteMovies({ pageParam: 1, mediaCategory: category });

  console.log(infiniteMovie)



  const { data: genreMovie } = useGetGenreMovie();

  return (
    <>
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
    {/* Komponen Title, Button dan mapping movie */}
    <div className='container mx-auto'>
      <div className="w-full my-3 lg:flex lg:justify-between">
        {/* Title Movies */}
        <div className='flex justify-center'>
          <h1 className='text-2xl mb-5 lg:mb-0 lg:py-2 font-bold md:text-4xl'>MOVIES</h1>
        </div>
        {/* Button Popular & Top rated Movies */}
        <div className="flex justify-center text-xl font-semibold">
          <button className={`${category === 'popular'? 'bg-primary_button':'hover:bg-opacity-10'}  hover:bg-secondary_button rounded-md px-5 py-2 mr-3 lg:mr-5`} onClick={() => setCategory('popular')}>POPULAR</button>
          <button className={`${category === 'top_rated'? 'bg-primary_button':'hover:bg-opacity-10'} hover:bg-secondary_button rounded-md px-4 py-2`} onClick={() => setCategory('top_rated')}>TOP RATED</button>
        </div>
      </div>
      {/* Mapping Movies */}
      <div className="my-10 mx-3">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {
            infiniteMovie?.pages.map((page) =>
            page?.results.map((el,i) => {
            return (
              <div key={i} className="group">  
                <div className='border border-gray-600 h-full relative cursor-pointer rounded overflow-hidden'>
                  <img src={`https://image.tmdb.org/t/p/w500/${el.poster_path}`} alt={el?.poster_path} className="w-full object-cover group-hover:opacity-50 transition duration-300"/>
                  <div className="absolute w-full h-full bg-slate-900/5
                   flex items-center justify-center -bottom-10 opacity-0 group-hover:opacity-100 group-hover:bottom-0 transition-all duration-300">
                    <div className="absolute w-full h-full flex justify-center items-center">
                      <BsFillPlayFill className="w-[70px] h-12 rounded absolute bg-primary_button text-white hover:bg-secondary_button"/>
                    </div>
                    <div className="absolute bottom-0 lg:bottom-2 left-0 right-0 text-white px-2 py-2 lg:px-4 lg:py-3">
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <CircularProgress 
                      thickness={5}
                      size="md" 
                      determinate 
                      variant="plain" 
                      color="success" 
                      value={el.vote_average * 10}
                      sx={{
                      "--CircularProgress-size": "50px"
                      }}>
                      <Typography sx={{ fontWeight:'bold', color:'white' }}>{el.vote_average}</Typography>
                      </CircularProgress>
                      </Box>
                      <p className="truncate underline mt-2 md:mt-5 lg:mt-10 font-semibold md:font-bold">{el.release_date}</p>
                      <p className="truncate font-bold mt-2 md:font-bold lg:text-lg">{el.title}</p>
                    </div>
                  </div>
                </div>
              </div>
            )
           } ))
          }
        </div>
      </div>
      <div className="w-full bg text-center text-lg font-semibold text-primary_button hover:bg-secondary_button hover:bg-opacity-10 transition duration-300">
        <button disabled={!hasNextPage} onClick={fetchNextPage}>LOAD MORE</button>
      </div>
    </div>
    </>
  );
};

export default MoviePage;
