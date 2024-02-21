import { RegisterContainer } from "@/ui/modules/auth/register/register.container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inscription",
  description: "Page d'inscription de Bshop",
};

export default function page() {
  return (
    <>
      <RegisterContainer />
    </>
  );
}
