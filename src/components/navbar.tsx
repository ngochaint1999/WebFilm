import Link from "next/link";
import React from "react";
import { FaSearch } from "react-icons/fa";
import NavbarMobile from "./navbar-mobile";

const data = [
  {
    title: "Xemphim",
    url: "#",
    type: "item",
    childs: [],
  },
  {
    title: "Phim bộ",
    url: "#",
    type: "item",
    childs: [],
  },
  {
    title: "Phim lẻ",
    url: "#",
    type: "item",
    childs: [],
  },
  {
    title: "Thể loại",
    url: "#",
    type: "dropdown",
    childs: [
      {
        title: "Phim Cổ Trang",
        url: "#",
      },
      {
        title: "Phim Tâm lý",
        url: "#",
      },
      {
        title: "Phim Tình Cảm",
        url: "#",
      },
      {
        title: "Phim Bí ẩn",
        url: "#",
      },
      {
        title: "Phim Kinh Dị",
        url: "#",
      },
      {
        title: "Phim Hành động",
        url: "#",
      },
    ],
  },
  {
    title: "Quốc gia",
    url: "#",
    type: "dropdown",
    childs: [
      {
        title: "Phim Âu Mỹ",
        url: "#",
      },
      {
        title: "Phim Hàn Quốc",
        url: "#",
      },
      {
        title: "Phim Trung quốc",
        url: "#",
      },
    ],
  },
];

const Navbar = () => {
  return (
    <header className="border-b border-black py-4 px-4 sm:px-10 bg-primary w-full min-h-[70px] fixed top-0  right-0 flex items-center z-50">
      <div className="flex flex-wrap justify-between items-center gap-x-2 max-lg:gap-y-6 container !w-full mx-auto">
        <div className="flex items-center">
          <p className="text-white">Logo</p>
          <div
            id="collapseMenu"
            className="lg:ml-14 lg:space-x-5 max-lg:space-y-2 max-lg:hidden max-lg:py-4 max-lg:w-full lg:flex hidden"
          >
            {data?.map((item) => (
              <div
                className="menu-hover group py-2 max-lg:border-b max-lg:py-2 px-3"
                key={item.title}
              >
                {item.type === "dropdown" ? (
                  <div>
                    <p className="text-white/80 hover:text-sky-600 block font-semibold text-[15px] cursor-pointer">
                      {item.title}
                    </p>
                    {item.type === "dropdown" ? (
                      <div
                        className="
                  invisible absolute z-50 top-[52px] max-w-[500px] w-full grid grid-cols-3 bg-black/80
                  py-1 px-4 text-gray-800 shadow-xl group-hover:visible text-sm rounded-md gap-2"
                      >
                        {item.childs.map((child) => (
                          <Link
                            href={child.url}
                            key={child.title}
                            className="my-2 block py-1 font-semibold text-white/60 hover:text-sky-600 md:mx-2"
                          >
                            {child.title}
                          </Link>
                        ))}
                      </div>
                    ) : null}
                  </div>
                ) : (
                  <Link
                    className="text-white/80 hover:text-sky-600 block font-semibold text-[15px]"
                    href={item.url}
                  >
                    {item.title}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>

        <form className="relative max-lg:hidden max-w-[340px]">
          <input
            type="text"
            placeholder="Tìm kiếm..."
            className="h-10 w-full px-[15px] rounded bg-secondary placeholder:text-whiteLight"
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
