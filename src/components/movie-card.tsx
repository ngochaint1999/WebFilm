"use client";
import { Movie } from "@/types";
import { FC } from "react";
import { FaPlay } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";

type MovieCardProps = {
  movie: Movie;
};

const MovieCard: FC<MovieCardProps> = ({ movie }) => {
  return (
    <Link href={""}>
      <div className="relative movie-card">
        <div className="absolute top-0 left-0 bg-[#ff2a2a] pb-[5px] px-2.5 z-50">
          <span className="uppercase text-white text-[10px] tracking-wider font-medium">
            Nổi bật
          </span>
        </div>
        <Image src={movie.origin_url} alt="poster" className="image-movie" />

        <div className="absolute left-2 bottom-2 bg-blue pb-[5px] px-2.5">
          <span className="text-white uppercase text-[10px] tracking-wider font-medium">
            HD VIETSUB
          </span>
        </div>
        <div className="btn-play">
          <FaPlay className="text-white text-5xl" />
        </div>
      </div>

      <h3 className="my-1.5 gap-5 md:my-3">
        <span className="hover:text-primary duration-150 text-sm font-bold truncate text-white">
          <abbr title={movie.name} className="no-underline">
            {movie.name}
          </abbr>
        </span>
        <span className="text-[#7d7d7d] text-sm font-medium hidden md:block">
          {movie.yearOfRelease}
        </span>
      </h3>
    </Link>
  );
};

export default MovieCard;
