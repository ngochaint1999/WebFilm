import { News } from "@/types";
import React, { FC } from "react";

type NewsItemProps = {
  item: News;
};

const NewsItem: FC<NewsItemProps> = ({ item }) => {
  return (
    <div className="flex items-center border-b-[1px] border-gray py-[15px]">
      <div className="flex flex-col items-center pr-5 pl-[15px]">
        <p className="text-blue text-[25px]">5</p>
        <p className="uppercase text-gray text-[10px]">MARCH</p>
      </div>
      <div>
        <p className="text-lg text-whiteLight mb-[7px]">{item.title}</p>
        <p className="text-sm text-whiteLight text-clamp">{item.description}</p>
      </div>
    </div>
  );
};

export default NewsItem;
