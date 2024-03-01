"use client";
import { useToggle } from "@/hooks/use-toggle";
import { LoginFormFieldType } from "@/types/forms";
import axios from "axios";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { LoginView } from "./login.view";

export const LoginContainer = () => {
  const { value: isLoading, setValue: setIsLoading } = useToggle();
  const router = useRouter();
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

      if (data.message !== "connexion avec succèss") {
        setIsLoading(false);
        toast.error(data.message);
      } else {
        toast.success(data.message);
      }
      if (data.message === "connexion avec succèss") {
        setIsLoading(false);

        reset();

        router.push("/mon-espace");
      }
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
