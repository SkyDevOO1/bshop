import clsx from "clsx";

interface TypographyProps {
  variant?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "caption1"
    | "caption2"
    | "caption3"
    | "caption4";
  weight?: "small" | "medium" | "large";
  theme?:
    | "gray"
    | "accent"
    | "secondary"
    | "white"
    | "danger"
    | "success"
    | "warning";
  children?: React.ReactNode;
  className?: string;
  component?: "h1" | "h2" | "h3" | "h4" | "h5" | "p" | "span" | "div";
}
const Typography = ({
  children,
  variant = "h1",
  className,
  theme,
  weight = "medium",
  component: Component = "h1",
}: TypographyProps) => {
  let variantStyle: string = "",
    weightStyle: string = "",
    themStyle: string = "";
  switch (variant) {
    case "h1":
      variantStyle = "text-6xl font-bold";
      break;
    case "h2":
      variantStyle = "text-5xl font-bold";
      break;
    case "h3":
      variantStyle = "text-3xl font-bold";
      break;
    case "h4":
      variantStyle = "text-2xl font-bold";
      break;
    case "h5":
      variantStyle = "text-xl font-bold";
      break;
    case "caption1":
      variantStyle = "text-lg font-bold";
      break;
    case "caption2":
      variantStyle = "text-md font-bold";
      break;
    case "caption3":
      variantStyle = "text-sm font-bold";
      break;
    case "caption4":
      variantStyle = "text-xs font-bold";
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
    case "accent":
      themStyle = "text-primary";
      break;
    case "gray":
      themStyle = "text-gray-500";
      break;
    case "secondary":
      themStyle = "text-secondary";
      break;
    case "white":
      themStyle = "text-white";
      break;
    case "danger":
      themStyle = "text-alert-danger";
      break;
    case "success":
      themStyle = "text-alert-success";
      break;
    case "warning":
      themStyle = "text-alert-warning";
      break;
  }
  return (
    <Component
      className={clsx(variantStyle, themStyle, weightStyle, className)}
    >
      {children}
    </Component>
  );
};

export default Typography;
