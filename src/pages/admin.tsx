import type { NextPage } from "next";
import Head from "next/head";
import { api } from "~/utils/api";

const Home: NextPage = () => {
  let { mutate, status } = api.admin.populateDB.useMutation();
  return (
    <>
      <Head>
        <title>Gaylords only</title>
      </Head>
      <button
        className="rounded bg-white p-2 text-black"
        onClick={() => mutate()}
      >
        Populate database
      </button>
      <p>status: {status}</p>
    </>
  );
};

export default Home;
