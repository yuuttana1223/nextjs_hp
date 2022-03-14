import Head from "next/head";
import { ReactNode, VFC } from "react";

export const Layout: VFC<{ children: ReactNode; title?: string }> = ({
  children,
  title = "HP by Next.js",
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="flex min-h-screen flex-col justify-center font-mono text-sm text-gray-600">
        <header>
          <nav className="w-screen bg-gray-800"></nav>
        </header>
        <main className="flex w-screen flex-1 flex-col items-center justify-center">
          {children}
        </main>
      </div>
    </>
  );
};
