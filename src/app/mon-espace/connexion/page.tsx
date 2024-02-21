import { LoginContainer } from "@/ui/modules/auth/login/login.container";
import { Metadata } from "next";

type Props = {};

export const metadata: Metadata = {
  title: "Connexion",
  description: "Page de connexion de Bshop",
};
export default function page({}: Props) {
  return (
    <>
      <LoginContainer />
    </>
  );
}
