"use client";
import React, { useEffect, useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa6";
import { FaChevronUp } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  const [scrollTop, setScrollTop] = useState(0);

  const dataNewMovie = [
    {
      link: "",
      title: "Phim Khoa Học",
    },
    { link: "", title: "Phim Kinh Dị" },

    {
      link: "",
      title: "Phim Chiếu Rạp",
    },
    {
      link: "",
      title: "Phim Hình Sự",
    },
    {
      link: "",
      title: "Phim Hành Động",
    },
  ];
  const dataGoodMovie = [
    {
      link: "",
      title: "Phim Âu Mỹ",
    },
    { link: "", title: "Phim Hàn Quốc" },

    {
      link: "",
      title: "Phim Trung Quốc",
    },
    {
      link: "",
      title: "Phim Nhật Bản",
    },
    {
      link: "",
      title: "Phim Thái Lan",
    },
  ];
  const dataInfo = [
    {
      link: "",
      title: "Giới thiệu",
    },
    { link: "", title: "Liên hệ chúng tôi" },

    {
      link: "",
      title: "Điều khoản sử dụng",
    },
    {
      link: "",
      title: "Chính sách riêng tư",
    },
    {
      link: "",
      title: "Khiếu nại bản quyền",
    },
  ];
  useEffect(() => {
    const onScroll = () => {
      setScrollTop(window.pageYOffset);
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  return (
    <footer className="p-10">
      <div className="grid grid-rows-1 grid-flow-col gap-4 mb-10">
        <div className="text-[13px] text-gray">
          <span className="text-blue">Xemphim</span> - Trang xem phim Online với
          giao diện mới
          <br /> được bố trí và thiết kế thân thiện với người dùng. Nguồn
          <br /> phim được tổng hợp từ các website lớn với đa dạng các <br />
          đầu phim và thể loại vô cùng phong phú.
        </div>
        <div>
          <h3 className="text-white text-[15px]">Phim mới</h3>
          <ul>
            {dataNewMovie.map((item, index) => (
              <li key={index} className="text-[13px] text-blue mt-2.5">
                <Link href={item.link}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-white text-[15px]">Phim hay</h3>
          <ul>
            {dataGoodMovie.map((item, index) => (
              <li key={index} className="text-[13px] text-blue mt-2.5">
                <Link href={item.link}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-white text-[15px]">Thông tin</h3>
          <ul>
            {dataInfo.map((item, index) => (
              <li key={index} className="text-[13px] text-blue mt-2.5">
                <Link href={item.link}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <hr className="text-gray" />
      <div className="flex items-center justify-between mt-10">
        <span className="text-[13px] text-gray">© Xemphim</span>
        <ul className="flex items-center gap-x-2.5 text-xs font-semibold">
          <Link
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-black aspect-square p-2.5 hover:text-primary duration-150"
          >
            <FaFacebookF height={16} className="text-white" />
          </Link>
          <Link
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-black aspect-square p-2.5 hover:text-primary duration-150"
          >
            <FaTwitter height={16} className="text-white" />
          </Link>
          <Link
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-black aspect-square p-2.5 hover:text-primary duration-150"
          >
            <FaInstagram height={16} className="text-white" />
          </Link>
          <Link
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-black aspect-square p-2.5 hover:text-yellow duration-150"
          >
            <FaYoutube height={16} className="text-white" />
          </Link>
          <button
            className="rounded-full bg-black aspect-square p-2.5 hover:text-yellow duration-150"
            onClick={() => window.scrollTo(0, 0)}
          >
            <FaChevronUp className="text-white" />
          </button>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
