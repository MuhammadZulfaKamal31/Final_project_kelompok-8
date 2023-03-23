import { useQuery } from "react-query"
import axios from "axios"
import { tmdbConfigs } from "../../configs/tmdb-configs"

const { baseURL, apiKey } = tmdbConfigs


const getTv = async ({ mediType, pageParam, mediaCategory }) => {
    const { data } = await axios.get(`${baseURL}/${mediType}/${mediaCategory}${apiKey}&page=${pageParam}`)

    return data
}

export const useGetTv = ({ mediType, pageParam, mediaCategory }) => {
    return (
        useQuery(['tv', mediType, mediaCategory, pageParam], () => getTv({ mediType, pageParam, mediaCategory }), {
            enabled: !!mediType && !!mediaCategory && !!pageParam
        })
    )
}