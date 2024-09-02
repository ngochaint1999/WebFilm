/** @format */

import IntroduceCard from "@/components/introduce-card";
import MovieDetail from "@/components/movie-detail";
import Summary from "@/components/summary";
import Link from "next/link";
import { notFound } from "next/navigation";
import MovieCategory from "@/components/movie-category";
import Introduce from "@/assets/introduce.jpg";
import React from "react";
import OnePiece from "@/assets/one-piece.jpg";
import Thumbnail from "@/assets/movie.jpg";
import { RecommendMovie } from "@/types";
import RecommendCard from "@/components/recommend-card";
export const revalidate = 3600;

type MovieContext = {
  params: { id: string };
};

export default async function Movie(context: MovieContext) {
  const {
    params: { id },
  } = context;
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
  ];

  const RecommendData: RecommendMovie[] = [
    {
      _id: "1",
      name: "Nam Lai Bắc Vãng",
      yearOfRelease: "2023",
      rating: "4.9",
      srcImg: Thumbnail,
    },
    {
      _id: "2",
      name: "Nam Lai Bắc Vãng",
      yearOfRelease: "2023",
      rating: "4.9",
      srcImg: Thumbnail,
    },
    {
      _id: "3",
      name: "Nam Lai Bắc Vãng",
      yearOfRelease: "2023",
      rating: "4.9",
      srcImg: Thumbnail,
    },
    {
      _id: "4",
      name: "Nam Lai Bắc Vãng",
      yearOfRelease: "2023",
      rating: "4.9",
      srcImg: Thumbnail,
    },
    {
      _id: "5",
      name: "Nam Lai Bắc Vãng",
      yearOfRelease: "2023",
      rating: "4.9",
      srcImg: Thumbnail,
    },
    {
      _id: "6",
      name: "Nam Lai Bắc Vãng",
      yearOfRelease: "2023",
      rating: "4.9",
      srcImg: Thumbnail,
    },
  ];
  return (
    <React.Fragment>
      <div className="lg:flex justify-between block">
        <div className="w-full md:basis-2/3 lg:basis-2/3 xl:basis-2/3 2xl:basis-2/3 h-full border-r-[1px] border-gray p-[30px] pl-[-30px]">
          <MovieDetail />
          <Summary
            content="Tóm tắt
        Vụ Sơn Phái và Yêu Tộc vì ân oán từ hàng trăm năm trước mà không ngừng xung đột. Bạch Hồ Tố Tố được giao nhiệm vụ xâm nhập vào Vụ Sơn Phái để cướp lấy viên Đan Luyện Yêu mà Chưởng môn Vụ Sơn Phái An Xích Tiêu đã nỗ lực nghiên cứu để tẩy sạch yêu khí. Tuy nhiên, tai nạn bất ngờ ập tới, Tố Tố đã hấp thụ viên Đan Luyện Yêu, sức mạnh trong cơ thể bị loạn lạc, đánh mất trí nhớ. Cô được thần y Vô Ưu Trại là Hà An Sinh cứu sống. Trong hành trình tìm kiếm danh tính và ký ức, Hà Anh Sinh hiền lành thật thà và cô nương thân thế bí ẩn là Tiểu Bạch (Tố Tố) dần phải lòng nhau. Trong khi đó, viên Đan Luyện Yêu trong cơ thể Tố Tố lại đang tiến tới ranh giới mất kiểm soát. Liệu danh tính thực sự của Tố Tố sẽ bị tiết lộ? Người và yêu có thể đi chung một con đường? Và liệu sau hàng nghìn năm xa cách, giữa người và yêu có được hòa bình chăng?"
          />
        </div>
        <div className="md:block md:basis-1/3 p-[30px]">
          <p className="text-[17px] text-whiteLight mb-[15px]">Năm phát hành</p>
          <div className="grid grid-rows-4 grid-flow-col gap-2">
            {yearData.map((item) => (
              <Link
                href={""}
                key={item._id}
                className="flex justify-center text-[13px] bg-primary text-whiteLight py-1 hover:bg-blue hover:text-white"
              >
                {item.title}
              </Link>
            ))}
          </div>

          <IntroduceCard srcImg={Introduce} name="Độc chiến 2" year="2023" />
          {RecommendData.map((item, index) => (
            <RecommendCard key={index} movie={item} />
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}
