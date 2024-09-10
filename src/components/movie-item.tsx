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
    <Link href={`/movies/${movie.slug}`} className="flex">
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
      <hr className="border border-gray mt-2.5" />
    </Link>
  );
};

export default MovieItem;
