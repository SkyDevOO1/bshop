import { Layout } from "@/ui/components/Layout/Layout";
import { Card } from "@/ui/components/card/card";
import Container from "@/ui/components/container/container";
import { Button } from "@/ui/design/Button/Button";
import Typography from "@/ui/design/Typography/Typography";
import Image from "next/image";
import Link from "next/link";
import { RiMailFill, RiShoppingBagFill, RiWhatsappFill } from "react-icons/ri";
export default function Home() {
  interface cardDataType {
    cardTitle: string;
    cardContent: string;
    cardImgSrc: string;
    cardImgAlt: string;
  }
  const cardData: cardDataType[] = [
    {
      cardTitle: "Personnalisation Distinctive",
      cardContent:
        "Explorez nos produit exclusifs pour une touche unique au quotidien.",
      cardImgSrc: "svg/Personalization.svg",
      cardImgAlt: "illustration d'une personnalisation",
    },
    {
      cardTitle: "Achat Simplifié",
      cardContent:
        " Personnalisez, ajoutez au panier, et finalisez votre commande en toute simplicité.",
      cardImgSrc: "svg/Plain-credit-card.svg",
      cardImgAlt: "illustration d'un paiyement par credit card",
    },
    {
      cardTitle: "Livraison Express",
      cardContent:
        "Recevez rapidement vos produits personnalisés chez vous à Conakry, pour une expérience d'achat exceptionnelle",
      cardImgSrc: "svg/Delivery-address.svg",
      cardImgAlt: "illustration d'une livraison",
    },
  ];

  return (
    <>
      <Layout>
        <Container className="py-10 space-y-20">
          <div className="space-y-3 ">
            <div className="w-full flex items-center gap-3">
              <div className="w-full z-10 space-y-3">
                <Typography
                  variant="h1"
                  component="h1"
                  className="max-w-md text"
                >
                  Prêt à révolutionner votre shopping à Conakry ?
                </Typography>
                <Typography
                  variant="caption2"
                  component="p"
                  className="max-w-xl"
                  theme="gray"
                >
                  À Conakry, vous ne cherchez pas simplement un produit, vous
                  cherchez une expérience unique. Chez Bshop, nous sommes fiers
                  de vous proposer une sélection exclusive de produit
                  personnalisés qui sauront ajouter une touche d'originalité à
                  votre quotidien.
                </Typography>
              </div>
              <div className="hidden md:block">
                <Image
                  height={630}
                  width={630}
                  src="/assets/svg/Ecommerce-web-page.svg"
                  alt="illustration d'une personne entrain de faire du shopping"
                />
              </div>
            </div>
            <div className="">
              <Button baseUrl="/boutique" icon={{ icon: RiShoppingBagFill }}>
                Visitez notre Boutique
              </Button>
            </div>
          </div>
          <div className="space-y-7">
            <Typography
              variant="h1"
              component="h2"
              className="text-center text2"
            >
              De l'Exploration à la Personnalisation
            </Typography>
            <Typography
              variant="caption2"
              component="p"
              className="text-center"
              theme="gray"
            >
              De la découverte à la réception soignée à Conakry, Bshop vous
              offre une expérience de personnalisation fluide. Choisissez,
              personnalisez, et finalisez votre commande en quelques clics,
              bénéficiant d'une livraison rapide pour préserver l'intégrité de
              chaque création. Profitez d'une expérience shopping
              exceptionnelle, de la commande à la livraison, avec Bshop.
            </Typography>
            <div className="flex flex-wrap  md:flex items-start justify-center gap-7">
              {cardData.map((data, index) => (
                <Card
                  key={index}
                  cardTitle={data.cardTitle}
                  cardContent={data.cardContent}
                  imageSrc={data.cardImgSrc}
                  imageAlt={data.cardImgAlt}
                />
              ))}
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex flex-col items-center w-full sm:flex-row-reverse gap-3">
              <div className="w-full z-10 space-y-3">
                <Typography
                  variant="h2"
                  component="h3"
                  className="max-w-md text"
                >
                  Avez-vous des questions ?
                </Typography>
                <Typography
                  variant="caption2"
                  component="p"
                  className="max-w-xl"
                  theme="gray"
                >
                  Nous sommes là pour vous aider ! N'hésitez pas à poser toutes
                  vos questions ou à partager vos préoccupations en utilisant la
                  section dédiée sur notre site. Notre équipe dévouée se fera un
                  plaisir de vous assister et de garantir une expérience d'achat
                  exceptionnelle."
                </Typography>
                <div className="space-x-3 space-y-3">
                  <Button
                    variant="outline"
                    baseUrl="https://whatsapp.com"
                    linkType="external"
                    icon={{ icon: RiWhatsappFill }}
                  >
                    Whatsapp
                  </Button>
                  <Button
                    variant="outline"
                    baseUrl="mailto:nouhouporeco3@gmail.com"
                    icon={{ icon: RiMailFill }}
                  >
                    E-mail
                  </Button>
                </div>
              </div>
              <div className="w-full md:bloc ">
                <Image
                  height={430}
                  width={430}
                  src="/assets/svg/questions-animate.svg"
                  alt="illustration d'une personne entrain de faire du shopping"
                />
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex flex-col items-center w-full sm:flex-row-reverse gap-3">
              <div className="w-full z-10 space-y-3">
                <Typography
                  variant="h2"
                  component="h3"
                  className="max-w-md text"
                >
                  Avez-vous des questions ?
                </Typography>
                <Typography
                  variant="caption2"
                  component="p"
                  className="max-w-xl"
                  theme="gray"
                >
                  Notre équipe dévouée de service clientèle est disponible
                  24h/24 pour répondre à toutes vos questions. Composée de
                  professionnels passionnés, elle est prête à vous assister avec
                  réactivité, que ce soit pour des détails sur nos produits, des
                  conseils de personnalisation ou toute autre demande.
                  Contactez-nous via le chat en direct sur notre site ou par
                  e-mail à{" "}
                  <Link
                    href={"mailto:bshop.support@gmail.com"}
                    className="text-primary-500"
                  >
                    bshop.support@gmail.com.
                  </Link>{" "}
                  Votre satisfaction est notre priorité absolue chez Bshop.
                </Typography>
              </div>
              <div className="w-full md:bloc ">
                <Image
                  height={430}
                  width={430}
                  src="/assets/svg/Service-24-7.svg"
                  alt="illustration d'une personne entrain de faire du shopping"
                />
              </div>
            </div>
          </div>
        </Container>
      </Layout>
    </>
  );
}
