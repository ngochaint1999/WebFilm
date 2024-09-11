/** @format */

import MovieDetail from "@/components/movie-detail";

import { notFound } from "next/navigation";
import ShareBtn from "@/components/share-btn";
import MovieNew from "@/components/movie-new";
import React from "react";

import RightContent from "@/components/right-content";
import { useFetchConfig } from "@/hooks/useFetch";
import { Category } from "@/types";

export const revalidate = 3600;

type MovieContext = {
  params: { id: string };
};

export default async function Movie(context: MovieContext) {
  const {
    params: { id },
  } = context;

  const [{ data }, recentUpdateMovies] = await Promise.all([
    useFetchConfig(`/v1/api/phim/${id}`),
    useFetchConfig("/v1/api/danh-sach/phim-moi").then(({ data }) =>
      data.items.filter((item: Category) => item.slug !== id)
    ),
  ]);
  if (!data.item) return notFound();
  return (
    <React.Fragment>
      <div className="lg:flex justify-between block">
        <div className="w-full md:basis-2/3 lg:basis-2/3 xl:basis-2/3 2xl:basis-2/3 h-full border-r-[1px] border-gray p-[30px] pl-[-30px]">
          <MovieDetail movie={data.item} />

          <hr className="border border-gray mt-2.5" />
          <ShareBtn amount={11} />
          <hr className="border border-gray" />
          <MovieNew title="Phim mới" movies={recentUpdateMovies} />
        </div>
        <div className="md:block md:basis-1/3 p-[30px]">
          <RightContent />
        </div>
      </div>
    </React.Fragment>
  );
}
