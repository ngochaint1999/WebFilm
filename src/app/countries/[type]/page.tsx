/** @format */

import MoviePagination from "@/components/movie-pagination";
import { Pagination } from "@/components/pagination";
import { Movie } from "@/types";
import { notFound } from "next/navigation";
import OnePiece from "@/assets/one-piece.jpg";

type MoviesCountryContext = {
  params: { type: string };
  searchParams: {
    page: string;
  };
};
const movieCountries: Movie[] = [
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
];

export default async function MoviesCountry(context: MoviesCountryContext) {
  const {
    params: { type },
    searchParams: { page = 1 },
  } = context;

  if (!movieCountries) return notFound();
  return (
    <main>
      <MoviePagination movies={movieCountries} title={"Phim Hàn Quốc"} />
      <Pagination currentPage={2} totalItems={5} totalItemsPerPage={1} />
    </main>
  );
}
export async function generateMetadata(context: MoviesCountryContext) {
  const {
    params: { type },
    searchParams: { page },
  } = context;

  if (!movieCountries) {
    return {
      title: "Not Found",
      description: "The page is not found.",
      url: `/countries/han-quoc`,
    };
  }

  return {
    title: `Phim Hàn Quốc`,
    description: `Phim Hàn Quốc - Tuyển tập danh sách phim Hàn Quốc hay nhất mọi thời đại vietsub và thuyết minh nhanh nhất.`,
    url: `/countries/han-quoc`,
  };
}
