"use client";
import { useToggle } from "@/hooks/use-toggle";
import { registerFormFieldType } from "@/types/forms";
import axios from "axios";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { RegisterView } from "./register.view";

export const RegisterContainer = () => {
  const router = useRouter();
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
    setIsLoading(true);

    const { email, password, phoneNumber } = formData;
    if (password.trim.length >= 8) {
      setError("password", {
        type: "custom",
        message: "Le mot de passe doit contenir au moins 8 caractères",
      });
    }
    if (!phoneNumber.startsWith("+224")) {
      setError("phoneNumber", {
        type: "custom",
        message: "Votre numero de telephone doit commencer par +224",
      });
    }

    try {
      const { data } = await axios.post("/api/auth/inscription", formData);

      setIsLoading(false);
      toast.success(data.message);
      reset();
      router.push("/mon-espace");
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
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
