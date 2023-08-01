import { FC, ReactNode, useEffect } from "react";
import localFont from "next/font/local";
import { Main } from "@/components/Main";
import { Header } from "../Header";
import { useGlobalState } from "@/globalState";
import { Loader } from "../Loader";
import { LayoutContainer, LoaderWrap } from "./Layout.styled";

interface LayoutProps {
  children: ReactNode;
}

const myFont = localFont({
  src: [
    {
      path: "../../fonts/Quicksand-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../fonts/Quicksand-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
});

const Layout: FC<LayoutProps> = ({ children }) => {
  const { siteLoading, getCurrentUser, isLogedIn } = useGlobalState();

  useEffect(() => {
    getCurrentUser();
  }, []);

  if (siteLoading || isLogedIn === null)
    return (
      <LoaderWrap>
        <Loader size={200} />
      </LoaderWrap>
    );

  return (
    <LayoutContainer className={myFont.className}>
      <Header />
      <Main>{children}</Main>
    </LayoutContainer>
  );
};

export default Layout;
