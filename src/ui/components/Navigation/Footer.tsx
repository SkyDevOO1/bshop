import { IconButton } from "@/ui/design/Button/Icon-Button";
import Typography from "@/ui/design/Typography/Typography";
import Link from "next/link";
import Container from "../container/container";
import { FooterData, devSocialNetworks } from "./Footer-Data";
import { Fragment } from "./Footer-element";

export const Footer = () => {
  const getFullYear = new Date().getFullYear();

  return (
    <div className="bg-gray">
      <Container className=" py-10 space-y-7">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          {FooterData.map((element, index) => (
            <Fragment key={index} data={element} />
          ))}
        </div>
        <hr className=" h-1 bg-gray" />
        <div className="flex items-center justify-between gap-5">
          <div>
            <Typography variant="caption3" theme="gray">
              Copyright &copy; {getFullYear} | Propulsed by{" "}
              <Link
                href={"https://github.com/SkyDevOO1"}
                target="_blank"
                className="underline"
              >
                SkyDev
              </Link>
            </Typography>
          </div>
          <div className="flex items-center gap-3">
            {devSocialNetworks.map((iconLink, index) => (
              <IconButton
                key={index}
                variant="gray"
                icon={{ icon: iconLink.icon }}
                baseUrl={iconLink.baseUrl}
                linkType={iconLink.linkType}
                size={18}
              />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};
