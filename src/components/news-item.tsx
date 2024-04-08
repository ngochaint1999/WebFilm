import { News } from "@/types";
import React, { FC } from "react";
import Link from "next/link";

type NewsItemProps = {
  item: News;
};

const NewsItem: FC<NewsItemProps> = ({ item }) => {
  return (
    <div className="flex items-center last:border-b-0 border-b-[1px] border-gray py-[15px]">
      <div className="flex flex-col items-center pr-5 pl-[15px]">
        <p className="text-blue text-[25px]">{item?.day}</p>
        <p className="uppercase text-gray text-[10px]">{item?.month}</p>
      </div>
      <div className="text-whiteLight">
        <Link
          href={""}
          className="text-lg text-whiteLight mb-[7px] font-semibold"
        >
          {item.title}
        </Link>
        <p className="text-sm text-whiteLight text-clamp">{item.description}</p>
      </div>
    </div>
  );
};

export default NewsItem;
