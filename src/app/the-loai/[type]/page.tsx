/** @format */

import MoviePagination from "@/components/movie-pagination";
import { Pagination } from "@/components/pagination";
import { baseUrl } from "@/constants";
import { useFetchConfig } from "@/hooks/useFetch";

import { notFound } from "next/navigation";

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

  const { data } = await useFetchConfig(
    `/v1/api/the-loai/${type}?page=${page}`
  );
  if (!data) return notFound();

  return (
    <main>
      <MoviePagination movies={data.items} title={data.titlePage} />
      <Pagination {...data.params.pagination} />
    </main>
  );
}
export async function generateMetadata(context: MoviesGenreContext) {
  const {
    params: { type },
    searchParams: { page },
  } = context;
  const response = await fetch(
    `${baseUrl}/v1/api/the-loai/${type}?page=${page}`
  );
  const data = await response.json();
  if (!data.data) {
    return {
      title: "Không tìm thấy",
      description: "Không tìm thấy trang này.",
      urlPath: `/the-loai/${type}`,
    };
  }
  const genre = data.data.titlePage.replace("Phim", "");
  return {
    title: `Phim ${genre}`,
    description: `Kho phim ${genre} chọn lọc chất lượng cao hay nhất. Được cập nhật liên tục để phục vụ các mọt phim.`,
    urlPath: `/the-loai/${type}`,
  };
}
