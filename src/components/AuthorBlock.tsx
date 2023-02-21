import type { FC } from "react";
import stringify from "~/helpers/stringify";

interface props {
  authorID: string;
}

const AuthorBlock: FC<props> = ({ authorID }) => {
  if (authorID === "loading...") return <></>;

  // @ts-ignore
  let { name, title, image_url, description } = getAuthorByID(authorID);

  return (
    <a
      href={`/staff/${stringify(name)}`}
      className="flex flex-col items-center gap-3 rounded-md bg-zinc-900 py-6 px-7 transition-all duration-300 hover:scale-105 hover:bg-zinc-800"
    >
      <div className="avatar">
        <div className="w-32 rounded-full">
          <img src={image_url} />
        </div>
      </div>
      <div className="text-primary text-2xl font-semibold">{name}</div>
      <h2 className="text-center text-xl text-zinc-400">{title}</h2>

      <p className="mt-4 text-justify">{description}</p>
    </a>
  );
};

export default AuthorBlock;
