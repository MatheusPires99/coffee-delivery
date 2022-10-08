import { ButtonHTMLAttributes } from "react";

import { Minus, Plus } from "phosphor-react";

type CounterButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const CounterButton = ({ children, ...props }: CounterButtonProps) => {
  return (
    <button
      className="text-purple hover:text-purple-dark duration-200 disabled:cursor-not-allowed"
      {...props}
    >
      {children}
    </button>
  );
};

type CounterProps = {
  value: number;
  onIncrement: () => void;
  onDecrement: () => void;
};

export const Counter = ({ value, onIncrement, onDecrement }: CounterProps) => {
  return (
    <div className="bg-accent-button rounded-md px-2 flex items-center gap-1 h-[38px]">
      <CounterButton onClick={onDecrement} disabled={value === 0}>
        <Minus size={14} />
      </CounterButton>

      <span className="text-accent-title min-w-[20px] max-h-[22px] flex align-center justify-center">
        {value}
      </span>

      <CounterButton onClick={onIncrement}>
        <Plus size={14} />
      </CounterButton>
    </div>
  );
};
