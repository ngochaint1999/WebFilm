"use client";
import { FC, useRef } from "react";

import { FaCaretRight, FaCaretLeft } from "react-icons/fa6";
import Link from "next/link";
import MovieCard from "@/components/movie-card";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Movie } from "@/types";

type MovieCategoryProps = {
  movies: Movie[];
  title?: string;
  slidesPerView?: number;
};

const MovieCategory: FC<MovieCategoryProps> = (props) => {
  const { title, movies, slidesPerView = 5 } = props;

  const swiperRef = useRef<SwiperCore>();

  return (
    <div className="max-w-[800px] mt-[30px]">
      <div className="md:flex items-center justify-between mb-6 block">
        <h3 className="text-xl md:text-xl text-white pl-2.5 border-l-4 border-[#408bea]">
          {title}
        </h3>
        <div className="flex items-center justify-end">
          <Link
            href={""}
            className="text-white text-[10px] uppercase bg-blue font-light py-[3px] px-2 rounded mr-2.5 text-center"
          >
            Xem thêm
          </Link>
          <div className="flex items-center  text-white">
            <button
              className="py-1.5"
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <FaCaretLeft className="text-2xl" />
            </button>

            <button
              className="py-1.5"
              onClick={() => swiperRef.current?.slideNext()}
            >
              <FaCaretRight className="text-2xl" />
            </button>
          </div>
        </div>
      </div>
      <Swiper
        loop={true}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        breakpoints={{
          0: {
            spaceBetween: 10,
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
          440: {
            spaceBetween: 10,
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
          992: {
            spaceBetween: 10,
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
          640: {
            spaceBetween: 10,
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
          1024: {
            spaceBetween: 25,
            slidesPerView,
            slidesPerGroup: slidesPerView,
          },
        }}
      >
        {movies.map((item) => (
          <SwiperSlide key={item._id}>
            <MovieCard movie={item} />
          </SwiperSlide>
        ))}
      </Swiper>
      <hr className="text-gray mt-5" />
    </div>
  );
};

export default MovieCategory;
