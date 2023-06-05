import { privateRequest } from "../../axios/RequestMethod";
import { useMutation, useQueryClient } from "react-query";



const deleteComment = async (commentId) => {
    return await privateRequest.delete(`/comment/${commentId}`)
}

export const useDeleteComment = () => {
    const queryClient = useQueryClient()
    return useMutation(deleteComment, {
        onSuccess: () => queryClient.invalidateQueries('getComment')
    })
}