import axios from 'axios'
import { useInfiniteQuery } from 'react-query'
import { tmdbConfigs } from '../../configs/tmdb-configs'


const { baseURL, apiKey } = tmdbConfigs

const getInfiniteMovie = async ({ pageParam, mediaCategory }) => {
  const { data } = await axios.get(`${baseURL}/movie/${mediaCategory}${apiKey}&page=${pageParam}`)

  return data;
}

export const useGetInfiniteMovies = ({ pageParam, mediaCategory }) => {
  return (
    useInfiniteQuery(["infinite-movie", pageParam, mediaCategory], ({ pageParam = 1 }) => getInfiniteMovie({ pageParam, mediaCategory }), {
      getNextPageParam: (lastPage, pages) => {
        if (lastPage.page < lastPage.total_pages) return lastPage.page + 1
        return false
      },
      enabled: !!pageParam && !!mediaCategory
    })
  )
}