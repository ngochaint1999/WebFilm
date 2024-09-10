/** @format */

import React from "react";
import MoviePagination from "@/components/movie-pagination";
import { Pagination } from "@/components/pagination";
import { notFound } from "next/navigation";
import { useFetch } from "@/hooks";

type PhimBoPageProps = {
  searchParams: {
    page: string;
  };
};

export default async function PhimBoPage(context: PhimBoPageProps) {
  const {
    searchParams: { page = 1 },
  } = context;

  const { data } = await useFetch(
    `/v1/api/danh-sach/phim-bo?page=${page}&limit=30`
  );
  if (!data) return notFound();

  return (
    <main>
      <MoviePagination
        movies={data.items}
        title={data.titlePage}
        isAdver={true}
        type={2}
      />
      <Pagination {...data.params.pagination} />
    </main>
  );
}
export async function generateMetadata(context: PhimBoPageProps) {
  const {
    searchParams: { page },
  } = context;

  return {
    title: `Phim Bộ`,
    description: `Kho phim bộ chọn lọc chất lượng cao hay nhất. Được cập nhật liên tục để phục vụ các mọt phim.`,
    urlPath: `/phim-bo`,
  };
}
