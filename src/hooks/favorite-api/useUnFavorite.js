import { privateRequest } from "../../axios/RequestMethod";
import { useMutation, useQueryClient } from "react-query";

const unFavorite = async ({ mediaId, mediaType }) => {
  return await privateRequest.delete(`/favorite/${mediaId}/${mediaType}`);
};

export const useUnFavorite = () => {
  const queryClient = useQueryClient()
  return useMutation(unFavorite, {
    onSuccess: () => {
      queryClient.invalidateQueries("singlefavorite");
      queryClient.invalidateQueries("allfavorite")
    }
  });
};
