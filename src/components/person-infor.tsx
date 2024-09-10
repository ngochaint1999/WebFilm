/** @format */

import React, { FC } from "react";
import PersonInforItem from "./person-infor-item";
import Avt from "@/assets/avt.jpg";
import { Detail, Person } from "@/types";

type PersonInforProps = {
  movie: Detail;
};

const PerSonInfor: FC<PersonInforProps> = ({ movie }) => {
  return (
    <React.Fragment>
      <p className="text-white font-semibold text-lg mb-[15px] mt-5">
        Đạo diễn
      </p>
      <div className="grid md:gap-x-8 md:gap-y-4 md:grid-cols-3 ">
        {movie.director.map((item, index) => (
          <PersonInforItem name={item} key={index} />
        ))}
      </div>

      <p className="text-white font-semibold text-lg my-[15px]">Diễn viên</p>
      <div className="grid md:gap-x-8 md:gap-y-4 md:grid-cols-3">
        {movie.actor.map((item, index) => (
          <PersonInforItem name={item} key={index} />
        ))}
      </div>
    </React.Fragment>
  );
};

export default PerSonInfor;
