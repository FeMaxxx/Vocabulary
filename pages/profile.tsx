import { FC, useEffect } from "react";
import ProfilePage from "@/components/Pages/Profile";
import { useGlobalState } from "@/globalState";
import { useRouter } from "next/router";

const Profile: FC = () => {
  const { isLogedIn } = useGlobalState();
  const router = useRouter();

  useEffect(() => {
    if (!isLogedIn) router.push("/login");
  }, []);

  return <ProfilePage />;
};

export default Profile;
