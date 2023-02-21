import Image from "next/image";
import { useRouter } from "next/router";
import { FC } from "react";
import { Author } from "@prisma/client";
import ArticleList from "~/components/ArticleList";
import { api } from "~/utils/api";

const StaffPage: FC = () => {
  let { name_slug } = useRouter().query;

  // @ts-ignore
  let author: Author = getAuthorBySlug(name_slug);
  if (!author) return <></>;

  let { name, job_title, description, image_url, id: authorID } = author;

  // TODO write proper handling for this
  let {
    status,
    data: articles,
    error,
  } = api.articles.getByAuthor.useQuery(authorID);

  return (
    <>
      <div className="flex flex-row items-center justify-start gap-5">
        <div className="avatar">
          <div className="w-32 rounded-full">
            <Image
              width="300"
              height="400"
              alt={`${author}-image`}
              src={image_url}
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-primary text-3xl font-semibold">{name}</h1>
          <h2 className="text-zinc-400">{job_title}</h2>
        </div>
      </div>
      <div className="divider"></div>
      <div className="text-justify">{description}</div>
      <div className="mt-12">
        <h1 className="text-3xl font-semibold">Recent Articles</h1>
        <div className="divider -mb-16"></div>
        <ArticleList
          articles={articles!}
          blockTitle="Articles by this author:"
        />
      </div>
    </>
  );
};

export default StaffPage;
