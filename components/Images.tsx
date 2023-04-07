"use client";

import Image from "next/image";
import React from "react";
import useSWR from "swr";
import fetchImages from "./../lib/fetchImages";

type ImageType = {
  url: string;
  name: string;
};

export const Images = () => {
  const {
    data: images,
    isLoading,
    isValidating,
    mutate: refreshImages,
  } = useSWR("images", fetchImages, {
    revalidateOnFocus: false,
  });

  console.log(images);

  return (
    <div>
      <button
        className="fixed bottom-10 right-10 bg-gray-400 text-white px-5 py-3 rounded-md 
      hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400 font-bold z-20"
        onClick={() => refreshImages(images)}
      >
        {!isLoading && isValidating ? "Refreshing..." : "Refresh Images"}
      </button>

      {isLoading && (
        <p className="animate-pulse text-center pb-7 font-extralight">
          Loading AI Generated Images...
        </p>
      )}

      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 px-0 md:px-10">
        {images?.imageUrls?.map((img: ImageType) => (
          <div
            key={img.url}
            className="relative cursor-help hover:scale-[103%] transition-transform duration-200 ease-in-out md:transform-none"
          >
            <div className="absolute flex justify-center items-center w-full h-full bg-white opacity-0 hover:opacity-80 transition-opacity duration-200 z-10">
              <p className="text-center font-light text-lg p-5">
                {img.name.split("_").shift()?.slice(0, 50)?.length === 50
                  ? img.name.split("_").shift()?.slice(0, 50).concat("...")
                  : img.name.split("_").shift()}
              </p>
            </div>
            <Image
              src={img?.url}
              alt={img.name}
              width={200}
              height={200}
              className="w-full rounded-sm shadow-2xl drop-shadow-lg -z-10"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
