"use client";
import { UserInterface } from "@/interface/user-interface";
import { useState } from "react";

export const useSession = () => {
  const [user, setUser] = useState<UserInterface | null>();
  return {
    user,
    setUser,
  };
};
