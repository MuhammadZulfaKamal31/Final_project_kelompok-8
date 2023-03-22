import axios from 'axios'
import { useInfiniteQuery } from 'react-query'
import { tmdbConfigs } from '../../configs/tmdb-configs'


const { baseURL, apiKey } = tmdbConfigs

const getInfiniteMovie = async ({ pageParam = 1, mediaCategory }) => {
  const {data} = await axios.get(`${baseURL}/movie/${mediaCategory}${apiKey}&page=${pageParam}`)

  return data;
}

export const useInfiniteMovies = ({pageParam, mediaCategory}) => {
  return ( 
    useInfiniteQuery(["infinite-movie", pageParam, mediaCategory], ({pageParam}) => getInfiniteMovie({pageParam, mediaCategory}), {
      getNextPageParam: (_lastPage, pages) => {
        if(pages.length < 10 ) return pages.length + 1
        return undefined
      }
    })
   )
}