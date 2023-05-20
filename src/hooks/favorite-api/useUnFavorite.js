import { privateRequest } from "../../axios/RequestMethod";
import { useMutation } from "react-query";

const unFavorite = async ({mediaId, mediaType}) => {
  return await privateRequest.delete(`/favorite/${mediaId}/${mediaType}`);
};

export const useUnFavorite = () => {
  return useMutation(unFavorite);
};
