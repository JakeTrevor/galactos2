import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import type { FC } from "react";

let Profile: FC = () => {
  let { data: session } = useSession();
  let user = session?.user;

  return (
    <>
      {user ? (
        <Link href="/profile">
          <img src={user.image || "/default.jpg"} />
        </Link>
      ) : (
        <button onClick={() => signIn()}>log in</button>
      )}
    </>
  );
};

export default Profile;
