import clsx from "clsx";
import Typography from "../Typography/Typography";

interface Props {
  type?: "text" | "email" | "password" | "number";
  placeholder: string;
  className?: string;
  isLoading: boolean;
  register: any;
  errors: any;
  errorMsg?: string;
  id: string;
  required?: boolean;
  isAutoCompleted?: boolean;
}

export const Input = ({
  isLoading,
  type = "text",
  placeholder,
  className,
  register,
  required = true,
  errors,
  errorMsg = "Tu dois renseigner ce champ",
  id,
  isAutoCompleted = false,
}: Props) => {
  return (
    <div className="space-y-2">
      <input
        type={type}
        placeholder={placeholder}
        className={clsx(
          isLoading && "cursor-not-allowed",
          errors[id]
            ? "placeholder-alert-danger text-alert-danger"
            : "placeholder-gray-600",
          "w-full p-4 font-medium border border-gray-400 rounded focus:outline-none focus:ring-1 focus:ring-primary ",
          className
        )}
        disabled={isLoading}
        {...register(id, {
          required: {
            value: required,
            message: errorMsg,
          },
        })}
        autoComplete={isAutoCompleted ? "on" : "off"}
      />
      {errors[id] && (
        <Typography variant="caption4" component="div" theme="danger">
          {errors[id]?.message}
        </Typography>
      )}
    </div>
  );
};
