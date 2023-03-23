import axios from "axios";
import { tmdbConfigs } from "../../configs/tmdb-configs";
import { useQuery } from "react-query";

const { baseURL, apiKey } = tmdbConfigs

const getDetailVideos = async ({ mediaType, mediaId, detailCategory }) => {
    const { data } = await axios.get(`${baseURL}/${mediaType}/${mediaId}/${detailCategory}${apiKey}&append_to_response=videos`)
    return data
}

export const useGetDetailVideos = ({ mediaType, mediaId, detailCategory }) => {
    return (
        useQuery(['videos', mediaType, mediaId, detailCategory], () => getDetailVideos({ mediaType, mediaId, detailCategory }), {
            enabled: !!mediaType && !!mediaId && !!detailCategory
        })
    )
}