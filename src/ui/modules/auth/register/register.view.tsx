import { FormType } from "@/types/forms";
import { Layout } from "@/ui/components/Layout/Layout";
import Container from "@/ui/components/container/container";
import Typography from "@/ui/design/Typography/Typography";
import { Box } from "@/ui/design/box/box";
import Image from "next/image";
import Link from "next/link";
import { RegisterForm } from "./register.form";

interface Props {
  form: FormType;
}
export const RegisterView = ({ form }: Props) => {
  return (
    <Layout>
      <Container>
        <div className="w-full h-screen flex items-center justify-center">
          <div className="hidden md:block w-full">
            <Image
              height={450}
              width={450}
              src="/assets/svg/Sign-up.svg"
              priority
              alt="illustration d'une page de connexion"
            />
          </div>
          <div className="w-full">
            <Box clasName="space-y-5">
              <div className="flex items-center justify-between gap-3">
                <Typography variant="h3">Inscription</Typography>
                <div className="hidden box-8">
                  <Typography variant="caption4">Tu as un compte ?</Typography>
                  <Link
                    href={"/mon-espace/connexion"}
                    className="text-primary text-xs font-semibold trans hover:text-primary-500"
                  >
                    Connecte toi
                  </Link>
                </div>
              </div>

              <RegisterForm form={form} />

              <div className="hidden w-full box-7">
                <Typography variant="caption4">Tu as un compte ?</Typography>
                <Link
                  href={"/mon-espace/connexion"}
                  className="text-primary text-xs font-semibold trans hover:text-primary-500"
                >
                  Connecte toi
                </Link>
              </div>
            </Box>
          </div>
        </div>
      </Container>
    </Layout>
  );
};
