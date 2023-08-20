import { FC, useEffect } from "react";
import ErrorPage from "@/components/Pages/404";
import { useRouter } from "next/router";

const Error: FC = () => {
  const router = useRouter();

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      router.push("/");
    }, 3000);

    return () => {
      clearTimeout(timeoutID);
    };
  }, []);

  return <ErrorPage />;
};

export default Error;
