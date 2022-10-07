import Image from "next/future/image";

import { ShoppingCart } from "phosphor-react";

import coffee from "@/assets/coffee.png";
import { Card } from "@/components/card";
import { Counter } from "@/components/counter";

export const CoffeCard = () => {
  return (
    <Card withCustomRadius size="sm">
      <div className="flex flex-col items-center">
        <div className="-mt-12">
          <Image src={coffee} alt="Tradicional" width={120} height={120} />
        </div>

        <div className="flex items-center flex-wrap gap-1 mt-3">
          <span className="font-bold text-[10px] text-yellow-dark bg-yellow-light py-1 px-2 rounded-full uppercase">
            TRADICIONAL
          </span>
          <span className="font-bold text-[10px] text-yellow-dark bg-yellow-light py-1 px-2 rounded-full uppercase">
            TRADICIONAL
          </span>
        </div>
        <strong className="font-bold font-heading text-accent-title text-xl mt-4">
          Tradicional
        </strong>
        <span className="text-sm text-accent-label text-center mt-2">
          O tradicional café feito com água quente e grãos moído
        </span>
        <footer className="mt-8 w-full flex-1 flex items-center justify-between">
          <div>
            <span className="text-sm">R$</span>
            <strong className="font-extrabold font-heading text-2xl ml-1">
              9,90
            </strong>
          </div>
          <div className="flex items-center gap-2">
            <Counter />
            <button className="bg-purple-dark hover:bg-purple duration-200 rounded-md p-2 flex items-center justify-center text-accent-card">
              <ShoppingCart weight="fill" size={22} />
            </button>
          </div>
        </footer>
      </div>
    </Card>
  );
};
