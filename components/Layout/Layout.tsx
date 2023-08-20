import { FC, ReactNode, useEffect } from "react";
import localFont from "next/font/local";
import { Main } from "@/components/Main";
import { Header } from "../Header";
import { useGlobalState } from "@/globalState";
import { Loader } from "../Loader";
import { instance } from "@/api/config";
import { LayoutContainer, LoaderWrap } from "./Layout.styled";

interface LayoutProps {
  children: ReactNode;
}

export const quicksand = localFont({
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
    const currentUrl = window.location.href;
    const url = new URL(currentUrl);
    const queryParams = new URLSearchParams(url.search);
    const accessToken = queryParams.get("accessToken");
    const refreshToken = queryParams.get("refreshToken");

    if (accessToken && refreshToken) {
      instance.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
      localStorage.setItem("accessToken1", accessToken as string);
      localStorage.setItem("refreshToken1", refreshToken as string);
    } else {
      const accessToken = localStorage.getItem("accessToken1");
      instance.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
    }

    getCurrentUser();
  }, []);

  if (siteLoading || isLogedIn === null)
    return (
      <LoaderWrap>
        <Loader size={200} />
      </LoaderWrap>
    );

  return (
    <>
      <style jsx global>{`
        :root {
          --quicksand-font: ${quicksand.style.fontFamily};
        }
      `}</style>

      <LayoutContainer className={quicksand.className}>
        <Header />

        <Main>{children}</Main>
      </LayoutContainer>
    </>
  );
};

export default Layout;
