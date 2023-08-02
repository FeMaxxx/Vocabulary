import { FC } from "react";
import Layout from "@/components/Layout";
import "@/styles/index.scss";

interface AppProps {
  Component: React.ComponentType;
  pageProps: any;
}

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />

      <div id="modalRoot"></div>
    </Layout>
  );
};

export default App;
