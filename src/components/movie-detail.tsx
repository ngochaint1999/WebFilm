/** @format */

import React from "react";
import OnePiece from "@/assets/one-piece.jpg";
import { FaRegFaceLaughWink } from "react-icons/fa6";
import Image from "next/image";

const MovieDetail = () => {
  const data = [
    {
      _id: "1",
      name: "Phim Kịch Tính",
    },
    {
      _id: "2",
      name: "Phim Kinh Dị",
    },
    {
      _id: "3",
      name: "Phim Tâm Lý",
    },
  ];
  return (
    <div>
      <iframe
        src="https://www.youtube.com/embed/121VGOkcsUg?si=Ae9zonNIryHs8MA0"
        className="w-full aspect-video overflow-hidden bg-stone-900 rounded-md"
        scrolling="no"
        allowFullScreen
        referrerPolicy="no-referrer"
      />
      <div className="w-full max-w-7xl mx-auto flex flex-col gap-8 md:flex-row mt-5">
        <Image
          src={OnePiece}
          alt="image"
          className="aspect-[2/3] rounded w-[140px] h-auto"
        />
        <div className="w-full">
          <h2 className="text-3xl  lg:text-3xl text-white">
            {"Họa Giang Hồ: Bất Lương Soái"}
          </h2>
          <span className="text-primary font-bold text-text mt-2.5">
            {"The Story of Yuan Tiangang 2023"}
          </span>

          <div className="flex items-center gap-5 text-text mt-2.5">
            <span className="flex items-center gap-2">{"Feb. 06, 2024"}</span>
            <span className="flex items-center gap-2">
              {"86 phút" || "Đang cập nhật"}
            </span>
            <span className="flex items-center gap-2">{"China"}</span>
          </div>
          <hr className="border border-gray mt-5" />
          <div className="flex items-center mt-2.5 justify-between">
            <div className="text-text text-[27px] flex items-center">
              <p className="bg-gray rounded-[3px] w-[60px] py-2.5 text-center font-medium">
                5.5
              </p>
              <div className="ml-2.5">
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 text-[#408BEA] ms-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    className="w-5 h-5 text-[#408BEA] ms-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    className="w-5 h-5 text-[#408BEA] ms-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    className="w-5 h-5 text-[#408BEA] ms-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    className="w-5 h-5 ms-1 text-gray-300 dark:text-gray-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                </div>

                <span className="flex items-center gap-2 text-sm mt-[5px]">
                  <FaRegFaceLaughWink />
                  85 đánh giá
                </span>
              </div>
            </div>

            <div className="bg-gray rounded-[3px] py-[5px] px-[15px] text-xs text-white">
              Đánh giá của bạn: 0
            </div>
          </div>
          <hr className="border border-gray mt-2.5" />
          <div className="flex items-center gap-8 mt-[15px]">
            {data.map((item) => (
              <p key={item._id} className="text-white text-sm font-semibold ">
                {item.name}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
