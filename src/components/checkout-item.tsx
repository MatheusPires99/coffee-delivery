import Image from "next/future/image";

import { Trash } from "phosphor-react";

import coffee from "@/assets/coffee.png";
import { Counter } from "@/components/counter";

export const CheckoutItem = () => {
  return (
    <div className="flex items-center">
      <Image src={coffee} alt="" width={64} height={64} />

      <div className="ml-5 flex flex-col gap-2">
        <span className="text-accent-subtitle">Expresso Tradicional</span>
        <div className="flex items-center gap-2">
          <Counter />
          <button className="bg-accent-button hover:bg-accent-button-hover duration-200 rounded-md px-2 h-[38px] uppercase text-xs flex items-center gap-1">
            <Trash className="text-purple" size={16} />
            Remover
          </button>
        </div>
      </div>

      <strong className="self-start flex-1">R$ 9,90</strong>
    </div>
  );
};
