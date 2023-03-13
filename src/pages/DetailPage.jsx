import React from "react";
import { useGetDetail } from "../hooks/detail-api/useGetDetail";
import { useParams } from "react-router";

const DetailPage = () => {
  const { mediaType, mediaId } = useParams();
  const {
    data: detail,
    isLoading: loadingDetail,
    isError: isErrorDetail,
    isFetching: isFetchingDetail,
  } = useGetDetail({ mediaId: mediaId, mediaType: mediaType });

  return <div>DetailPage</div>;
};

export default DetailPage;
