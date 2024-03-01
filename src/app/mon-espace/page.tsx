import { Layout } from "@/ui/components/Layout/Layout";
import Container from "@/ui/components/container/container";
import { Button } from "@/ui/design/Button/Button";
import Typography from "@/ui/design/Typography/Typography";
import { Box } from "@/ui/design/box/box";
import { RiEditLine } from "react-icons/ri";

export default function Monespace() {
  return (
    <>
      <Layout>
        <Container className="mt-3 mb-3">
          <div className="w-full flex items-center justify-between">
            <div className=" max-w-96">
              <Box clasName="flex flex-col space-y-5">
                <div className="space-y-1 flex items-center space-x-10">
                  <img
                    src={"https://api.dicebear.com/7.x/initials/svg?seed=Bshop"}
                    alt="profil de l'utilisateur"
                    height={100}
                    width={100}
                    className="rounded-full shadow-lg"
                  />
                  <div>
                    <Typography variant="h5" component="span" theme="gray">
                      Nouhou Diallo
                    </Typography>
                  </div>
                </div>
                <div className="flex flex-col space-y-2">
                  <Button
                    icon={{ icon: RiEditLine }}
                    iconPosition="left"
                    className="text-center"
                  >
                    Modifier mon profile
                  </Button>
                  <Button variant="danger">Deconnexion</Button>
                </div>
              </Box>
            </div>
            <div className="bg-blue-900 p-4"></div>
          </div>
        </Container>
      </Layout>
    </>
  );
}
