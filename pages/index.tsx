import { FC } from "react";
import HomePage from "@/components/Pages/Home";

const Home: FC = () => {
  return <HomePage />;
};

export default Home;

// export async function getServerSideProps({ req, res }: any) {
//   const accessTokenValue = req.cookies.accessToken;
//   try {
//     const response: any = await instance.get(`/auth/current`, {
//       headers: {
//         Authorization: `Bearer ${accessTokenValue}`,
//       },
//     });

//     return {
//       props: { email: response.data.user.email },
//     };
//   } catch (error) {
//     return {
//       props: { email: null },
//     };
//   }
// }
