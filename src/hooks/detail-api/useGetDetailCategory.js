import axios from "axios";
import { useQuery } from "react-query";
import { tmdbConfigs } from "../../configs/tmdb-configs";
const { apiKey, baseURL } = tmdbConfigs

const getDetailCategory = async ({ mediaType, mediaId, detailCategory }) => {
    const { data } = await axios.get(`${baseURL}/${mediaType}/${mediaId}/${detailCategory}${apiKey}`)
    return data
}

export const useGetDetailCategory = ({ mediaType, mediaId, detailCategory }) => {
    return (
        useQuery(['detail-page', mediaType, mediaId, detailCategory], () => getDetailCategory({ mediaType, mediaId, detailCategory }), {
            enabled: !!mediaType && !!mediaId && !!detailCategory
        })
    )
}