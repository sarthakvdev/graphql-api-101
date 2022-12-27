import type { NextPage } from "next";
import Head from "next/head";
import UserData from "../components/UserData";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Head>
        <title>GraphQL 101</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center py-10 px-20 text-center">
        <UserData />
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <p>
          Built by
          <a
            href="https://sarthak.wtf"
            className="underline ml-1"
            rel="noopener noreferrer"
            target="_blank"
          >
            Sarthak
          </a>
        </p>
      </footer>
    </div>
  );
};

export default Home;
