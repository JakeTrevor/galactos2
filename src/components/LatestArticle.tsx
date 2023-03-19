import type { FC } from "react";
import Link from "next/link";
import type { Article } from "@prisma/client";

const LatestArticle: FC<{ article: Article }> = ({ article }) => {
  if (!article) return <></>;

  let { title, content, image_url, id } = article;
  let snippet = `${content.split(".")[0] ?? ""} ...`;
  return (
    <>
      <div className="flex flex-col py-5">
        <div className="text-3xl font-bold text-secondary">Latest Article</div>
        <div className="divider"></div>
      </div>
      <div className="card card-side h-max bg-base-300 shadow-xl">
        <div className="w-2/3">
          <img className="bg-clip" src={image_url} alt="" />
        </div>
        <div className="card-body w-1/3">
          <h2 className="card-title">{title}</h2>
          <p>{snippet}</p>
          <div className="card-actions mt-3 justify-end">
            <Link href={`/article/${id}`} className="btn-primary btn">
              Read More
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default LatestArticle;
