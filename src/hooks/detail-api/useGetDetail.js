import axios from "axios";
import { useQuery } from "react-query";
import { tmdbConfigs } from "../../configs/tmdb-configs";

const { apiKey, baseURL } = tmdbConfigs

const getDetail = async ({ mediaType, mediaId }) => {
    const { data } = await axios.get(`${baseURL}/${mediaType}/${mediaId}${apiKey}`)
    return data
}

export const useGetDetail = ({ mediaType, mediaId }) => {
    return (
        useQuery(['detail-page', mediaType, mediaId], () => getDetail({ mediaType, mediaId }), {
            enabled: !!mediaType && !!mediaId
        })
    )
}