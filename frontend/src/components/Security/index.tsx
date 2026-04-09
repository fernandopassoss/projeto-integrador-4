import { EyeIcon } from "@heroicons/react/24/outline";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useFormSteps } from "../../hooks";
import { ButtonStepForm } from "../ButtonStepForm";
import { ControllerTextInput } from "../ControllerTextInput";
import { securityValidation } from "../../utils";

export const Security: React.FC = () => {
  const { control, handleSubmit } = useForm({
    resolver: yupResolver(securityValidation),
  });

  const { goToNextStep, updateFormData } = useFormSteps();

  const onSubmit = (values: any) => {
    const { password } = values;

    updateFormData({password});
    
    goToNextStep();
  };  

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-6 w-full h-full justify-center p-8"
    >
      <div className="flex gap-4 w-full items-center justify-between">
        <ControllerTextInput
          control={control}
          name="password"
          autoFocus
          label="Senha"
          type="password"
          placeholder="Digite uma senha"
          rightIcon={<EyeIcon className="text-[#333] w-5 h-5" />}
        />
        <ControllerTextInput
          control={control}
          type="password"
          name="confirmedPassword"
          label="Confirmar senha"
          placeholder="Confirme sua senha"
          rightIcon={<EyeIcon className="text-[#333] w-5 h-5" />}
        />
      </div>

      <div className="flex justify-end items-end mt-10">
        <ButtonStepForm />
      </div>
    </form>
  );
};
