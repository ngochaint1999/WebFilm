/** @format */

import MoviePagination from "@/components/movie-pagination";
import { Pagination } from "@/components/pagination";
import OnePiece from "@/assets/one-piece.jpg";
import { notFound } from "next/navigation";

import { Movie } from "@/types";

type MoviesGenreContext = {
  params: { type: string };
  searchParams: {
    page: string;
  };
};

export default async function MoviesGenre(context: MoviesGenreContext) {
  const {
    params: { type },
    searchParams: { page = 1 },
  } = context;

  const movieGenre: Movie[] = [
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
  ];
  if (!movieGenre) return notFound();

  return (
    <main>
      <MoviePagination movies={movieGenre} title={"Phim tình cảm"} />
      <Pagination currentPage={2} totalItems={5} totalItemsPerPage={1} />
    </main>
  );
}
