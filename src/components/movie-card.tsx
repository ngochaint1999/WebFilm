/** @format */

"use client";
import { Movie } from "@/types";
import { FC, useState } from "react";
import { FaPlay } from "react-icons/fa6";
import Link from "next/link";

import { imgUrl } from "@/constants";

type MovieCardProps = {
  movie: Movie;
  isOutstanding?: boolean;
};

const MovieCard: FC<MovieCardProps> = ({ movie, isOutstanding = false }) => {
  return (
    <Link href={`/movies/${movie.slug}`}>
      <div className="relative movie-card">
        {isOutstanding && (
          <div className="absolute top-0 left-0 bg-[#ff2a2a] pb-[5px] px-2.5 z-50">
            <span className="uppercase text-white text-[10px] tracking-wider font-medium">
              Nổi bật
            </span>
          </div>
        )}

        <img
          src={
            movie.poster_url.includes(imgUrl)
              ? movie.poster_url
              : imgUrl + movie.poster_url
          }
          alt={movie.origin_name}
          className="image-movie"
        />

        {/* <div className="absolute left-2 bottom-2 bg-blue pb-[5px] px-2.5">
          <span className="text-white uppercase md:text-[10px] text-[8px] tracking-wider font-medium">
            {`${movie.quality} ${movie.lang}`}
          </span>
        </div> */}
        <div className="btn-play">
          <FaPlay className="text-white text-5xl" />
        </div>
      </div>

      <h3 className="my-1.5 gap-5 md:my-3 truncate whitespace-nowrap text-ellipsis text-white w-36">
        <span className="hover:text-primary duration-150 text-sm font-bold">
          <abbr title={movie.name} className="no-underline">
            {movie.name}
          </abbr>
        </span>
        <span className="text-[#7d7d7d] text-sm font-medium hidden md:block">
          {movie.year}
        </span>
      </h3>
    </Link>
  );
};

export default MovieCard;
