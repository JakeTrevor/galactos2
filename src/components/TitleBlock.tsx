import type { Article } from "@prisma/client";
import type { FC } from "react";

interface props {
  data: Article;
}

const TitleBlock: FC<props> = ({ data }) => {
  let { title, date } = data;
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-2xl font-bold text-secondary">{title}</h1>
      <h2 className="text-lg text-secondary">{date}</h2>
    </div>
  );
};

export default TitleBlock;
