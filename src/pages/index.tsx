import { type NextPage } from "next";
import LatestArticle from "~/components/LatestArticle";

const Home: NextPage = () => {
  // TODO populate this
  // @ts-ignore
  let articles: Article[] = fetchArticles();
  return (
    <>
      <div className="my-10">
        <div className="text-4xl font-bold">
          Read all the latest news from all over the Galaxy . . .
        </div>
        <div className="text-xl font-semibold text-zinc-600">
          (or something)
        </div>
      </div>
      <LatestArticle />

      <RecentArticlesBlock something="senator-marcus" />
    </>
  );
};

export default Home;
