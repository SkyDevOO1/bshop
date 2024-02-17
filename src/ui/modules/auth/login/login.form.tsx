import { FormType } from "@/types/forms";
import { Button } from "@/ui/design/Button/Button";
import { Input } from "@/ui/design/Input/Input";

interface Props {
  form: FormType;
}
export const LoginForm = ({ form }: Props) => {
  const { register, handleSubmit, onSubmit, isLoading, errors, control } = form;
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
      <Input
        isLoading={isLoading}
        errors={errors}
        register={register}
        placeholder="johndoe@gmail.com"
        type="email"
        id="email"
        errorMsg="Vous devez rensigner votre address email"
      />
      <Input
        isLoading={isLoading}
        errors={errors}
        register={register}
        placeholder="mot de passe"
        type="password"
        id="password"
        errorMsg="Vous devez rensigner votre mot de passe"
      />
      <Button className="w-full" btnType="submit" isLoading={isLoading}>
        Se connecter
      </Button>
    </form>
  );
};
