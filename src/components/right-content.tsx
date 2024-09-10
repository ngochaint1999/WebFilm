/** @format */

import Link from "next/link";
import React, { useState } from "react";
import IntroduceCard from "./introduce-card";

import Introduce from "@/assets/introduce.jpg";

import RecommendCard from "./recommend-card";

import { useFetchFloating } from "@/hooks/useFetch";
import { Movie } from "@/types";
const yearData = [
  { _id: "1", title: "2024" },
  { _id: "2", title: "2023" },
  { _id: "3", title: "2022" },
  { _id: "4", title: "2021" },
  { _id: "5", title: "2020" },
  { _id: "6", title: "2019" },
  { _id: "7", title: "2018" },
  { _id: "8", title: "2017" },
  { _id: "9", title: "2016" },
  { _id: "10", title: "2015" },
  { _id: "11", title: "2014" },
  { _id: "12", title: "2013" },
  // { _id: "13", title: "2012" },
  // { _id: "14", title: "2011" },
  // { _id: "15", title: "2010" },
];
export default async function RightContent() {
  const movies = await useFetchFloating("/danh-sach/phim-moi-cap-nhat");

  return (
    <React.Fragment>
      <p className="text-[17px] text-whiteLight mb-[15px]">Năm phát hành</p>
      <div className="grid grid-rows-4 grid-flow-col gap-2">
        {yearData.map((item) => (
          <Link
            href={`/years/${item.title}`}
            key={item._id}
            className="flex justify-center text-[13px] bg-primary text-whiteLight py-1 hover:bg-blue hover:text-white"
          >
            {item.title}
          </Link>
        ))}
      </div>

      <IntroduceCard srcImg={Introduce} name="Độc chiến 2" year="2023" />
      {movies.items.map((item: Movie, index: number) => (
        <RecommendCard movie={item} key={index} />
      ))}
    </React.Fragment>
  );
}
