/** @format */

import React, { FC } from "react";
import Image from "next/image";

import { Person } from "@/types";

type PersonInforItemProps = {
  person: Person;
};

const PersonInforItem: FC<PersonInforItemProps> = ({ person }) => {
  return (
    <div className="flex items-center">
      <Image
        src={person.avt}
        alt="avt-icon"
        className="w-[60px] h-[60px] object-cover"
      />
      <div className="ml-2.5">
        <p className="text-white text-[15px] font-medium">{person.name}</p>
        <p className="text-text text-sm">{person.sub}</p>
      </div>
    </div>
  );
};

export default PersonInforItem;
