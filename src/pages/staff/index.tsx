import type { FC } from "react";
import StaffCard from "~/components/cards/StaffCard";
import StatusHandler from "~/components/StatusHandler";
import { api } from "~/utils/api";

const index: FC = () => {
  let { status, error, data: authors } = api.authors.getAll.useQuery();

  if (status !== "success")
    return <StatusHandler status={status} error={error} />;

  return (
    <>
      <div className="mx-auto grid w-max grid-cols-3 justify-items-center gap-10">
        {authors!.map((author, i) => {
          return (
            <div key={i} className="col-span-1">
              <StaffCard author={author} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default index;
