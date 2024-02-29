"use client";
import { UseAuth } from "@/hooks/useAuth";
import { userDocument } from "@/interface/user-interface";
import { createContext, useContext } from "react";

const init = {
  uid: "",
  email: "",
  displayName: "",
  phoneNumber: "",
  photoURL: "",
  userDocument: {} as userDocument,
};

const authUserContext = createContext({
  authUser: init,
  authUserIsLoading: true,
});
interface Props {
  children: React.ReactNode;
}
export function AuthUserProvoder({ children }: Props) {
  const auth = UseAuth();

  return (
    <authUserContext.Provider
      value={{
        authUser: auth.authUser as {
          uid: string;
          email: string;
          displayName: string;
          phoneNumber: string;
          photoURL: string;
          userDocument: userDocument;
        },
        authUserIsLoading: auth.authUserIsLoading,
      }}
    >
      {children}
    </authUserContext.Provider>
  );
}
export function useAuth() {
  return useContext(authUserContext);
}
