import { useRef, useState } from "react";

interface TokenInputProps {
  length?: number;
  onComplete: (token: string) => void;
}

export const TokenInput: React.FC<TokenInputProps> = ({ length = 6, onComplete }) => {
  const [values, setValues] = useState(Array(length).fill(""));
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (/^[0-9]$/.test(value) || value === "") {
      const newValues = [...values];
      newValues[index] = value;
      setValues(newValues);

      if (value !== "" && index < length - 1) {
        inputsRef.current[index + 1]?.focus();
      }

      if (newValues.every((val) => val !== "")) {
        onComplete(newValues.join(""));
      }
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !values[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  const handleClick = (index: number) => {
    inputsRef.current[0]?.focus();
  };

  return (
    <div className="flex gap-2 justify-center my-10">
      {values.map((value, index) => (
        <input
          key={index}
          type="text"
          maxLength={1}
          value={value}
          onChange={(e) => handleChange(index, e)}
          onKeyDown={(e) => handleKeyDown(index, e)}
          ref={(el) => (inputsRef.current[index] = el)}
          onClick={() => handleClick(index)}
          className="w-10 h-10 text-center border border-white rounded-md p-0 ring-0 outline-none bg-none overflow-hidden bg-zinc-800 placeholder-gray-400 text-white"
        />
      ))}
    </div>
  );
};
