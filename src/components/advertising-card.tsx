import React, { FC } from "react";
import Image from "next/image";
import { AdvertisingMovie } from "@/types";

type AdvertisingCardProps = {
  movie: AdvertisingMovie;
};

const AdvertisingCard: FC<AdvertisingCardProps> = ({ movie }) => {
  return (
    <div className="relative w-[50%]">
      <Image src={movie.srcImg} alt="poster" className="w-full h-auto" />
      <div className="text-white absolute left-2 bottom-2">
        <p className="text-[17px]">{movie.name}</p>
        <p className="text-[13px]">{movie.yearOfRelease}</p>
      </div>
      <div className="absolute right-0 bottom-0 bg-blue pb-[5px] px-2.5">
        <span className="text-white uppercase text-[10px] tracking-wider font-medium">
          HD VIETSUB
        </span>
      </div>
    </div>
  );
};

export default AdvertisingCard;
