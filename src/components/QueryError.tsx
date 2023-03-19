import { FC } from "react";

interface props {
  queryName: string;
  query: string[] | undefined;
}

const QueryError: FC<props> = ({ queryName, query }) => {
  return (
    <>
      <p> {queryName} must be string</p>
      <p>"{query}" is not valid</p>
    </>
  );
};

export default QueryError;
