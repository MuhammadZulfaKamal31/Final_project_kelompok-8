import { privateRequest } from "../../axios/RequestMethod";
import { useQuery } from "react-query";

const getSingleFavorite = async({mediaId , mediaType}) => {
    const {data} = await privateRequest.get(`/favorite/${mediaId}/${mediaType}`);
    return data;
}

export const useGetSingleFavorite = ({mediaId, mediaType}) => {
    return useQuery(["singlefavorite",mediaId , mediaType] , () => getSingleFavorite({mediaId, mediaType}), {
        enabled : !! mediaId && !! mediaType    })

}