import type { Article } from "@prisma/client";
import type { FC } from "react";

interface props {
  article: Article;
}

const ArticleCard: FC<props> = ({ article }) => {
  const { title, content, image_url, id: articleID } = article;

  let snippet = `${content.split(".")[0] ?? ""} ...`;

  return (
    <>
      <div className="card min-w-[20rem] bg-base-300 shadow-xl">
        <figure>
          <img src={image_url} />
        </figure>
        <div className="card-body">
          <h2 className="card-title mb-4">{title}</h2>
          <p>{snippet}</p>
          <div className="card-actions justify-end">
            <a
              href={`/article/${articleID}`}
              className="btn-secondary btn rounded-lg"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArticleCard;
