/** @format */

import React, { FC } from "react";
import Link from "next/link";
import { Movie } from "@/types";
import { imgUrl } from "@/constants";

type MovieCardProps = {
  movie: Movie;
};
const MovieItem: FC<MovieCardProps> = ({ movie }) => {
  return (
    <Link href={`/movies/${movie.slug}`}>
      <div className="relative flex mt-2.5">
        <div
          className={`absolute top-0 left-0 ${
            movie.type === "single" ? "bg-[#06ad0c]" : "bg-[#ff2a2a]"
          }  pb-[5px] px-2.5`}
        >
          <span className="text-white text-[10px] tracking-wider font-medium">
            {movie.type === "single" ? "Phim lẻ" : "Phim bộ"}
          </span>
        </div>
        <img
          src={imgUrl + movie.poster_url}
          alt={movie.origin_name}
          className="image-movie-item"
          width={110}
          height={110}
        />
        <div className="pl-[15px]">
          <h3 className="text-text font-semibold">{movie.name}</h3>
          <p className="text-text">{movie.year}</p>
        </div>
      </div>

      <hr className="border border-gray mt-2.5" />
    </Link>
  );
};

export default MovieItem;
