import { useQuery } from "react-query"
import axios from "axios"
import { tmdbConfigs } from "../../configs/tmdb-configs"

const { baseURL, apiKey } = tmdbConfigs


const getTv = async ({ pageParam, mediaCategory }) => {
    console.log("axios", { pageParam, mediaCategory })
    const { data } = await axios.get(`${baseURL}/movie/${mediaCategory}${apiKey}&page=${pageParam}`)

    return data
}

export const useGetTv = ({ pageParam, mediaCategory }) => {
    console.log("useQ", { pageParam, mediaCategory })

    return (
        useQuery(['movie', mediaCategory, pageParam], () => getTv({ pageParam, mediaCategory }), {
            enabled: !!mediaCategory && !!pageParam
        })
    )
}