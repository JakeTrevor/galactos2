import Head from "next/head";
import { useRouter } from "next/router";
import type { FC } from "react";
import { AuthorBlock, StatusHandler, TitleBlock } from "~/components";
import QueryError from "~/components/QueryError";
import { api } from "~/utils/api";

const ArticlePage: FC = () => {
  let { pid } = useRouter().query;

  if (typeof pid !== "string")
    return <QueryError queryName="pid" query={pid} />;

  let { status, data: article, error } = api.articles.getById.useQuery(pid);

  if (status !== "success")
    return <StatusHandler status={status} error={error} />;

  let { content, author } = article!;

  return (
    <>
      <Head>
        <title>Galactos | {article?.title.slice(0, 10)}</title>
      </Head>
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
    </>
  );
};

export default ArticlePage;
