import { FC, useEffect } from "react";
import { useGlobalState } from "@/globalState";
import { useRouter } from "next/router";
import { Loader } from "@/components/Loader";
import { LoaderWrap } from "./verification.styled";

const Verification: FC = () => {
  const router = useRouter();
  const { verifyEmail, isLogedIn } = useGlobalState();

  useEffect(() => {
    const verificationCode = router.query.verificationCode as any;

    if (!isLogedIn && verificationCode) {
      verifyEmail(verificationCode);
    }
  }, [router.query]);

  useEffect(() => {
    if (isLogedIn) {
      router.push("/");
    } else {
      router.push("/login");
    }
  }, []);

  return (
    <LoaderWrap>
      <Loader size={200} />
    </LoaderWrap>
  );
};

export default Verification;
