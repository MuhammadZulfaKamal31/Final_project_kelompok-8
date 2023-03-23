import axios from "axios"
import { useQuery } from "react-query"
import { tmdbConfigs } from "../../configs/tmdb-configs"

const { baseURL, apiKey } = tmdbConfigs

const getMovies = async ({ pageParam, mediaCategory }) => {

    const { data } = await axios.get(`${baseURL}/movie/${mediaCategory}${apiKey}&page=${pageParam}`)

    return data
}


export const useGetMovies = ({ pageParam, mediaCategory }) => {


    return (
        useQuery(['movie', mediaCategory, pageParam], () => getMovies({ pageParam, mediaCategory }), {
            enabled: !!mediaCategory && !!pageParam
        })
    )
}

