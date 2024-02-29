"use client";
import { useToggle } from "@/hooks/use-toggle";
import { LoginFormFieldType } from "@/types/forms";
import axios from "axios";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { LoginView } from "./login.view";

export const LoginContainer = () => {
  const { value: isLoading, setValue: setIsLoading } = useToggle();
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
    setIsLoading(true);
    try {
      const { data } = await axios.post("/api/auth/connexion", formData);

      console.log(data.message);

      toast.success(data.message);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
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
