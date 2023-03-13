import React from "react";
import { useGetDetail } from "../hooks/detail-api/useGetDetail";
import { useParams } from "react-router";
import { useGetDetailCategory } from "../hooks/detail-api/useGetDetailCategory";

const DetailPage = () => {
  const { mediaType, mediaId } = useParams();
  const detailCategories = {
    credits: "credits",
    similiar: "similiar",
    images: "images",
    videos: "videos",
  };
  const {
    data: detail,
    isLoading: loadingDetail,
    isError: isErrorDetail,
    isFetching: isFetchingDetail,
  } = useGetDetail({ mediaId: mediaId, mediaType: mediaType });

  const {
    data: detailCategory,
    isLoading: loadingDetailCategory,
    isError: isErrorDetailCategory,
    isFetching: isFetchingDetailCategory,
  } = useGetDetailCategory({ mediaId: mediaId, mediaType: mediaType, detailCategory: detailCategories.credits });

  console.log({ detail });

  return (
    <div className=" w-full h-screen bg-black pt-40">
      <div>
        <h1>{detail?.name || detail?.title}</h1>
        <p>{detail?.overview}</p>
      </div>
      <div className=" flex gap-x-4">
        {detailCategory?.cast.map((cast) => {
          return (
            <>
              <h1 className=" text-white" key={cast.id}>
                {cast.name}
              </h1>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default DetailPage;
