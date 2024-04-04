import React, { FC } from "react";
import Image from "next/image";

type IntroduceCardProps = {
  srcImg: any;
  name: string;
  year: string;
};

const IntroduceCard: FC<IntroduceCardProps> = (props) => {
  const { srcImg, name, year } = props;
  return (
    <div className="relative mb-5">
      <Image
        src={srcImg}
        alt="poster"
        className="w-[300px] h-auto hover:blur-[2px] ease-in duration-500"
      />
      <div className="absolute left-2 bottom-2">
        <p className="text-white">{name}</p>
        <p className="text-whiteLight">{year}</p>
      </div>
    </div>
  );
};

export default IntroduceCard;
