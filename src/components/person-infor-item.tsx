/** @format */

import React, { FC } from "react";
import Image from "next/image";

type PersonInforItemProps = {
  avt?: string;
  name: string;
};

const PersonInforItem: FC<PersonInforItemProps> = ({ avt, name }) => {
  return (
    <div className="flex items-center">
      {/* <Image
        src={avt}
        alt="avt-icon"
        className="w-[60px] h-[60px] object-cover"
      /> */}
      <div className="ml-2.5">
        <p className="text-white text-[15px] font-medium">{name}</p>
      </div>
    </div>
  );
};

export default PersonInforItem;
