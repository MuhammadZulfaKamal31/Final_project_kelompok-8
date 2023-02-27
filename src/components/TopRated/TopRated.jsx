import React from 'react'
import { images } from '../images';

const TopRated = () => {
  return (
    <div className='flex flex-col gap-y-18 mt-5'>
        {/* <!-- Top rated movies start --> */}
    <div className="mx-24 flex flex-col gap-y-3">
  
        <h1 className="mb-5 text-2xl font-semibold text-white">
          <span className="underline decoration-red-600 decoration-4 underline-offset-8">TOP RATED</span> MOVIES
        </h1>
        <div className="flex">
          <div className="p-3 mx-2 w-60">
            <img
              className="rounded-xl hover:scale-105 ease-in-out cursor-pointer transition duration-0 hover:duration-300"
              src={images.topRatedMovie1} alt='movie'/>
          </div>
          <div className="p-3 mx-2 w-52">
            <img
              className="rounded-xl hover:scale-105 ease-in-out cursor-pointer transition duration-0 hover:duration-300 h-[310px]"
              src={images.topRatedMovie2} alt='movie'/>
          </div>
          <div className="p-3 mx-2 w-52">
            <img
              className="rounded-xl hover:scale-105 ease-in-out cursor-pointer transition duration-0 hover:duration-300 h-[310px]"
              src={images.topRatedMovie3} alt='movie'/>
          </div>
          <div className="p-3 mx-2 w-52">
            <img
              className="rounded-xl hover:scale-105 ease-in-out cursor-pointer transition duration-0 hover:duration-300"
              src={images.topRatedMovie4} alt='movie'/>
          </div>
          <div className="p-3 mx-2 w-52">
            <img
              className="rounded-xl hover:scale-105 ease-in-out cursor-pointer transition duration-0 hover:duration-300"
              src={images.topRatedMovie5} alt='movie'/>
          </div>
        </div>
     
    </div>
    {/* <!-- Top rated movies end -->
    <!-- Top rated series start --> */}
    <div className="mx-24 flex flex-col gap-y-3 mt-10">
  
  <h1 className="mb-5 text-2xl font-semibold text-white">
    <span className="underline decoration-red-600 decoration-4 underline-offset-8">TOP RATED</span> MOVIES
  </h1>
  <div className="flex">
    <div className="p-3 mx-2 w-60">
      <img
        className="rounded-xl hover:scale-105 ease-in-out cursor-pointer transition duration-0 hover:duration-300"
        src={images.topRatedSeries1} alt='series'/>
    </div>
    <div className="p-3 mx-2 w-52">
      <img
        className="rounded-xl hover:scale-105 ease-in-out cursor-pointer transition duration-0 hover:duration-300 h-[310px]"
        src={images.topRatedSeries2} alt='series'/>
    </div>
    <div className="p-3 mx-2 w-52">
      <img
        className="rounded-xl hover:scale-105 ease-in-out cursor-pointer transition duration-0 hover:duration-300 h-[310px]"
        src={images.topRatedSeries3} alt='series'/>
    </div>
    <div className="p-3 mx-2 w-52">
      <img
        className="rounded-xl hover:scale-105 ease-in-out cursor-pointer transition duration-0 hover:duration-300"
        src={images.topRatedSeries4} alt='series'/>
    </div>
    <div className="p-3 mx-2 w-52">
      <img
        className="rounded-xl hover:scale-105 ease-in-out cursor-pointer transition duration-0 hover:duration-300"
        src={images.topRatedSeries5} alt='series'/>
    </div>
  </div>

</div>
    {/* <!-- Top rated series end --> */}
    </div>
  )
}

export default TopRated;
