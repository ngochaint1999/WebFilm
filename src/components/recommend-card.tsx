/** @format */

"use client";
import React, { FC } from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { Movie } from "@/types";
import Link from "next/link";

type RecommendCardProps = {
  movie: Movie;
};

const RecommendCard: FC<RecommendCardProps> = ({ movie }) => {
  return (
    <Link
      href={`/phim/${movie.slug}`}
      className="flex mb-2.5 w-full recommend-card"
    >
      {/* <Image
        src={movie.srcImg}
        alt="poster"
        className="w-20 h-[90px] overflow-hidden"
      /> */}
      <img
        src={movie.poster_url}
        alt={movie.origin_name}
        className="w-20 h-[90px] overflow-hidden object-cover"
      />
      <div className="p-2.5 text-[13px]">
        <p className="text-white mb-[5px] font-medium truncate whitespace-nowrap text-ellipsis w-40">
          {movie.name}
        </p>
        <div className="flex items-center text-gray text-ellipsis overflow-hidden  whitespace-nowrap">
          <p className="flex items-center border-gray border-[1px] px-[7px] mr-2.5">
            <FaStar className="text-base icon-rating" />
            {"7.5"}
          </p>
          <span>{movie.year}</span>
        </div>
      </div>
    </Link>
  );
};

export default RecommendCard;
