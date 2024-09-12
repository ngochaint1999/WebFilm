/** @format */

import MoviePagination from "@/components/movie-pagination";
import { Pagination } from "@/components/pagination";

import { notFound } from "next/navigation";
import { useFetchConfig } from "@/hooks/useFetch";
import { baseUrl } from "@/constants";

type MoviesCountryContext = {
  params: { type: string };
  searchParams: {
    page: string;
  };
};

export default async function MoviesCountry(context: MoviesCountryContext) {
  const {
    params: { type },
    searchParams: { page = 1 },
  } = context;

  const { data } = await useFetchConfig(
    `/v1/api/quoc-gia/${type}?page=${page}`
  );
  if (!data) return notFound();

  return (
    <main>
      <MoviePagination movies={data.items} title={data.titlePage} />
      <Pagination {...data.items.pagination} />
    </main>
  );
}
export async function generateMetadata(context: MoviesCountryContext) {
  const {
    params: { type },
    searchParams: { page },
  } = context;
  const response = await fetch(
    `${baseUrl}/v1/api/quoc-gia/${type}?page=${page}`
  );
  const data = await response.json();
  if (!data.data) {
    return {
      title: "Không tìm thấy",
      description: "Không tìm thấy trang này.",
      urlPath: `/quoc-gia/${type}`,
    };
  }

  return {
    title: `Phim ${data.data.titlePage}`,
    description: `Kho phim ${data.data.titlePage} chọn lọc chất lượng cao hay nhất. Được cập nhật liên tục để phục vụ các mọt phim.`,
    urlPath: `/quoc-gia/${type}`,
  };
}
