/** @format */

import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";

type IntroduceCardProps = {
  srcImg: any;
  name: string;
  year: string;
  path: string;
};

const IntroduceCard: FC<IntroduceCardProps> = (props) => {
  const { srcImg, name, year, path } = props;
  return (
    <Link href={`/movies/${path}`}>
      <div className="relative mb-5 mt-[50px] w-full overflow-hidden">
        <img
          src={srcImg}
          alt="poster"
          className="w-full h-[120px] hover:blur-[2px] ease-in duration-500 object-cover bg-top"
          width={100}
          height={100}
        />
        <div className="absolute left-2 bottom-2">
          <p className="text-white">{name}</p>
          <p className="text-whiteLight">{year}</p>
        </div>
      </div>
    </Link>
  );
};

export default IntroduceCard;
