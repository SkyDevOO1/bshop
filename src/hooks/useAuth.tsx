import { UserInterface } from "@/interface/user-interface";
import { useState } from "react";

export const UseAuth = () => {
  const [authUser, setAuthUser] = useState<UserInterface | null>(null);
  const [authUserIsLoading, setAuthUserIsLoading] = useState<boolean>(true);
  // useEffect(() => {
  //   const handleAuthUser = async () => {
  //     // const Token = {
  //     //   tokenName: "access_token",
  //     // };
  //     const cok = cookies().getAll("access_token").toString();

  //     const user = await prisma.user.findMany({
  //       where: {
  //         token: Cookies as string,
  //       },
  //     });

  //     // const response = await fetch("/api/useauth");
  //     // const data = await response.json();
  //     console.log(user);

  //     setAuthUserIsLoading(false);
  //   };

  //   handleAuthUser();
  // }, []);

  return {
    authUser,
    authUserIsLoading,
  };
};
