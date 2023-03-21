import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import type { FC } from "react";

import Profile from "./profile/Profile";

const Header: FC = () => {
  return (
    <>
      <Head>
        <title>Galactos</title>
      </Head>
      <header className="navbar sticky top-0 z-10 h-[10vh] bg-base-100 px-16 py-4 shadow-lg">
        <div className="flex-1 items-center gap-10">
          <Link href="/">
            <Image width="36" height="18" src="/logo.svg" alt="Galactos Logo" />
          </Link>
          <Link
            href="/"
            className="btn-link btn text-3xl normal-case text-zinc-400 no-underline hover:text-[#d7cccc] hover:no-underline"
          >
            Γαλάχτοσ
          </Link>
        </div>
        <div className="flex gap-6">
          <Link
            href="/staff"
            className="btn-ghost btn rounded-lg text-xl normal-case text-white"
          >
            Staff
          </Link>
        </div>
        <div>
          <Profile />
        </div>
      </header>
    </>
  );
};

export default Header;
