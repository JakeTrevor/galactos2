import { type NextPage } from "next";
import { signOut, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { z } from "zod";

// TODO consider moving this
function fetchData(
  type: string | undefined = "",
  token: string | undefined = ""
) {
  return fetch("https://discord.com/api/users/@me/connections", {
    headers: {
      authorization: `${type} ${token}`,
    },
  })
    .then((res) => res.json())
    .then((res) => {
      return z
        .array(
          z.object({
            type: z.string(),
            id: z.string(),
            name: z.string(),
            visibility: z.number(),
            friend_sync: z.boolean(),
            show_activity: z.boolean(),
            verified: z.boolean(),
            two_way_link: z.boolean(),
            metadata_visibility: z.number(),
          })
        )
        .parse(res);
    })
    .then((res) => {
      return res.filter((e) => e.type === "steam")[0];
    });
}

let Index: NextPage = () => {
  let { data: session, status } = useSession();

  let { user, token, tokenType } = session || {};

  let [data, setData] = useState("0000");

  useEffect(() => {
    if (status === "authenticated") {
      fetchData(tokenType, token)
        .then((data) => {
          setData(data?.name || "No Steam Account Linked");
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [status]);

  return (
    <>
      <h1>Hi {user?.name}!</h1>
      <button onClick={() => signOut()}>sign out</button>
      <p>Steam ID: {data}</p>
    </>
  );
};

export default Index;
