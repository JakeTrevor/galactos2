import { Article } from "@prisma/client";
import type { FC } from "react";

interface props {
  article: Article;
}

const ArticleCard: FC<props> = ({ article }) => {
  const { title, content, image, id: articleID } = article;

  let snippet = content.split(".")[0] + " ...";

  return (
    <>
      <div className="card bg-base-300 min-w-[20rem] shadow-xl">
        <figure>
          <img src={image} alt="..." />
        </figure>
        <div className="card-body">
          <h2 className="card-title mb-4">{title}</h2>
          <p>{snippet}</p>
          <div className="card-actions justify-end">
            <a
              href={`/article/${articleID}`}
              className="btn btn-secondary rounded-lg"
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
