import { NextPage } from "next";
import { api } from "~/utils/api";

const Home: NextPage = () => {
  let { mutate, status } = api.admin.populateDB.useMutation();
  return (
    <>
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
