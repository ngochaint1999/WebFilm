/** @format */

import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { Movie } from "@/types";
import { imgUrl } from "@/constants";

type AdvertisingCardProps = {
  movie: Movie;
};

const AdvertisingCard: FC<AdvertisingCardProps> = ({ movie }) => {
  return (
    <Link href={`/movies/${movie.slug}`} className="advertising-card">
      {/* <Image
        priority
        src={movie.srcImg}
        alt="poster"
        className="advertising-image"
      /> */}
      <img
        src={
          movie.thumb_url.includes(imgUrl)
            ? movie.thumb_url
            : imgUrl + movie.thumb_url
        }
        alt={movie.origin_name}
      />
      <div className="text-white absolute left-2 bottom-2">
        <p className="text-[17px] truncate whitespace-nowrap text-ellipsis">
          {movie.name}
        </p>
        <p className="text-[13px]">{movie.year}</p>
      </div>
      {/* <div className="absolute right-0 bottom-0 bg-blue pb-[5px] px-2.5">
        <span className="text-white uppercase text-[10px] tracking-wider font-medium">
          {`${movie.quality} ${movie.lang}`}
        </span>
      </div> */}
    </Link>
  );
};

export default AdvertisingCard;
