import { type NextPage } from "next";
import LatestArticle from "~/components/LatestArticle";
import ArticleList from "~/components/ArticleList";
import { api } from "~/utils/api";
import StatusHandler from "~/components/StatusHandler";

const Home: NextPage = () => {
  let { status, error, data: articles } = api.articles.getMostRecent.useQuery();

  if (status !== "success")
    return <StatusHandler status={status} error={error} />;

  let [first, ...others] = articles!;

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
      <LatestArticle article={first!} />

      <ArticleList articles={others} blockTitle="Recent articles" />
    </>
  );
};

export default Home;
