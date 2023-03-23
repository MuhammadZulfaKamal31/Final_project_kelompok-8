import React, { useState } from "react";
import Backdrop from "../components/Backdrop";
import { useGetTv } from "../hooks/tv-api/useGetTv";

import { useGetGenreTv } from "../hooks/tv-api/useGetGenreTv";

const TvPage = () => {
  const mediaType = "tv";
  const [category, setCategory] = useState("popular");
  const { data, isError, error, isLoading, isFetching } = useGetTv({
    mediType: mediaType,
    pageParam: 1,
    mediaCategory: category,
  });

  const { data: genreTv } = useGetGenreTv();
  return (
    <div className=" w-full h-full">
      <Backdrop
        mediaType={mediaType}
        data={data}
        isError={isError}
        isLoading={isLoading}
        isFetching={isFetching}
        error={error}
        genre={genreTv}
      />
    </div>
  );
};

export default TvPage;
