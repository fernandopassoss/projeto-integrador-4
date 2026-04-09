import { Link } from "react-router-dom";
import { RenderConditional } from "../RenderConditional";
import { useFormSteps } from "../../hooks";

export const ButtonStepForm: React.FC = () => {
  const { currentStep, goToPreviousStep } = useFormSteps();

  return (
    <div className="flex items-center gap-6">
      <div className="text-gray-100">
        <RenderConditional condition={currentStep === 0}>
          <Link to="/">Voltar para login</Link>
        </RenderConditional>

        <RenderConditional condition={currentStep !== 0}>
          <button onClick={goToPreviousStep}>Voltar</button>
        </RenderConditional>
      </div>

      <button className="py-2 px-5 bg-[#333] rounded-[4px] text-white">
        Próximo
      </button>
    </div>
  );
};
