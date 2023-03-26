import axios from "axios";
import { useInfiniteQuery } from "react-query";
import { tmdbConfigs } from "../../configs/tmdb-configs";

const { baseURL, apiKey } = tmdbConfigs;

const getMultiSearch = async ({ searchQuery, pageParam }) => {
  const { data } = await axios.get(
    `${baseURL}/search/multi${apiKey}&query=${searchQuery}&page=${pageParam}`
  );
  return data;
};

export const useGetMultiSearch = ({ searchQuery, pageParam }) => {
  return useInfiniteQuery(
    ["multiSearch", pageParam, searchQuery],
    ({ pageParam = 1 }) => getMultiSearch({ pageParam, searchQuery }),
    {
      getNextPageParam: (lastPage, pages) => {
        if (lastPage.page < lastPage.total_pages) return lastPage.page + 1;
        return false;
      },
      enabled: !!pageParam && !!searchQuery,
    }
  );
};
