import Head from "next/head";
import Link from "next/link";
import React from "react";

type Props = {
  children: any,
  title: string,
}

const Layout: React.FC<Props> = (props) => {
  const {children, title = "Yu's Home" } = props;
  return (
    <div className="flex flex-col justify-center items-center min-h-screen text-gray-600 text-sm font-mono">
      <Head>
        <title>{title}</title>
        <link rel="shortcut icon" href="favicon.ico" />
      </Head>
      <header>
        <nav className="bg-gray-800 w-screen">
          <div className="flex justify-center items-center h-14 md:h-20">
            <div className="flex space-x-2 md:space-x-4">
              <Link href="/">
                <a className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded md:text-2xl">
                  Home
                </a>
              </Link>
              <Link href="/about">
                <a className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded md:text-2xl">
                  About
                </a>
              </Link>
              <Link href="/work">
                <a className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded md:text-2xl">
                  Work
                </a>
              </Link>
              <Link href="/social">
                <a className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded md:text-2xl">
                  Social
                </a>
              </Link>
            </div>
          </div>
        </nav>
      </header>
      <main className="flex flex-1 justify-center items-center flex-col w-screen">
        {children}
      </main>
      <footer className="w-full h-28 flex flex-col text-gray-400">
        <div className="flex flex-col justify-center items-center">
          <div className="mb-1">
            <a
              className="flex items-center"
              href="https://github.com/Yubon94"
              target="_blank"
              rel="noopener noreferrer"
            >
              {"© 2020 Yu"}
            </a>
          </div>
          <div className="mb-1">
            <a
              className="flex items-center"
              href="https://opensource.org/licenses/mit-license.php"
              target="_blank"
              rel="noopener noreferrer"
            >
              {"Source code licensed MIT."}
            </a>
          </div>
          <div className="mb-1 flex flex-col justify-center items-center md:flex-row">
            <div className="">{"Website Content licensed"}</div>
            <div className="mt-1 md:pl-2 md:mt-0">
              <a
                className="flex items-center"
                href="https://creativecommons.org/licenses/by-nc-nd/3.0/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {"CC BY-NC-ND 3.0."}
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Layout;
