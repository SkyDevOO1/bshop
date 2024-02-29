import { UserInterface } from "@/interface/user-interface";
import { useState } from "react";

export const UseAuth = () => {
  const [authUser, setAuthUser] = useState<UserInterface | null>(null);
  const [authUserIsLoading, setAuthUserIsLoading] = useState<boolean>(true);
  // useEffect(() => {
  //   const handleAuthUser = async () => {
  //     const getToken = "access_token";
  //     const response = await axios.post("/api/useauth", getToken);

  //     if (response.data) {
  //       console.log(response);

  //       setAuthUserIsLoading(false);
  //     }
  //   };

  //   // handleAuthUser();
  // }, []);

  return {
    authUser,
    authUserIsLoading,
  };
};
