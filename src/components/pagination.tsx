/** @format */

"use client";
import Link from "next/link";
import React, { FC, useEffect, useState } from "react";
import { notFound, usePathname, useSearchParams } from "next/navigation";
import { FaCaretRight, FaCaretLeft } from "react-icons/fa6";

type PaginationProps = {
  currentPage: number;
  totalItems: number;
  totalItemsPerPage: number;
};

export const Pagination: FC<PaginationProps> = (props) => {
  const { currentPage = 1, totalItems, totalItemsPerPage } = props;
  const totalPages = Math.ceil(totalItems / totalItemsPerPage);
  const [currentRoute, setCurrentRoute] = useState<string>("");
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const q = searchParams.get("q");
    const url = q ? `${pathname}?q=${q}&` : `${pathname}?`;
    setCurrentRoute(url);
  }, [pathname]);

  if (currentPage > totalPages) notFound();

  return (
    <React.Fragment>
      <ul className="flex gap-2 mt-20 font-medium items-center justify-start pl-[30px]">
        {currentPage > 1 && (
          <Link
            href={`${currentRoute}page=${currentPage - 1}`}
            className="px-2 py-1.5 flex items-center justify-center h-[30px] rounded-[3px] text-white border border-[#000] duration-300  hover:bg-primary hover:text-[#408BEA] hover:border-primary"
          >
            <FaCaretLeft className="text-sm" />
          </Link>
        )}
        {new Array(5).fill("").map((_, idx) => {
          const page = currentPage + idx - 2;
          return (
            <div className="" key={idx}>
              {page > 0 && page <= totalPages && (
                <Link
                  href={`${currentRoute}page=${page}`}
                  className={`px-2.5 py-1.5 border border-[#000] h-[30px]  rounded-[3px] text-sm duration-300 hover:bg-primary hover:text-[#408BEA] hover:border-primary ${
                    currentPage === page
                      ? "bg-primary text-[#408BEA]"
                      : "text-white border-secondary border"
                  }`}
                >
                  {page}
                </Link>
              )}
            </div>
          );
        })}
        {currentPage < totalPages && (
          <Link
            href={`${currentRoute}page=${currentPage + 1}`}
            className="px-2 py-1.5 items-center justify-center h-[30px] rounded-[3px] text-white border border-[#000] duration-300 hover:bg-primary hover:text-[#408BEA] hover:border-primary"
          >
            <FaCaretRight className="text-sm" />
          </Link>
        )}
      </ul>
    </React.Fragment>
  );
};
