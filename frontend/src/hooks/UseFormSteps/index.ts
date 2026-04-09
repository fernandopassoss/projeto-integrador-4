import { useContext } from "react";
import { FormStepsContextType } from "../../types/formStepsContextType";
import { FormStepsContext } from "../../context";

export const useFormSteps = (): FormStepsContextType => {
  const context = useContext(FormStepsContext);

  if (!context) {
    throw new Error("useFormSteps must be used within a FormStepsProvider");
  }

  return context;
};
