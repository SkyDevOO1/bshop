"use client";
import { useToggle } from "@/hooks/use-toggle";
import { LoginFormFieldType } from "@/types/forms";
import { SubmitHandler, useForm } from "react-hook-form";
import { LoginView } from "./login.view";

export const LoginContainer = () => {
  const { value: isLoading, setValue: setIsLoading, toggle } = useToggle();
  const {
    register,
    setValue,
    formState: { errors },
    handleSubmit,
    control,
    setError,
    reset,
  } = useForm<LoginFormFieldType>();

  const onSubmit: SubmitHandler<LoginFormFieldType> = async (formData) => {
    toggle();
    //LOGIQUE DU CODE
    console.log(formData);
  };

  return (
    <LoginView
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
