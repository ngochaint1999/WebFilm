/** @format */

import React from "react";
import OnePiece from "@/assets/one-piece.jpg";

import Image from "next/image";

const MovieDetail = () => {
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
          className="aspect-[2/3] rounded w-full max-w-[140px]"
        />
        <div className="w-full">
          <h2 className="text-3xl  lg:text-3xl text-white">
            {"Họa Giang Hồ: Bất Lương Soái"}
          </h2>
          <span className="text-primary font-bold text-text">
            {"The Story of Yuan Tiangang 2023"}
          </span>

          <div className="flex items-center gap-5 text-text">
            <span className="flex items-center gap-2">{"Feb. 06, 2024"}</span>
            <span className="flex items-center gap-2">
              {"86 phút" || "Đang cập nhật"}
            </span>
            <span className="flex items-center gap-2">{"China"}</span>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
