"use client";
import React, { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import AdvertisingCard from "@/components/advertising-card";
import { Pagination } from "swiper/modules";
import { AdvertisingMovie } from "@/types";

type AdvertisingSlideProps = {
  movies: AdvertisingMovie[];
  slidesPerView?: number;
};
const AdvertisingSlide: FC<AdvertisingSlideProps> = ({
  movies,
  slidesPerView = 2,
}) => {
  return (
    <div className="max-w-[800px] mx-auto">
      <Swiper
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          0: {
            spaceBetween: 15,
            slidesPerView: 1,
            slidesPerGroup: 1,
          },
          576: {
            spaceBetween: 10,
            slidesPerView: 1,
            slidesPerGroup: 1,
          },
          640: {
            spaceBetween: 10,
            slidesPerView: 1,
            slidesPerGroup: 1,
          },
          1024: {
            spaceBetween: 25,
            slidesPerView,
            slidesPerGroup: slidesPerView,
          },
        }}
        modules={[Pagination]}
      >
        {movies.map((item) => (
          <SwiperSlide key={item._id}>
            <AdvertisingCard movie={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default AdvertisingSlide;
