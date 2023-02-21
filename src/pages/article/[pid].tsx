import { useRouter } from "next/router";
import { Article } from "@prisma/client";
import { FC } from "react";

import TitleBlock from "~/components/TitleBlock";
import AuthorBlock from "~/components/AuthorBlock";
import { api } from "~/utils/api";

const Article: FC = () => {
  let { pid } = useRouter().query;
  if (typeof pid !== "string") return <></>;

  let { status, data: article, error } = api.articles.getById.useQuery(pid);

  // TODO make a nice error component for this sort of thing
  if (status === "error") return <p>{error?.message}</p>;

  if (status === "loading") return <p>loading...</p>;

  let { content, author } = article!;

  return (
    <div className="flex flex-col gap-9">
      <TitleBlock data={article!} />
      {/* <img className="overflow-hidden rounded-md bg-cover" src={image_url} /> */}

      <div className="">
        <div className="float-right ml-6 mb-3 w-1/4">
          <AuthorBlock author={author} />
        </div>
        <div className="whitespace-pre-wrap text-justify">{content}</div>
      </div>
    </div>
  );
};

export default Article;
