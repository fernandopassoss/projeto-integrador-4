import {
  CheckCircleIcon,
  HomeIcon,
  IdentificationIcon,
  LockClosedIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import React from "react";

export const steps = [
  {
    id: "1",
    title: "Quem é você?",
    description: "Informe seu nome",
    icon: <UserIcon className="h-7 w-7 text-zinc-800" />,
  },
  {
    id: "2",
    title: "Nos Fale mais",
    description: "Dados cadastrais",
    icon: <IdentificationIcon className="h-7 w-7 text-zinc-800" />,
  },
  {
    id: "3",
    title: "Onde te encontramos?",
    description: "Dados de endereço",
    icon: <HomeIcon className="h-7 w-7 text-zinc-800" />,
  },
  {
    id: "4",
    title: "Crie sua segurança",
    description: "Senha para entrar",
    icon: <LockClosedIcon className="h-7 w-7 text-zinc-800" />,
  },
];

interface SidebarStepsProps {
  currentStep: number;
}

export const SidebarSteps: React.FC<SidebarStepsProps> = ({ currentStep }) => {
  const activated = currentStep;

  return (
    <div className="bg-[hsl(99,58%,52%)] h-full p-8 pr-20 hidden flex-col items-center justify-center gap-6 w-full md:flex">
      <div className="hidden flex-col justify-between gap-12 max-h-screen w-4/5 border-zinc-800 border-r-2 relative md:flex">
        {steps.map((item, index) => {
          return (
            <div className="flex items-center" key={item.id}>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-zinc-800">
                  {item.title}
                </span>
                <span className="text-lg text-zinc-800">
                  {item.description}
                </span>
              </div>
              <div
                className={`absolute -right-[30px] w-14 h-14 rounded-full flex items-center justify-center bg-[hsl(99,58%,52%)] border-2 border-zinc-800 ${
                  activated >= index + 1 && "!bg-zinc-800 !border-0"
                } ${
                  activated === index &&
                  "!bg-zinc-800 scale-125 transition-transform duration-500"
                }`}
              >
                {activated >= index + 1 ? (
                  <CheckCircleIcon className="!text-[hsl(99,58%,52%)] w-[50px] h-[50px]" />
                ) : (
                  React.cloneElement(item.icon, {
                    className: `text-zinc-800 h-7 w-7 ${
                      activated === index ? "!text-[hsl(99,58%,52%)] rounded-full border-2 border-[hsl(99,58%,52%)] h-[45px] w-[45px] p-1" : ""
                    }`,
                  })
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
