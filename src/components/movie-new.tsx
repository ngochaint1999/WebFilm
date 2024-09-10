/** @format */
"use client";
import { Movie } from "@/types";
import React, { FC, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import MovieCard from "./movie-card";
type MovieNewProps = {
  movies: Movie[];
  title?: string;
  slidesPerView?: number;
};

const MovieNew: FC<MovieNewProps> = (props) => {
  const { title, movies, slidesPerView = 6 } = props;
  const swiperRef = useRef<SwiperCore>();
  return (
    <div className="max-w-[800px] mt-[30px]">
      <h3 className="text-lg md:text-lg text-white font-semibold">{title}</h3>
      <Swiper
        loop={true}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          0: {
            spaceBetween: 10,
            slidesPerView: 3,
          },
          440: {
            spaceBetween: 10,
            slidesPerView: 3,
          },
          992: {
            spaceBetween: 10,
            slidesPerView: 3,
          },
          640: {
            spaceBetween: 10,
            slidesPerView: 3,
          },
          1024: {
            spaceBetween: 25,
            slidesPerView,
          },
        }}
      >
        {movies.map((item) => (
          <SwiperSlide key={item._id}>
            <MovieCard movie={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MovieNew;
