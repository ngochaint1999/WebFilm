/** @format */

import React from "react";
import MoviePagination from "@/components/movie-pagination";
import { Pagination } from "@/components/pagination";
import { notFound } from "next/navigation";
import { useFetchConfig } from "@/hooks/useFetch";

type PhimLePageProps = {
  searchParams: {
    page: string;
  };
};

export default async function PhimLePage(context: PhimLePageProps) {
  const {
    searchParams: { page = 1 },
  } = context;

  const { data } = await useFetchConfig(
    `/v1/api/danh-sach/phim-le?page=${page}`
  );
  if (!data) return notFound();
  return (
    <main>
      <MoviePagination
        movies={data.items}
        title={data.titlePage}
        isAdver={true}
        type={1}
      />
      <Pagination {...data.params.pagination} />
    </main>
  );
}
export async function generateMetadata(context: PhimLePageProps) {
  const {
    searchParams: { page },
  } = context;

  return {
    title: `Phim Lẻ`,
    description: `Kho phim lẻ chọn lọc chất lượng cao hay nhất. Được cập nhật liên tục để phục vụ các mọt phim.`,
    urlPath: `/phim-le`,
  };
}
