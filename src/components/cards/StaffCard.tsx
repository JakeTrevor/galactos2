import { Author } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import type { FC } from "react";
import slugify from "~/helpers/slugify";

interface props {
  author: Author;
}

const StaffCard: FC<props> = ({ author }) => {
  let { name, job_title, image_url } = author;
  return (
    <Link
      href={`/staff/${slugify(name)}`}
      className="grid h-full w-64 grid-rows-2 items-center justify-items-center gap-5 rounded-xl bg-zinc-900 p-5 transition-all duration-500 hover:scale-105 hover:bg-zinc-800"
    >
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
      <div className="flex flex-col gap-2.5 text-center">
        <div className="text-primary cursor-pointer rounded-lg text-2xl font-semibold normal-case no-underline">
          {name}
        </div>
        <h2 className="text-lg text-zinc-400">{job_title}</h2>
      </div>
    </Link>
  );
};

export default StaffCard;
