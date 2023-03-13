import axios from "axios";
import { useQuery } from "react-query"
import { tmdbConfigs } from "../../configs/tmdb-configs";

const { baseURL, apiKey } = tmdbConfigs

const getGenreTv = async () => {
    const { data } = await axios.get(`${baseURL}/genre/tv/list${apiKey}`)
    return data
}

export const useGetGenreTv = () => {
    return useQuery(['genre-tv'], getGenreTv)
}
