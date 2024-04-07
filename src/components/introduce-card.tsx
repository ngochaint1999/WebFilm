import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";

type IntroduceCardProps = {
  srcImg: any;
  name: string;
  year: string;
};

const IntroduceCard: FC<IntroduceCardProps> = (props) => {
  const { srcImg, name, year } = props;
  return (
    <Link href={""}>
      <div className="relative mb-5 mt-[50px] w-full overflow-hidden">
        <Image
          src={srcImg}
          alt="poster"
          className="w-full h-[120px] hover:blur-[2px] ease-in duration-500 object-cover bg-top"
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
