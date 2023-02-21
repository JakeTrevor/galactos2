import { Author } from "@prisma/client";
import type { FC } from "react";
import StaffCard from "~/components/cards/StaffCard";

const index: FC = () => {
  // @ts-ignore
  let authors: Author[] = getAuthors;

  return (
    <div className="mx-auto grid w-max grid-cols-3 justify-items-center gap-10">
      {authors.map((author, i) => {
        return (
          <div key={i} className="col-span-1">
            <StaffCard author={author} />
          </div>
        );
      })}
    </div>
  );
};

export default index;
