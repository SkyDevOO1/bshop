import Typography from "@/ui/design/Typography/Typography";
import Link from "next/link";
import { FooterDataTypes } from "./Footer-Data";

interface props {
  data: FooterDataTypes;
}
export const Fragment = ({ data }: props) => {
  return (
    <div className="flex flex-col space-y-2.5">
      <div>
        <Typography variant="caption1" weight="medium" theme="white">
          {data.label}
        </Typography>
      </div>
      <div className="flex flex-col">
        {data.appLinks.map((link, index) => (
          <Typography key={index} variant="caption2" theme="gray">
            <Link href={link.url} className="trans hover:text-primary-700">
              {link.label}
            </Link>
          </Typography>
        ))}
      </div>
    </div>
  );
};
