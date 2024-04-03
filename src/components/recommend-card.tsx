import React, { FC } from "react";
import Image from "next/image";

import { RecommendMovie } from "@/types";

type RecommendCardProps = {
  movie: RecommendMovie;
};

const RecommendCard: FC<RecommendCardProps> = ({ movie }) => {
  return (
    <div className="bg-primary flex items-center mb-2.5 w-[300px]">
      <Image src={movie.srcImg} alt="poster" className="w-20 h-auto" />
      <div className="p-2.5">
        <p className="text-white">{movie.name}</p>
        <div>
          <span className="text-gray">{movie.yearOfRelease}</span>
        </div>
      </div>
    </div>
  );
};

export default RecommendCard;
