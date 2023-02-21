import { useRouter } from "next/router";
import { Article } from "@prisma/client";
import { FC } from "react";

import TitleBlock from "~/components/TitleBlock";
import AuthorBlock from "~/components/AuthorBlock";

const Article: FC = () => {
  let { pid } = useRouter().query;
  if (typeof pid !== "string") return <></>;

  // @ts-ignore
  let article: Article = getArticleByID(pid);
  let { authorId, content, image_url } = article;

  if (!article) return <>loading...</>;

  return (
    <div className="flex flex-col gap-9">
      <TitleBlock data={article} />
      {/* <img className="overflow-hidden rounded-md bg-cover" src={image_url} /> */}

      <div className="">
        <div className="float-right ml-6 mb-3 w-1/4">
          <AuthorBlock authorID={authorId} />
        </div>
        <div className="whitespace-pre-wrap text-justify">{content}</div>
      </div>
    </div>
  );
};

export default Article;
