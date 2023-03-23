import axios from "axios";
import { useInfiniteQuery } from "react-query";
import { tmdbConfigs } from "../../configs/tmdb-configs";

const { baseURL, apiKey } = tmdbConfigs;

const getInfiniteTv = async ({ pageParam, mediaCategory }) => {
  const { data } = await axios.get(
    `${baseURL}/tv/${mediaCategory}${apiKey}&page=${pageParam}`
  );

  return data;
};

export const useGetInfiniteTv = ({ pageParam, mediaCategory }) => {
  return useInfiniteQuery(
    ["infinite-tv", pageParam, mediaCategory],
    ({ pageParam = 1 }) => getInfiniteTv({ pageParam, mediaCategory }),
    {
      getNextPageParam: (lastPage, pages) => {
        if (lastPage.page < lastPage.total_pages) return lastPage.page + 1;
        return false;
      },
      enabled: !!pageParam && !!mediaCategory,
    }
  );
};
