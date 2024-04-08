"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaSearch, FaAngleRight } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import { FaAlignJustify } from "react-icons/fa";

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

const NavbarMobile = ({}: {}) => {
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
      <div className="flex items-center lg:hidden">
        <button className="mr-5">
          <FaSearch className="text-white text-2xl" />
        </button>
        <button onClick={() => setOpenMenu(true)}>
          <FaAlignJustify className="text-white text-2xl" />
        </button>
      </div>

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

export default NavbarMobile;
