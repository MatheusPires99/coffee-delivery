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
          Complete your order
        </h2>
        <div className="flex flex-col gap-3 mt-4">
          <Card>
            <div className="flex items-start gap-2">
              <MapPinLine size={22} className="text-yellow-dark" />
              <div className="flex flex-col gap-0.5">
                <span className="text-accent-subtitle">Delivery address</span>
                <span className="text-sm">
                  Enter the address where you want to receive your order
                </span>
              </div>
            </div>
            <form className="mt-8 flex flex-col gap-4">
              <div className="w-[200px]">
                <Input placeholder="ZIP Code" />
              </div>
              <div>
                <Input placeholder="Street" />
              </div>
              <div className="flex items-center gap-3">
                <div className="w-[200px]">
                  <Input placeholder="Number" />
                </div>
                <div className="flex-1">
                  <Input placeholder="Complement" />
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-[200px]">
                  <Input placeholder="Neighborhood" />
                </div>
                <div className="flex-1">
                  <Input placeholder="City" />
                </div>
                <div className="w-[60px]">
                  <Input placeholder="State" />
                </div>
              </div>
            </form>
          </Card>
          <Card>
            <div className="flex items-start gap-2">
              <CurrencyDollar size={22} className="text-purple" />
              <div className="flex flex-col gap-0.5">
                <span className="text-accent-subtitle">Payment</span>
                <span className="text-sm">
                  Payment is made on delivery. Choose the way you want pay
                </span>
              </div>
            </div>

            <div className="mt-8">
              <RadioGroup>
                <RadioButton value="credit-card">
                  <CreditCard className="text-purple" size={16} />
                  Credit Card
                </RadioButton>
                <RadioButton value="debit-card">
                  <Bank className="text-purple" size={16} />
                  Debit Card
                </RadioButton>
                <RadioButton value="cash">
                  <Money className="text-purple" size={16} />
                  Cash
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
