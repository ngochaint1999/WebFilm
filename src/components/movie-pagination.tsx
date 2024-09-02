/** @format */

import { Movie } from "@/types";
import React, { FC } from "react";
import MovieCard from "./movie-card";
import RightContent from "./right-content";

type MoviePaginationProps = {
  movies: Movie[];
  title: string;
};
const MoviePagination: FC<MoviePaginationProps> = (props) => {
  const { movies, title } = props;

  return (
    <React.Fragment>
      <div className="lg:flex justify-between block">
        <div className="md:basis-2/3 lg:basis-2/3 xl:basis-2/3 2xl:basis-2/3 h-full border-r-[1px] border-gray p-[30px]">
          <h2 className="text-3xl font-semibold  mb-6 md:text-[32px] text-center text-white heading-archive relative">
            {title !== "Tìm Kiếm" ? `Phim ${title.replace("Phim", "")}` : title}
          </h2>

          <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 md:gap-x-6 lg:grid-cols-4 lg:gap-x-6 lg:gap-y-14">
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
};

export default MoviePagination;
