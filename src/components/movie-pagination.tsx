/** @format */

import { Movie } from "@/types";
import React, { FC } from "react";
import MovieCard from "./movie-card";
import RightContent from "./right-content";

import AdvertisingSlide from "./advertising-slide";
import { useFetch } from "@/hooks";

type MoviePaginationProps = {
  movies: Movie[];
  title: string;
  isAdver?: boolean;
  type?: number;
};
export default async function MoviePagination(props: MoviePaginationProps) {
  const { movies, title, type, isAdver = false } = props;
  const movieData = await Promise.all([
    useFetch("/v1/api/danh-sach/phim-le"),
    useFetch("/v1/api/danh-sach/phim-bo"),
  ]);

  return (
    <React.Fragment>
      <div className="lg:flex justify-between block">
        <div className="md:basis-2/3 lg:basis-2/3 xl:basis-2/3 2xl:basis-2/3 h-full border-r-[1px] border-gray p-[30px]">
          <h2 className="text-3xl font-semibold  mb-6 md:text-[32px] text-center text-white heading-archive relative">
            {title !== "Tìm Kiếm" ? `Phim ${title.replace("Phim", "")}` : title}
          </h2>
          {isAdver && (
            <div className="mb-5">
              <AdvertisingSlide
                movies={
                  type === 1 ? movieData[0].data.items : movieData[1].data.items
                }
              />
            </div>
          )}

          <h3 className="text-xl md:text-xl text-white pl-2.5 border-l-4 border-[#408bea] mb-[15px]">
            {`${title} mới cập nhật`}
          </h3>
          <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 md:gap-x-6 lg:grid-cols-5 lg:gap-x-6 lg:gap-y-14">
            {movies.map((movie: Movie) => (
              <MovieCard movie={movie} key={movie._id} />
            ))}
          </div>
        </div>
        <div className="md:block md:basis-1/3 p-[30px]">
          <RightContent />
        </div>
      </div>
    </React.Fragment>
  );
}
