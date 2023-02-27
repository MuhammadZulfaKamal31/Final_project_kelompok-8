import React from 'react'
import { images } from '../images'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  return (
    <div>
      <div className="w-full h-screen">
      <div className="w-full h-full">
        <img src={images.backdrop2} alt="backdrop" className="object-cover absolute w-full h-full object-top" />
        <div className="w-full h-full bg-gradient-to-r from-black to-transparent absolute text-white">
          <div className="w-full h-full bg-gradient-to-t from-black via-transparent to-transparent absolute">
            <div className="w-full h-full flex pl-32">
              <div className="max-w-[600px] flex flex-col h-full gap-y-7 justify-center">
                <div>
                  <h1 className="text-[70px] leading-[70px] font-bold drop-shadow-lg">Avengers :</h1>
                  <h2 className="text-[70px] font-bold drop-shadow-lg">End Game 2019</h2>
                </div>
                <div className="flex gap-x-3">
                  <span className="px-4 py-1 rounded-full bg-red-700 cursor-default">Adventure</span>
                  <span className="px-4 py-1 rounded-full bg-red-700 cursor-default">Science Fiction</span>
                </div>
                <p className="font-normal drop-shadow-lg">
                  After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts of
                  the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in
                  order to undo Thanos' actions and restore order to the universe once and for all, no matter what
                  consequences may be in store
                </p>
                <div
                  className="w-[155px] h-10 rounded-md bg-red-700 flex justify-center items-center gap-x-2 cursor-pointer hover:opacity-80 transition-all ease-in-out duration-75">

                 <FontAwesomeIcon icon={faPlay} className='text-white' />

                  <span className="font-medium">Watch Now</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Backdrop End --> */}
    </div>
    </div>
  )
}

export default Header
