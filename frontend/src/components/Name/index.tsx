import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useFormSteps } from "../../hooks";
import { stepNameValidation } from "../../utils";
import { ButtonStepForm } from "../ButtonStepForm";
import { ControllerTextInput } from "..";
import { UploadAvatar } from "../UploadAvatar";

export const Name: React.FC = () => {
  const { handleSubmit, control } = useForm({
    resolver: yupResolver(stepNameValidation),
  });

  const { goToNextStep, updateFormData } = useFormSteps();
  const [avatar, setAvatar] = useState<File[]>([]);

  const onSubmit = (values: any) => {
    const { firstName, lastName } = values;
    
    updateFormData({
      image: avatar.length > 0 ? avatar : null,
      person: {
        ...values,
        firstName,
        lastName
      }
    });
  
    goToNextStep();
  };

  return (
    <form
      className="flex flex-col gap-6 w-full h-full justify-center p-8"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col gap-8">
        <h3 className="text-white text-3xl font-extrabold text-center md:hidden">Signup</h3>

        <ControllerTextInput
          control={control}
          label="Primeiro nome"
          autoFocus
          placeholder="Digite seu primeiro nome"
          name="firstName"
        />
        <ControllerTextInput
          control={control}
          label="Segundo nome"
          placeholder="Digite seu segundo nome"
          name="lastName"
        />
      </div>

      <div className="mt-4">
        <UploadAvatar onHandleSelectedAvatar={setAvatar} />
      </div>

      <div className="flex justify-end items-end mt-10">
        <ButtonStepForm />
      </div>
    </form>
  );
};
