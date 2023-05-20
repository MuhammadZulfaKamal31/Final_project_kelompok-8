import { privateRequest } from "../../axios/RequestMethod";
import { useMutation, useQueryClient } from "react-query";


const addFavorite = async (data) => {
  return await privateRequest.post("/favorite", data);
};


export const useAddFavorite = () => {
  const queryClient = useQueryClient();
  return useMutation(addFavorite, {
    onSuccess: () => {
      queryClient.invalidateQueries("singlefavorite");
      queryClient.invalidateQueries("allfavorite")
    }
  });
}