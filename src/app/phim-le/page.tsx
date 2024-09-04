/** @format */

import { Movie } from "@/types";
import { Metadata } from "next";
import OnePiece from "@/assets/one-piece.jpg";
import { notFound } from "next/navigation";
import React from "react";
import MoviePagination from "@/components/movie-pagination";
import Advertising from "@/assets/advertising.jpg";
import { Pagination } from "@/components/pagination";

export const metadata: Metadata = {
  title: "Phim lẻ",
};

const PhimLePage = () => {
  const data: Movie[] = [
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
    {
      _id: "8",
      name: "Đảo hải tặc",
      yearOfRelease: "2023",
      origin_url: OnePiece,
    },
    {
      _id: "9",
      name: "Đảo hải tặc",
      yearOfRelease: "2023",
      origin_url: OnePiece,
    },
  ];
  if (!data) return notFound();
  return (
    <main>
      <MoviePagination movies={data} title={"Phim lẻ"} type={true} />
      <Pagination currentPage={2} totalItems={5} totalItemsPerPage={1} />
    </main>
  );
};

export default PhimLePage;
