import type { FC, ReactNode } from "react";
import Header from "~/components/Header";

interface props {
  children: ReactNode;
}

const Layout: FC<props> = ({ children }) => {
  return (
    <>
      <Header />
      <div className="mx-32 mt-16 mb-20">{children}</div>
    </>
  );
};

export default Layout;
