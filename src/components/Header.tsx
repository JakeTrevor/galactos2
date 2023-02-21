import Image from "next/image";
import Link from "next/link";
import type { FC } from "react";

const Header: FC = () => {
  return (
    <>
      <div className="navbar bg-base-100 sticky top-0 z-10 px-16 py-4 shadow-lg">
        <div className="flex-1 items-center gap-10">
          <Link href="/">
            <Image width="48" height="24" src="/Logo.svg" alt="Galactos Logo" />
          </Link>
          <Link
            href="/"
            className="btn btn-link text-3xl normal-case text-zinc-400 no-underline hover:text-[#d7cccc] hover:no-underline"
          >
            Γαλάχτοσ
          </Link>
        </div>
        <div className="flex gap-6">
          <Link
            href="/staff"
            className="btn btn-ghost rounded-lg text-xl normal-case text-white"
          >
            Staff
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
