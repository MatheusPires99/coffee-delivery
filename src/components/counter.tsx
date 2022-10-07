import { Minus, Plus } from "phosphor-react";

export const Counter = () => {
  return (
    <div className="bg-accent-button rounded-md p-2 flex items-center gap-1">
      <button className="text-purple">
        <Minus size={14} />
      </button>

      <span className="text-accent-title min-w-[20px] max-h-[22px] flex align-center justify-center">
        0
      </span>

      <button className="text-purple">
        <Plus size={14} />
      </button>
    </div>
  );
};
