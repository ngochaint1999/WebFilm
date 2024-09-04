/** @format */

import { AdvertisingMovie, Movie } from "@/types";
import React, { FC } from "react";
import MovieCard from "./movie-card";
import RightContent from "./right-content";
import Advertising from "@/assets/advertising.jpg";
import AdvertisingSlide from "./advertising-slide";

type MoviePaginationProps = {
  movies: Movie[];
  title: string;
  type?: boolean;
};
const MoviePagination: FC<MoviePaginationProps> = (props) => {
  const { movies, title, type = false } = props;
  const AdvertisingData: AdvertisingMovie[] = [
    {
      _id: "1",
      name: "Bhakshak: Tội lỗi làm ngơ",
      yearOfRelease: "2023",
      srcImg: Advertising,
    },
    {
      _id: "2",
      name: "Bhakshak: Tội lỗi làm ngơ",
      yearOfRelease: "2023",
      srcImg: Advertising,
    },
    {
      _id: "3",
      name: "Bhakshak: Tội lỗi làm ngơ",
      yearOfRelease: "2023",
      srcImg: Advertising,
    },
    {
      _id: "4",
      name: "Bhakshak: Tội lỗi làm ngơ",
      yearOfRelease: "2023",
      srcImg: Advertising,
    },
    {
      _id: "5",
      name: "Bhakshak: Tội lỗi làm ngơ",
      yearOfRelease: "2023",
      srcImg: Advertising,
    },
    {
      _id: "6",
      name: "Bhakshak: Tội lỗi làm ngơ",
      yearOfRelease: "2023",
      srcImg: Advertising,
    },
    {
      _id: "7",
      name: "Bhakshak: Tội lỗi làm ngơ",
      yearOfRelease: "2023",
      srcImg: Advertising,
    },
    {
      _id: "8",
      name: "Bhakshak: Tội lỗi làm ngơ",
      yearOfRelease: "2023",
      srcImg: Advertising,
    },
    {
      _id: "9",
      name: "Bhakshak: Tội lỗi làm ngơ",
      yearOfRelease: "2023",
      srcImg: Advertising,
    },
  ];
  return (
    <React.Fragment>
      <div className="lg:flex justify-between block">
        <div className="md:basis-2/3 lg:basis-2/3 xl:basis-2/3 2xl:basis-2/3 h-full border-r-[1px] border-gray p-[30px]">
          <h2 className="text-3xl font-semibold  mb-6 md:text-[32px] text-center text-white heading-archive relative">
            {title !== "Tìm Kiếm" ? `Phim ${title.replace("Phim", "")}` : title}
          </h2>
          {type && <AdvertisingSlide movies={AdvertisingData} />}

          <h3 className="text-xl md:text-xl text-white pl-2.5 border-l-4 border-[#408bea] mb-[15px]">
            {`${title} mới cập nhật`}
          </h3>
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
