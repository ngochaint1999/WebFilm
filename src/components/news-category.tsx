import React, { FC } from "react";
import Link from "next/link";
import { News } from "@/types";
import NewsItem from "@/components/news-item";

type NewsCategoryProps = {
  title?: string;
  news: News[];
};

const NewsCategory: FC<NewsCategoryProps> = (props) => {
  const { title, news } = props;
  return (
    <div className="max-w-[800px] mx-auto">
      <div className="flex items-center justify-between mb-6 mt-12">
        <h3 className="text-xl md:text-xl text-white pl-2.5 border-l-4 border-[#408bea]">
          {title}
        </h3>
        <Link href={""} className="text-blue text-sm">
          Xem thêm
        </Link>
      </div>
      {news.map((item) => (
        <NewsItem item={item} key={item._id} />
      ))}
    </div>
  );
};

export default NewsCategory;
