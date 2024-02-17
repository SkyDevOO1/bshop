import { useToggle } from "@/hooks/use-toggle";
import { registerFormFieldType } from "@/types/forms";
import { SubmitHandler, useForm } from "react-hook-form";
import { RegisterView } from "./register.view";

export const RegisterContainer = () => {
  const { value: isLoading, setValue: setIsLoading, toggle } = useToggle();
  const {
    register,
    setValue,
    formState: { errors },
    handleSubmit,
    control,
    setError,
    reset,
  } = useForm<registerFormFieldType>();

  const onSubmit: SubmitHandler<registerFormFieldType> = async (formData) => {
    const { email, password } = formData;
  };

  return (
    <RegisterView
      form={{
        errors,
        register,
        handleSubmit,
        onSubmit,
        isLoading,
      }}
    />
  );
};
