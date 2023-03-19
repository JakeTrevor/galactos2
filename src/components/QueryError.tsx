import type { FC } from "react";

interface props {
  queryName: string;
  query: string[] | undefined;
}

const QueryError: FC<props> = ({ queryName, query }) => {
  return (
    <>
      <p> {queryName} must be string</p>
      <p>&quot;{query}&quot; is not valid</p>
    </>
  );
};

export default QueryError;
