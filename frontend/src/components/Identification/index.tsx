import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useFormSteps } from "../../hooks";
import { ButtonStepForm } from "../ButtonStepForm";
import { ControllerInputMask } from "../ControllerInputMask";
import { ControllerTextInput } from "../ControllerTextInput";
import { identificationValidation } from "../../utils";

export const Identification: React.FC = () => {
  const { control, handleSubmit } = useForm({
    resolver: yupResolver(identificationValidation),
  });

  const { goToNextStep, updateFormData, data } = useFormSteps();

  const onSubmit = (values: any) => {
    const { email, birthDate, cpf, phone } = values;
    
    updateFormData({
      ...data,
      mail: email,
      person: {
        ...data.person,
        cpf,
        phone,
        birthDate
      }
    });
  
    goToNextStep();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-6 w-full h-full justify-center p-8"
    >
      <div className="flex gap-4 w-full items-center justify-between mb-4">
        <ControllerTextInput
          control={control}
          name="email"
          label="E-mail"
          placeholder="Digite seu E-mail"
          autoFocus
        />
        <ControllerInputMask
          mask="(99) 99999-9999"
          control={control}
          name="phone"
          label="Telefone"
          placeholder="Digite seu telefone"
        />
      </div>

      <div className="flex gap-4 w-full items-center justify-between">
        <ControllerInputMask
          mask="999.999.999-99"
          control={control}
          name="cpf"
          label="CPF"
          placeholder="Digite seu CPF"
        />
        <ControllerInputMask
          mask="99/99/9999"
          control={control}
          name="birthDate"
          label="Data de nascimento"
          placeholder="Digite sua data de nascimento"
        />
      </div>

      <div className="flex justify-end items-end mt-10">
        <ButtonStepForm />
      </div>
    </form>
  );
};
