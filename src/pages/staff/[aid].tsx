"client";
import Image from "next/image";
import { useRouter } from "next/router";
import { FC } from "react";
import authorInformation from "@/helpers/authorInformation";
import stringify from "@/helpers/stringify";

const StaffPage: FC = () => {
  let { aid } = useRouter().query;
  let author = authorInformation[aid as string];

  if (!author) return <></>;

  let { name, title, description, image_url } = author;

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
          <h2 className="text-zinc-400">{title}</h2>
        </div>
      </div>
      <div className="divider"></div>
      <div className="text-justify">{description}</div>
      <div className="mt-12">
        <h1 className="text-3xl font-semibold">Recent Articles</h1>
        <div className="divider -mb-16"></div>
        <RecentArticlesBlock something={stringify(name)} />
      </div>
    </>
  );
};

export default StaffPage;
