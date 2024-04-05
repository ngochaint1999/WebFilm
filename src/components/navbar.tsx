"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaSearch, FaAngleRight } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import { FaAlignJustify } from "react-icons/fa";

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

const typeMobileData = [
  { title: "Phim mới", path: "phim-moi" },
  { title: "Phim bộ", path: "phim-bo" },
  { title: "Phim lẻ", path: "phim-le" },
  { title: "Phim Vietsub", path: "phim-vietsub" },
  { title: "Phim thuyết minh", path: "phim-thuyet-minh" },
  { title: "Phim lồng tiếng", path: "phim-long-tieng" },
  { title: "Phim hoàn thành", path: "phim-bo-hoan-thanh" },
  { title: "Phim đang chiếu", path: "phim-bo-dang-chieu" },
  { title: "Phim độc quyền", path: "subteam" },
  { title: "Phim hoạt hình", path: "hoat-hinh" },
  { title: "Tìm kiếm", path: "tim-kiem" },
];
const nationData = [
  { title: "Phim Âu Mỹ", path: "phim-moi" },
  { title: "Phim Hàn Quốc", path: "phim-bo" },
  { title: "Phim Trung Quốc", path: "phim-le" },
  { title: "Phim Đài Loan", path: "phim-vietsub" },
  { title: "Phim Thái Lan", path: "phim-thuyet-minh" },
  { title: "Phim Ấn Độ", path: "phim-long-tieng" },
  { title: "Phim Indonesia", path: "phim-bo-hoan-thanh" },
  { title: "Phim Nhật Bản", path: "phim-bo-dang-chieu" },
];

type MobileSubMenu = "movie" | "genre" | "country" | null;

const MobileMenu = ({}: {}) => {
  const [menuType, setMenuType] = useState<MobileSubMenu>(null);
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  useEffect(() => {
    document.body.style.overflow = openMenu ? "hidden" : "auto";
    if (!openMenu) setMenuType(null);
  }, [openMenu]);

  const handleOpenSubMenu = (type: MobileSubMenu) => {
    if (type === menuType) setMenuType(null);
    else setMenuType(type);
  };

  return (
    <>
      <button className="lg:hidden" onClick={() => setOpenMenu(true)}>
        <FaAlignJustify className="text-white text-2xl" />
      </button>
      <div
        className={`fixed inset-0 left-0 z-40 duration-300 ${
          openMenu
            ? "pointer-events-auto bg-black/90 overflow-y-auto overflow-x-hidden"
            : "pointer-events-none"
        }`}
        onClick={(e) => {
          if (e.target !== e.currentTarget) return;
          setOpenMenu(false);
        }}
      >
        <div
          className={`fixed right-0 min-h-screen w-full max-w-xs bg-zinc-950  text-xl duration-300 overflow-auto ${
            openMenu ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <FiX
            className="text-white ml-auto cursor-pointer m-3 text-3xl"
            onClick={() => setOpenMenu(false)}
          />
          <Link
            href="/tv-shows"
            className="flex items-center gap-2 p-2.5  text-whiteLight text-base"
            onClick={() => setOpenMenu(false)}
          >
            Phim lẻ
          </Link>
          <Link
            href="/upcoming"
            className="flex items-center gap-2 p-2.5 border-t border-white/10 text-whiteLight text-base"
            onClick={() => setOpenMenu(false)}
          >
            Phim bộ
          </Link>
          <button
            className={`flex items-center justify-between w-full gap-0.5 p-2.5 border-t border-white/10 text-whiteLight  ${
              menuType === "movie" ? "text-primary" : ""
            }`}
            onClick={() => handleOpenSubMenu("movie")}
          >
            <p className="flex items-center text-base">Thể loại</p>
            <FaAngleRight
              className={`duration-300 text-lg ${
                menuType === "movie" ? "rotate-90" : ""
              }`}
            />
          </button>
          <ul
            className={
              "grid grid-cols-2 gap-x-2.5 gap-y-1 font-normal text-base overflow-hidden px-2 duration-300"
            }
            style={{ maxHeight: menuType === "movie" ? "50rem" : 0 }}
          >
            {typeMobileData.slice(0, -1).map((type) => (
              <Link
                href={`/${type.path}`}
                key={type.path}
                onClick={() => setOpenMenu(false)}
                className="text-whiteLight"
              >
                {type.title}
              </Link>
            ))}
            <span />
            <span className="pb-2.5" />
          </ul>
          <button
            className={`flex items-center justify-between border-t w-full border-white/10 gap-0.5 p-2.5 text-whiteLight ${
              menuType === "country" ? "text-primary" : ""
            }`}
            onClick={() => handleOpenSubMenu("country")}
          >
            <p className="flex items-center text-base">Quốc Gia</p>
            <FaAngleRight
              className={`duration-300 text-lg ${
                menuType === "movie" ? "rotate-90" : ""
              }`}
            />
          </button>
          <ul
            className={
              "grid grid-cols-2 gap-x-2.5 gap-y-1 font-normal text-base overflow-hidden px-2.5 duration-300 text-whiteLight"
            }
            style={{ maxHeight: menuType === "country" ? "50rem" : 0 }}
          >
            {nationData.map((country) => (
              <Link
                href={`/countries/${country.path}`}
                key={country.path}
                onClick={() => setOpenMenu(false)}
              >
                {country.title}
              </Link>
            ))}
            <span />
            <span className="mb-2.5" />
          </ul>
        </div>
      </div>
    </>
  );
};

const Navbar = () => {
  return (
    <header className="border-b border-black py-4 px-4 sm:px-10 bg-primary w-full min-h-[70px] fixed top-0 left-0 flex items-center z-50">
      <div className="flex flex-wrap justify-between items-center gap-x-2 max-lg:gap-y-6 w-full max-w-[1220px] mx-auto">
        <div className="flex items-center">
          <p className="text-white">Logo</p>
          <div
            id="collapseMenu"
            className="lg:!flex lg:ml-14 lg:space-x-5 max-lg:space-y-2 max-lg:hidden max-lg:py-4 max-lg:w-full md:flex hidden"
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

        <form className="relative md:block hidden w-[340px]">
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
        <MobileMenu />
      </div>
    </header>
  );
};

export default Navbar;
