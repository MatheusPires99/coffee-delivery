import { Card } from "@/components/card";
import { CheckoutItem } from "@/components/checkout-item";

export const CheckoutSummary = () => {
  return (
    <aside className="w-[448px]">
      <h2 className="font-heading font-lg text-accent-subtitle">
        Cafés selecionados
      </h2>

      <Card withCustomRadius className="mt-4">
        <ul>
          <li>
            <CheckoutItem />
            <hr className="h-[1px] w-full bg-accent-button border-none my-6" />
          </li>
          <li>
            <CheckoutItem />
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
