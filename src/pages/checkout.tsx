import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from "phosphor-react";

import { Card } from "@/components/card";
import { CheckoutSummary } from "@/components/checkout-summary";
import { Input } from "@/components/input";
import { RadioButton, RadioGroup } from "@/components/radio-group";

const Checkout = () => {
  return (
    <main className="container flex items-start gap-8 mt-10">
      <div className="flex flex-col flex-1">
        <h2 className="font-heading text-lg text-accent-subtitle">
          Complete seu pedido
        </h2>
        <div className="flex flex-col gap-3 mt-4">
          <Card>
            <div className="flex items-start gap-2">
              <MapPinLine size={22} className="text-yellow-dark" />
              <div className="flex flex-col gap-0.5">
                <span className="text-accent-subtitle">
                  Endereço de Entrega
                </span>
                <span className="text-sm">
                  Informe o endereço onde deseja receber seu pedido
                </span>
              </div>
            </div>
            <form className="mt-8 flex flex-col gap-4">
              <div className="w-[200px]">
                <Input placeholder="CEP" />
              </div>
              <div>
                <Input placeholder="Rua" />
              </div>
              <div className="flex items-center gap-3">
                <div className="w-[200px]">
                  <Input placeholder="Número" />
                </div>
                <div className="flex-1">
                  <Input placeholder="Complemento" />
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-[200px]">
                  <Input placeholder="Bairro" />
                </div>
                <div className="flex-1">
                  <Input placeholder="Cidade" />
                </div>
                <div className="w-[60px]">
                  <Input placeholder="UF" />
                </div>
              </div>
            </form>
          </Card>
          <Card>
            <div className="flex items-start gap-2">
              <CurrencyDollar size={22} className="text-purple" />
              <div className="flex flex-col gap-0.5">
                <span className="text-accent-subtitle">Pagamento</span>
                <span className="text-sm">
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </span>
              </div>
            </div>

            <div className="mt-8">
              <RadioGroup>
                <RadioButton value="credit-card">
                  <CreditCard className="text-purple" size={16} />
                  Cartão de Crédito
                </RadioButton>
                <RadioButton value="debit-card">
                  <Bank className="text-purple" size={16} />
                  Cartão de Débito
                </RadioButton>
                <RadioButton value="cash">
                  <Money className="text-purple" size={16} />
                  Dinheiro
                </RadioButton>
              </RadioGroup>
            </div>
          </Card>
        </div>
      </div>
      <CheckoutSummary />
    </main>
  );
};

export default Checkout;
