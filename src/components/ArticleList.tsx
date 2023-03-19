import type { Article } from "@prisma/client";
import type { FC } from "react";

import ArticleCard from "./cards/ArticleCard";

interface props {
  blockTitle: string;
  articles: Article[];
}

const ArticleList: FC<props> = ({ blockTitle, articles }) => {
  return (
    <>
      <div className="mt-20 flex flex-col py-5">
        <div className="text-2xl font-bold text-secondary">{blockTitle}</div>
        <div className="divider"></div>
      </div>
      <div className="flex flex-row gap-10 overflow-scroll">
        {articles.map((article, i) => {
          return <ArticleCard article={article} key={i} />;
        })}
      </div>
    </>
  );
};

export default ArticleList;
