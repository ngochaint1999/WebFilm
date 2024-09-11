/** @format */
"use client";
import React, { FC, useRef, useState, useEffect } from "react";
import { FaRegFaceLaughWink } from "react-icons/fa6";
import Summary from "./summary";
import PerSonInfor from "./person-infor";
import { Detail, Episode } from "@/types";
import Link from "next/link";
import dayjs from "dayjs";
type MovieDetailProps = { movie: Detail };
type ServerType = "art-player" | "anym" | "hlsplayer";
const data = [
  { id: 1, name: "Thông tin" },
  { id: 2, name: "Diễn viên" },
];
const MovieDetail: FC<MovieDetailProps> = ({ movie }) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [selectedEpisode, setSelectedEpisode] = useState<Episode>();
  const [tabInfo, setTabInfo] = useState<number>(1);
  const [serverType, setServerType] = useState<ServerType>("art-player");

  useEffect(() => {
    if (
      !["Tập 0", "Trailer"].includes(movie.episode_current) &&
      movie.episodes[0].server_data[0].name
    ) {
      setSelectedEpisode(movie.episodes[0].server_data[0]);
    }
  }, []);

  useEffect(() => {
    if (!iframeRef.current) return;
    iframeRef.current.src += "";
  }, [serverType]);
  return (
    <div>
      {selectedEpisode && (
        <div className="max-w-5xl mx-auto mt-2.5">
          <div className="flex items-center justify-center gap-2">
            <button
              className={`rounded px-4 py-0.5 text-white ${
                serverType === "art-player" ? "bg-blue" : "bg-white/5"
              }`}
              onClick={() => setServerType("art-player")}
            >
              Server 1
            </button>
            <button
              className={`rounded px-4 py-0.5 text-white ${
                serverType === "anym" ? "bg-blue" : "bg-white/5"
              }`}
              onClick={() => setServerType("anym")}
            >
              Server 2
            </button>
            <button
              className={`rounded px-4 py-0.5 text-white ${
                serverType === "hlsplayer" ? "bg-blue" : "bg-white/5"
              }`}
              onClick={() => setServerType("hlsplayer")}
            >
              Server 3
            </button>
          </div>
          <p className="text-red-500 text-center text-sm mt-2 mb-5">
            Vui lòng đổi server nếu không xem được
          </p>
          <iframe
            ref={iframeRef}
            src={
              serverType === "art-player"
                ? selectedEpisode.link_embed
                : serverType === "anym"
                ? `https://anym3u8player.com/tv/p.php?url=${selectedEpisode.link_m3u8}`
                : `https://www.hlsplayer.org/play?url=${encodeURIComponent(
                    selectedEpisode.link_m3u8
                  )}`
            }
            className="w-full aspect-video overflow-hidden bg-stone-900 rounded-md"
            scrolling="no"
            sandbox={serverType === "art-player" ? undefined : "allow-scripts"}
            allowFullScreen
            referrerPolicy="no-referrer"
          />
        </div>
      )}
      <div className="text-sm">
        {movie.episodes.map((server) => (
          <ul key={server.server_name}>
            <p className="text-lg mb-4 mt-8 text-white font-medium">
              Chọn tập phim
            </p>
            <li
              className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-8 lg:grid-cols-12 text-center gap-2"
              key={server.server_name}
            >
              {server.server_data.map((ep) => (
                <button
                  onClick={() => {
                    setSelectedEpisode(ep);
                    iframeRef.current?.scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                  key={ep.slug}
                  className={`
                    ${
                      selectedEpisode?.link_embed === ep.link_embed
                        ? "bg-blue text-white"
                        : "text-white bg-[#666]"
                    }
                     rounded hover:bg-primary duration-200 py-1 hover:text-black`}
                >
                  {`Tập ${ep.name}`}
                </button>
              ))}
            </li>
          </ul>
        ))}
      </div>
      <div className="w-full max-w-7xl mx-auto flex flex-col gap-8 md:flex-row mt-5">
        {/* <Image
          src={movie.poster_url}
          alt={movie.origin_name}
          width={100}
          height={100}
          className="aspect-[2/3] rounded w-[140px] h-auto"
        /> */}
        <img
          src={movie.poster_url}
          alt={movie.origin_name}
          className="image-movie"
          width={140}
        />
        <div className="w-full">
          <h2 className="text-3xl  lg:text-3xl text-white">{movie.name}</h2>
          <span className="text-primary font-bold text-text mt-2.5">
            {movie.origin_name}
          </span>

          <div className="flex items-center gap-5 text-text mt-2.5">
            <span className="flex items-center gap-2">
              {dayjs(movie.created.time).format("DD/MM/YYYY")}
            </span>
            <span className="flex items-center gap-2">
              {movie.time || "Đang cập nhật"}
            </span>
            <span className="flex items-center gap-2">
              {movie.country[0].name}
            </span>
          </div>
          <hr className="border border-gray mt-5" />
          <div className="flex items-center mt-2.5 justify-between">
            <div className="text-text text-[27px] flex items-center">
              <p className="bg-gray rounded-[3px] w-[60px] py-2.5 text-center font-medium">
                5.5
              </p>
              <div className="ml-2.5">
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 text-[#408BEA] ms-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    className="w-5 h-5 text-[#408BEA] ms-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    className="w-5 h-5 text-[#408BEA] ms-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    className="w-5 h-5 text-[#408BEA] ms-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    className="w-5 h-5 ms-1 text-gray-300 dark:text-gray-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                </div>

                <span className="flex items-center gap-2 text-sm mt-[5px]">
                  <FaRegFaceLaughWink />
                  85 đánh giá
                </span>
              </div>
            </div>

            <div className="bg-gray rounded-[3px] py-[5px] px-[15px] text-xs text-white">
              Đánh giá của bạn: 0
            </div>
          </div>
          <hr className="border border-gray mt-2.5" />
          <div className="flex items-center gap-8 mt-[15px]">
            {movie.category.map((g, idx) => (
              <Link
                href={`/genres/${g.slug}`}
                key={g.id}
                className="text-white text-sm font-semibold hover:text-blue"
              >
                {`Phim ${g.name}`}
                {idx + 1 !== movie.category.length ? "" : ""}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <hr className="border border-gray mt-2.5" />
      <div className="flex items-center text-sm mt-2.5">
        {data.map((i) => (
          <button
            onClick={() => {
              setTabInfo(i.id);
            }}
            key={i.id}
            className={`
                    ${tabInfo === i.id ? "bg-blue text-white" : "text-text"}
                     rounded duration-200 py-2.5 px-5 font-semibold`}
          >
            {i.name}
          </button>
        ))}
      </div>

      <hr className="border border-gray mt-2.5" />
      {tabInfo === 1 ? (
        <Summary content={movie.content} />
      ) : (
        <PerSonInfor movie={movie} />
      )}
    </div>
  );
};

export default MovieDetail;
