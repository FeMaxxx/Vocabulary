import { FC } from "react";
import Layout from "@/components/Layout";
import "@/styles/index.scss";
import Head from "next/head";
import favicon from "../public/favicon.ico";

interface AppProps {
  Component: React.ComponentType;
  pageProps: any;
}

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Vocabulary</title>
        <link rel="icon" href={favicon.src} sizes="any" />
        <meta name="author" content="Fedechko Maxim" />
        <meta
          name="description"
          content="Vocabulary is a website for learning English words, storing and revising your vocabulary."
        />
        <meta name="keywords" content="Vocabulary, English words, Learning" />
        <meta property="og:title" content="Vocabulary" />
        <meta
          property="og:description"
          content="Vocabulary is a website for learning English words, storing and revising your vocabulary."
        />
        <meta property="og:image" content="https://i.imgur.com/czfxUNY.jpg" />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://vocabulary-topaz.vercel.app/"
        />
      </Head>
      <Layout>
        <Component {...pageProps} />

        <div id="modalRoot"></div>
      </Layout>
    </>
  );
};

export default App;
