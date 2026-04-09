import { ButtonHTMLAttributes, ReactElement } from "react";
import { RenderConditional } from "../RenderConditional";
import { SpinnerLoading } from "../SpinnerLoading";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  icon?: ReactElement;
  className?: string;
  isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  text,
  icon,
  className,
  isLoading,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={`w-full flex items-center justify-center gap-2 px-4 py-3 bg-[hsl(99,58%,52%)] text-white rounded-md focus:ring-1 focus:outline-none focus:ring--[hsl(99,58%,62%)] focus:ring-offset-1 focus:ring-offset--[hsl(99,58%,62%)] hover:bg-[hsl(99,58%,32%)] transition-colors ${className}`}
      {...props}
    >
      <RenderConditional condition={!!isLoading}>
        <SpinnerLoading />
      </RenderConditional>

      <RenderConditional condition={!!!isLoading && !!icon}>
        {icon}
      </RenderConditional>
      {text}
    </button>
  );
};
