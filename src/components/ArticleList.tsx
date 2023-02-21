import type { FC } from "react";
import { Article } from "@prisma/client";

import ArticleCard from "./ArticleCard";

interface props {
  blockTitle: string;
  articles: Article[];
}

const RecentArticlesBlock: FC<props> = ({ blockTitle, articles }) => {
  return (
    <>
      <div className="mt-20 flex flex-col py-5">
        <div className="text-secondary text-2xl font-bold">{blockTitle}</div>
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

export default RecentArticlesBlock;
