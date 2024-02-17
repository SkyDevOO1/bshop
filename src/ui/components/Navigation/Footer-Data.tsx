import { IconType } from "react-icons";
import { RiDiscordFill, RiFacebookFill, RiGithubFill } from "react-icons/ri";

export interface FooterDataTypes {
  label: string;
  appLinks: appLinksTypes[];
}

export interface appLinksTypes {
  label: string;
  url: string;
}
interface devSocialNetworksType {
  icon: IconType;
  baseUrl: string;
  linkType: "internal" | "external";
}
export const FooterData: FooterDataTypes[] = [
  {
    label: "App",
    appLinks: [
      {
        label: "Acceuil",
        url: "/",
      },
      {
        label: "Boutique",
        url: "/boutique",
      },
    ],
  },
  {
    label: "Utlisateurs",
    appLinks: [
      {
        label: "mon espace",
        url: "/mon-espace",
      },
      {
        label: "inscription",
        url: "/mon-espace/inscription",
      },
      {
        label: "connexion",
        url: "/mon-espace/connexion",
      },
    ],
  },
  {
    label: "Informations",
    appLinks: [
      {
        label: "Confidentialité",
        url: "/#",
      },
      {
        label: "À propos",
        url: "/#",
      },
      {
        label: "Contact",
        url: "/#",
      },
    ],
  },
  {
    label: "Réseaux",
    appLinks: [
      {
        label: "Facebook",
        url: "/#",
      },
      {
        label: "Instagram",
        url: "/#",
      },
    ],
  },
];

export const devSocialNetworks: devSocialNetworksType[] = [
  {
    icon: RiFacebookFill,
    baseUrl: "https://facebook.com",
    linkType: "external",
  },
  {
    icon: RiDiscordFill,
    baseUrl: "https://discord.com",
    linkType: "external",
  },
  {
    icon: RiGithubFill,
    baseUrl: "https://github.com/SkyDevOO1",
    linkType: "external",
  },
];
