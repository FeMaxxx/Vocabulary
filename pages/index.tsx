import { FC } from "react";
import HomePage from "@/components/Pages/Home";
import Head from "next/head";

const Home: FC = () => {
  return (
    <>
      <Head>
        <title>Vocabulary</title>
      </Head>
      <HomePage />
    </>
  );
};

export default Home;
