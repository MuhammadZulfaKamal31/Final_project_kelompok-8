import { privateRequest } from "../../axios/RequestMethod";
import { useQuery } from "react-query";


const getComment = async({mediaType, mediaId}) => {
    const {data} = await privateRequest.get(`/comment/${mediaType}/${mediaId}`)
    return data
}

export const useGetComment = ({mediaType, mediaId}) => {
    return (
        useQuery(["getComment", mediaType, mediaId], () => getComment({mediaType, mediaId}), {
            enabled: !!mediaType && !!mediaId
        })
    )
}