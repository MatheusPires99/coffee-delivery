import Image from "next/future/image";

import { Trash } from "phosphor-react";

import coffee from "@/assets/coffee.png";
import { Card } from "@/components/card";
import { Counter } from "@/components/counter";

const CoffeeItem = () => {
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

export const CheckoutSummary = () => {
  return (
    <aside className="w-[448px]">
      <h2 className="font-heading font-lg text-accent-subtitle mb-4">
        Cafés selecionados
      </h2>

      <Card withCustomRadius>
        <ul>
          <li>
            <CoffeeItem />
            <hr className="h-[1px] w-full bg-accent-button border-none my-6" />
          </li>
          <li>
            <CoffeeItem />
          </li>
        </ul>

        <hr className="h-[1px] w-full bg-accent-button border-none my-6" />

        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <span className="text-sm">Total de itens</span>
            <span>R$ 29,70</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm">Entrega</span>
            <span>R$ 3,50</span>
          </div>
          <div className="flex items-center justify-between">
            <strong className="text-xl text-accent-subtitle font-bold">
              Total
            </strong>
            <strong className="text-xl text-accent-subtitle font-bold">
              R$ 33,20
            </strong>
          </div>
        </div>

        <button className="w-full bg-yellow hover:bg-yellow-dark duration-200 rounded-md uppercase text-sm text-white font-bold py-3 mt-6">
          Confirmar pedido
        </button>
      </Card>
    </aside>
  );
};
