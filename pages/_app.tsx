import { FC } from "react";
import Layout from "@/components/Layout";
import "@/styles/index.scss";
import { useRouter } from "next/router";

interface AppProps {
  Component: React.ComponentType;
  pageProps: any;
}

const App: FC<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter();

  if (router.pathname !== "/404") {
    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    );
  }

  return <Component {...pageProps} />;
};

export default App;
