import {privateRequest} from "../../axios/RequestMethod.js"
import { useQuery } from "react-query"

const getAllFavorite = async() => {
    const {data} = await privateRequest.get("/favorite");

    return data
}


export const useGetAllFavorite = () => {
    return useQuery(["allfavorite"], getAllFavorite)
}