/** @format */

import MoviePagination from "@/components/movie-pagination";
import { Pagination } from "@/components/pagination";

import { notFound } from "next/navigation";

import { useFetchConfig } from "@/hooks/useFetch";
import { baseUrl } from "@/constants";

type MoviesYearContext = {
  params: { type: string };
  searchParams: {
    page: string;
  };
};

export default async function MoviesYear(context: MoviesYearContext) {
  const {
    params: { type },
    searchParams: { page = 1 },
  } = context;
  const { data } = await useFetchConfig(
    `/v1/api/danh-sach/phim-moi?year=${type}&page=${page}`
  );
  if (!data) return notFound();
  return (
    <main>
      <MoviePagination movies={data.items} title={type} />
      <Pagination currentPage={2} totalItems={5} totalItemsPerPage={1} />
    </main>
  );
}
export async function generateMetadata(context: MoviesYearContext) {
  const {
    params: { type },
    searchParams: { page },
  } = context;
  const response = await fetch(
    `${baseUrl}/v1/api/phim-moi?page=${page}&year=${type}`
  );
  const data = await response.json();
  if (!data.data) {
    return {
      title: "Not Found",
      description: "The page is not found.",
      urlPath: `/years/${type}`,
    };
  }

  return {
    title: `Phim ${type}`,
    description: `Kho phim ${type} chọn lọc chất lượng cao hay nhất. Được cập nhật liên tục để phục vụ các mọt phim.`,
    urlPath: `/years/${type}`,
  };
}
