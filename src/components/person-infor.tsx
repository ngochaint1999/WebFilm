/** @format */

import React from "react";
import PersonInforItem from "./person-infor-item";
import Avt from "@/assets/avt.jpg";
import { Person } from "@/types";
const PerSonInfor = () => {
  const data: Person[] = [
    {
      _id: "1",
      name: "Bhumi Pednekar",
      sub: "Director",
      avt: Avt,
    },
    {
      _id: "2",
      name: "Bhumi Pednekar",
      sub: "Director",
      avt: Avt,
    },
    {
      _id: "3",
      name: "Bhumi Pednekar",
      sub: "Director",
      avt: Avt,
    },
    {
      _id: "4",
      name: "Bhumi Pednekar",
      sub: "Director",
      avt: Avt,
    },
    {
      _id: "5",
      name: "Bhumi Pednekar",
      sub: "Director",
      avt: Avt,
    },
    {
      _id: "6",
      name: "Bhumi Pednekar",
      sub: "Director",
      avt: Avt,
    },
  ];

  return (
    <React.Fragment>
      <p className="text-white font-semibold text-lg mb-[15px]">Đạo diễn</p>

      <p className="text-white font-semibold text-lg my-[15px]">Diễn viên</p>
      <div className="grid md:gap-x-8 md:gap-y-4 md:grid-cols-3 ">
        {data.map((item) => (
          <PersonInforItem person={item} key={item._id} />
        ))}
      </div>
    </React.Fragment>
  );
};

export default PerSonInfor;
