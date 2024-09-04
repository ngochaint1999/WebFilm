/** @format */

import MovieDetail from "@/components/movie-detail";
import Summary from "@/components/summary";

import { notFound } from "next/navigation";
import ShareBtn from "@/components/share-btn";
import OnePiece from "@/assets/one-piece.jpg";
import React from "react";

import MovieCategory from "@/components/movie-category";
import RightContent from "@/components/right-content";

export const revalidate = 3600;

type MovieContext = {
  params: { id: string };
};

export default async function Movie(context: MovieContext) {
  const {
    params: { id },
  } = context;

  const data = [
    {
      _id: "1",
      name: "Đảo hải tặc",
      yearOfRelease: "2023",
      origin_url: OnePiece,
    },
    {
      _id: "2",
      name: "Đảo hải tặc",
      yearOfRelease: "2023",
      origin_url: OnePiece,
    },
    {
      _id: "3",
      name: "Đảo hải tặc",
      yearOfRelease: "2023",
      origin_url: OnePiece,
    },
    {
      _id: "4",
      name: "Đảo hải tặc",
      yearOfRelease: "2023",
      origin_url: OnePiece,
    },
    {
      _id: "5",
      name: "Đảo hải tặc",
      yearOfRelease: "2023",
      origin_url: OnePiece,
    },
    {
      _id: "6",
      name: "Đảo hải tặc",
      yearOfRelease: "2023",
      origin_url: OnePiece,
    },
    {
      _id: "7",
      name: "Đảo hải tặc",
      yearOfRelease: "2023",
      origin_url: OnePiece,
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
          <hr className="border border-gray mt-2.5" />
          <ShareBtn amount={11} />
          <hr className="border border-gray" />
          <MovieCategory title="Phim mới" movies={data} isNew={true} />
        </div>
        <div className="md:block md:basis-1/3 p-[30px]">
          <RightContent />
        </div>
      </div>
    </React.Fragment>
  );
}
