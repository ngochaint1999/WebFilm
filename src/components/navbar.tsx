/** @format */
"use client";
import Link from "next/link";
import React, { SyntheticEvent, useEffect, useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";
import NavbarMobile from "./navbar-mobile";
import { Category } from "@/types";

import { useRouter } from "next-nprogress-bar";

import { useFetchConfig } from "@/hooks/useFetch";

const Navbar = () => {
  const [genres, setGenres] = useState<Category[]>([]);
  const [countries, setCountries] = useState<Category[]>([]);
  const [isCopy, setIsCopy] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>("");
  const inputRef = useRef<any>();
  const router = useRouter();
  const handleSearch = (e: SyntheticEvent) => {
    e.preventDefault();
    router.push(`/tim-kiem?q=${searchValue.replace(/\s+/g, "+")}`);
  };
  useEffect(() => {
    (async () => {
      const [{ data: genresData }, { data: countriesData }] = await Promise.all(
        [useFetchConfig("/v1/api/the-loai"), useFetchConfig("/v1/api/quoc-gia")]
      );
      setGenres(genresData.items);
      setCountries(countriesData.items);
    })();
  }, []);

  useEffect(() => {
    if (!isCopy) return;
    const timeout = setTimeout(() => {
      setIsCopy(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, [isCopy]);
  return (
    <header className="border-b border-black py-4 px-4 sm:px-10 bg-primary w-full fixed top-0  right-0 flex items-center z-50 min-h-[72.5px]">
      <div className="flex flex-wrap justify-between items-center gap-x-2 max-lg:gap-y-6 container !w-full mx-auto">
        <div className="flex items-center">
          <p className="text-white">Logo</p>
          <div
            id="collapseMenu"
            className="lg:ml-14 lg:space-x-5 max-lg:space-y-2 max-lg:hidden max-lg:py-4 max-lg:w-full lg:flex hidden"
          >
            <Link
              className="text-white/80 hover:text-sky-600 block font-semibold text-[15px]"
              href={"/"}
            >
              Phimmoi
            </Link>
            <Link
              className="text-white/80 hover:text-sky-600 block font-semibold text-[15px]"
              href={"/phim-le"}
            >
              Phim lẻ
            </Link>
            <Link
              className="text-white/80 hover:text-sky-600 block font-semibold text-[15px]"
              href={"/phim-bo"}
            >
              Phim bộ
            </Link>
            <span className="text-white/80 hover:text-sky-600 block font-semibold text-[15px] relative group">
              Thể loại
              <ul className="dropdown-menu">
                {genres?.map((g: Category) => (
                  <Link
                    key={g.slug}
                    href={`/genres/${g.slug}`}
                    className="hover:text-primary duration-100"
                  >
                    {g.name}
                  </Link>
                ))}
              </ul>
            </span>
            <span className="text-white/80 hover:text-sky-600 block font-semibold text-[15px] relative group">
              Quốc gia
              <ul className="dropdown-menu">
                {countries.map((c: Category) => (
                  <Link
                    key={c.slug}
                    href={`/countries/${c.slug}`}
                    className="hover:text-primary duration-100"
                  >
                    {c.name}
                  </Link>
                ))}
              </ul>
            </span>
          </div>
        </div>

        <form
          className="relative max-lg:hidden max-w-[340px]"
          onSubmit={handleSearch}
        >
          <input
            type="text"
            ref={inputRef}
            value={searchValue}
            placeholder="Tìm kiếm..."
            onChange={(e) => setSearchValue(e.target.value)}
            className="h-10 w-full px-[15px] rounded bg-secondary placeholder:text-whiteLight text-white"
          />

          <button type="submit" className="absolute top-[24%] right-3">
            <FaSearch className="text-white text-xl" />
          </button>
        </form>

        {/* Mobile */}
        <NavbarMobile />
      </div>
    </header>
  );
};

export default Navbar;
