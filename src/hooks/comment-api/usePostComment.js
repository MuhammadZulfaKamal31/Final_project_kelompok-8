import {useMutation} from "react-query";
import { privateRequest } from "../../axios/RequestMethod";
import { useQueryClient } from "react-query";

const postComment = async(data) => {
    return await privateRequest.post("/comment", data)
}

export const usePostComment = () => {
    const queryClient = useQueryClient();
    return useMutation(postComment, {
        onSuccess: () => queryClient.invalidateQueries("getComment")
    })
}

