"use client";
import React, { FC } from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { RecommendMovie } from "@/types";

type RecommendCardProps = {
  movie: RecommendMovie;
};

const RecommendCard: FC<RecommendCardProps> = ({ movie }) => {
  return (
    <div className="flex mb-2.5 w-[300px] recommend-card">
      <Image
        src={movie.srcImg}
        alt="poster"
        className="w-20 h-[90px] overflow-hidden"
      />
      <div className="p-2.5 text-[13px]">
        <p className="text-white mb-[5px] font-medium">{movie.name}</p>
        <div className="flex items-center text-gray">
          <p className="flex items-center border-gray border-[1px] px-[7px] mr-2.5">
            <FaStar className="text-base icon-rating" />
            {movie.rating}
          </p>
          <span>{movie.yearOfRelease}</span>
        </div>
      </div>
    </div>
  );
};

export default RecommendCard;
