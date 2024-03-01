import { IconProps } from "@/types/iconType";
import clsx from "clsx";
import Link from "next/link";
import { Spinner } from "../Spinner/Spinner";

interface Props {
  size?: "small" | "medium" | "large";
  children?: React.ReactNode;
  variant?:
    | "outline"
    | "secondary"
    | "accent"
    | "disabled"
    | "ico"
    | "gray"
    | "danger";
  theme?: "primary" | "secondary" | "gray";
  weight?: "small" | "medium" | "large";
  className?: string;
  icon?: IconProps;
  iconTheme?: "accent" | "secondary" | "gray";
  iconPosition?: "left" | "right";
  isDisabled?: boolean;
  isLoading?: boolean;
  action?: Function;
  btnType?: "button" | "submit";
  baseUrl?: string;
  linkType?: "internal" | "external";
}
export const Button = ({
  children,
  variant = "accent",
  className,
  icon,
  iconTheme = "accent",
  iconPosition = "right",
  size = "small",
  isDisabled,
  theme,
  isLoading,
  weight = "small",
  action,
  btnType = "button",
  baseUrl,
  linkType = "internal",
}: Props) => {
  let variantStyle: string = "",
    sizeStyles: string = "",
    themeStyle: string = "",
    weightStyle: string = "",
    icosize: number = 0;
  const handleClick = () => {
    if (action) {
      action();
    }
  };
  switch (variant) {
    case "accent":
      variantStyle = "bg-primary text-white trans rounded hover:bg-primary-700";
      break;
    case "outline":
      variantStyle =
        "bg-white trans hover:bg-gray-300/50 border border-gray-500 text-gray-900 rounded";
      break;
    case "secondary":
      variantStyle =
        "bg-primary/20 text-primary trans rounded hover:bg-primary/30";
      break;
    case "gray":
      variantStyle =
        "bg-gray-600/50 text-white trans rounded hover:bg-gray-500";
      break;
    case "disabled":
      variantStyle =
        "bg-gray-400/70 border rounded border-gray-500 text-gray-500 cursor-not-allowed";
      break;
    case "danger":
      variantStyle =
        "bg-alert-danger border rounded trans text-white hover:bg-alert-danger/80";
      break;
    case "ico":
      if (iconTheme === "accent") {
        variantStyle =
          "bg-primary text-white trans rounded-full hover:bg-primary-700";
      }
      if (iconTheme === "secondary") {
        variantStyle =
          "bg-primary/10 text-primary trans rounded-full hover:bg-primary/30";
      }
      if (iconTheme === "gray") {
        variantStyle =
          "bg-gray-700 text-white trans rounded-full hover:bg-gray-600";
      }
      break;
  }
  switch (size) {
    case "small":
      sizeStyles = `text-md font-medium ${
        variant === "ico"
          ? "flex items-center justify-center w-10 h-10"
          : "px-3.5 py-3"
      } `;
      icosize = 18;
      break;
    case "medium": // medium
      sizeStyles = `text-lg font-medium ${
        variant === "ico"
          ? "flex items-center justify-center w-[50px] h-[50px]"
          : "px-4 py-3.5"
      } `;
      icosize = 20;
      break;
    case "large":
      sizeStyles = `text-xl font-medium ${
        variant === "ico"
          ? "flex items-center justify-center w-[60px] h-[60px]"
          : "px-5 py-4"
      } `;
      icosize = 24;
      break;
  }
  switch (weight) {
    case "small":
      weightStyle = "font-medium";
      break;
    case "medium":
      weightStyle = "font-semibold";
      break;
    case "large":
      weightStyle = "font-bold";
      break;
  }
  switch (theme) {
    case "primary":
      themeStyle = "text-primary";
      break;
    case "secondary":
      themeStyle = "text-secondary";
      break;
    case "gray":
      themeStyle = "text-gray";
      break;
  }
  const ButtonElement = (
    <button
      // onClick={handleClick}
      type={btnType}
      className={clsx(
        variantStyle,
        sizeStyles,
        `${isDisabled && "cursor-not-allowed"}`,
        themeStyle,
        weightStyle,
        icosize,
        isLoading && "cursor-not-allowed",
        "relative",
        className
      )}
      disabled={isDisabled || (isLoading && true)}
    >
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          {variant === "accent" || variant === "ico" ? (
            <Spinner size="small" variant="white" />
          ) : (
            <Spinner size="small" />
          )}
        </div>
      )}
      <div className={clsx(isLoading && "invisible")}>
        {icon && variant === "ico" ? (
          <>
            <icon.icon size={icosize} />
          </>
        ) : (
          <div
            className={clsx(icon && "flex items-center gap-1 justify-center")}
          >
            {icon && iconPosition === "left" && <icon.icon size={icosize} />}
            {children}
            {icon && iconPosition === "right" && <icon.icon size={icosize} />}
          </div>
        )}
      </div>
    </button>
  );
  return (
    <>
      {baseUrl && linkType === "internal" && (
        <Link href={baseUrl}>{ButtonElement}</Link>
      )}
      {baseUrl && linkType === "external" && (
        <Link href={baseUrl} target="_blank">
          {ButtonElement}
        </Link>
      )}
      {!baseUrl && ButtonElement}
    </>
  );
};
