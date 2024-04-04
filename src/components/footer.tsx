import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa6";

import Link from "next/link";

const Footer = () => {
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
  return (
    <footer className="p-10">
      <div className="flex items-center justify-between mb-10">
        <div>
          <div className="text-[13px] text-gray">
            <span className="text-blue">Phimmoi</span> - Trang xem phim Online
            với giao diện mới
            <br /> được bố trí và thiết kế thân thiện với người dùng. Nguồn
            <br /> phim được tổng hợp từ các website lớn với đa dạng các <br />
            đầu phim và thể loại vô cùng phong phú.
          </div>
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
        <span className="text-[13px] text-gray">© Phimmoi</span>
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
            className="rounded-full bg-black aspect-square p-2.5 hover:text-primary duration-150"
          >
            <FaYoutube height={16} className="text-white" />
          </Link>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
