import { FC } from "react";
import Link from "next/link";
import { Article } from "@prisma/client";

const LatestArticle: FC<{ article: Article }> = ({ article }) => {
  if (!article) return <></>;

  let { title, content, image_url, id } = article;
  let snippet = content.split(".").slice(0, 1) + " . . .";
  return (
    <>
      <div className="flex flex-col py-5">
        <div className="text-secondary text-3xl font-bold">Latest Article</div>
        <div className="divider"></div>
      </div>
      <div className="card card-side bg-base-300 h-max shadow-xl">
        <div className="w-2/3">
          <img className="bg-clip" src={image_url} alt="" />
        </div>
        <div className="card-body w-1/3">
          <h2 className="card-title">{title}</h2>
          <p>{snippet}</p>
          <div className="card-actions mt-3 justify-end">
            <Link href={`/article/${id}`} className="btn btn-primary">
              Read More
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default LatestArticle;
