import { IconProps } from "@/types/iconType";
import clsx from "clsx";
import Link from "next/link";

interface Props {
  icon: IconProps;
  variant?: "accent" | "gray";
  baseUrl: string;
  linkType: "internal" | "external";
  size?: number;
}

export const IconButton = ({
  icon,
  variant = "accent",
  baseUrl,
  linkType = "internal",
  size = 24,
}: Props) => {
  let variantStyle: string = "";

  switch (variant) {
    case "accent":
      variantStyle =
        "p-2 bg-primary-800 text-white trans rounded-full hover:bg-primary-700";
      break;
    case "gray":
      variantStyle =
        "p-2 bg-gray-600/60 text-white trans rounded-full hover:bg-gray-500";
      break;
  }

  const buttonElement = (
    <button className={clsx(variantStyle)}>
      <icon.icon size={size} />
    </button>
  );
  return (
    <>
      {linkType === "external" && (
        <Link href={baseUrl} target="_blank">
          {buttonElement}
        </Link>
      )}
      {linkType === "internal" && <Link href={baseUrl}>{buttonElement}</Link>}
    </>
  );
};
