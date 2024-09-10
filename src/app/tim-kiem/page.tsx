/** @format */

import { useFetch } from "@/hooks";

import { Movie } from "@/types";
import { notFound } from "next/navigation";
import { Pagination } from "@/components/pagination";
import MovieItem from "@/components/movie-item";
import RightContent from "@/components/right-content";

type TimKiemPageProps = {
  searchParams: {
    page: string;
    q: string;
  };
};

export default async function TimKiemPage(context: TimKiemPageProps) {
  const {
    searchParams: { page = 1, q = "" },
  } = context;

  const { data } = await useFetch(`/v1/api/tim-kiem?keyword=${q}&page=${page}`);
  if (!data) return notFound();
  return (
    <main>
      <div className="lg:flex justify-between block">
        <div className="md:basis-2/3 lg:basis-2/3 xl:basis-2/3 2xl:basis-2/3 h-full border-r-[1px] border-gray p-[30px]">
          <h2 className="mt-10 capitalize text-xl font-bold mb-6 md:text-xl text-white pl-2.5 border-l-4 border-[#408bea]">
            {`Kết quả tìm kiếm`}
          </h2>
          {data.items.length ? (
            <div>
              {data.items.map((movie: Movie) => (
                <MovieItem movie={movie} key={movie._id} />
              ))}
              <Pagination {...data.params.pagination} />
            </div>
          ) : (
            <h5 className="font-bold text-2xl text-center min-h-screen">
              Không tìm thấy phim phù hợp
            </h5>
          )}
        </div>
        <div className="md:block md:basis-1/3 p-[30px]">
          <RightContent />
        </div>
      </div>
    </main>
  );
}
