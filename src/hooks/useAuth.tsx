import { UserInterface } from "@/interface/user-interface";
import axios from "axios";
import { cookies } from "next/headers";
import { useEffect, useState } from "react";

export default async function useAuth() {
  const [authUser, setAuthUser] = useState<UserInterface | null>(null);
  const [authUserIsLoading, setAuthUserIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const findUser = async () => {
      try {
        const connexionToken = cookies().get("connexionToken");
        const user = await axios.post("/api/useauth", connexionToken);
        setAuthUser(user.data);
        setAuthUserIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    findUser();
  }, []);

  return {
    authUser,
    authUserIsLoading,
  };
}
