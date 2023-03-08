import axios from "axios";
import { useQuery } from "react-query";
import { tmdbConfigs } from "../../configs/tmdb-configs";

const { baseURL, apiKey } = tmdbConfigs

const getGenresMovie = async () => {
    const { data } = await axios.get(`${baseURL}/genre/movie/list${apiKey}`)
    return data
}


export const useGetGenreName = () => {
    return useQuery(['genres'], getGenresMovie,)
}