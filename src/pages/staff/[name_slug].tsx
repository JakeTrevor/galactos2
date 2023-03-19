import Image from "next/image";
import { useRouter } from "next/router";
import type { FC } from "react";
import { api } from "~/utils/api";

import { ArticleList, QueryError, StatusHandler } from "~/components";
import Head from "next/head";

const StaffPage: FC = () => {
  let { name_slug } = useRouter().query;

  if (typeof name_slug !== "string")
    return <QueryError queryName="name_slug" query={name_slug} />;

  let {
    status,
    error,
    data: author,
  } = api.authors.getBySlug.useQuery(name_slug);

  if (status !== "success")
    return <StatusHandler status={status} error={error} />;

  let { name, job_title, description, image_url, articles } = author!;

  return (
    <>
      <Head>
        <title>Galactos | {name}</title>
      </Head>
      <div className="flex flex-row items-center justify-start gap-5">
        <div className="avatar">
          <div className="w-32 rounded-full">
            <Image
              width="300"
              height="400"
              alt={`${name}-image`}
              src={image_url}
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-semibold text-primary">{name}</h1>
          <h2 className="text-zinc-400">{job_title}</h2>
        </div>
      </div>
      <div className="divider"></div>
      <div className="text-justify">{description}</div>
      <div className="mt-12">
        <h1 className="text-3xl font-semibold">Recent Articles</h1>
        <div className="divider -mb-16"></div>
        <ArticleList
          articles={articles}
          blockTitle="Articles by this author:"
        />
      </div>
    </>
  );
};

export default StaffPage;
