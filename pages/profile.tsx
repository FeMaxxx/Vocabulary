import { FC, useEffect } from "react";
import ProfilePage from "@/components/Pages/Profile";
import { useGlobalState } from "@/globalState";
import { useRouter } from "next/router";

const Profile: FC = () => {
  const { isLogedIn } = useGlobalState();
  const router = useRouter();

  if (isLogedIn === false) {
    router.push("/login");
    return null;
  }

  return <ProfilePage />;
};

export default Profile;
