import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function Layout({ children, title = "HP by Nextjs" }) {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen text-gray-600 text-sm font-mono">
      <Head>
        <title>{title}</title>
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
      <main className="flex flex-1 justify-center items-center flex-col w-screen h-screen">
        {children}
      </main>
      <footer className="w-full h-12 flex justify-center items-center">
        <a
          className="flex items-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className="h-4 ml-2">
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
