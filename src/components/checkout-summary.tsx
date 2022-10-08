import { useRouter } from "next/router";

import { Card } from "@/components/card";
import { CheckoutItem } from "@/components/checkout-item";
import { useCart } from "@/contexts/cart-context";
import { formatPrice } from "@/utils/price";

const DELIVERY_PRICE = 3.5;

export const CheckoutSummary = () => {
  const { push } = useRouter();
  const { cart, onResetCart } = useCart();

  const priceTotalAmount = cart.reduce((acc, cartItem) => {
    return (acc += cartItem.price);
  }, 0);

  const priceTotalAmountFormatted = formatPrice({ price: priceTotalAmount });
  const deliveryPriceFormatted = formatPrice({ price: DELIVERY_PRICE });
  const priceTotalAmountWithDeliveryFormatted = formatPrice({
    price: priceTotalAmount + DELIVERY_PRICE,
  });

  const handleConfirmOrder = () => {
    onResetCart();
    push("/success");
  };

  return (
    <aside className="w-[448px]">
      <h2 className="font-heading font-lg text-accent-subtitle">
        Selected coffees
      </h2>

      <Card withCustomRadius className="mt-4">
        {cart.length === 0 ? (
          <span>Your cart is empty</span>
        ) : (
          <>
            <ul className="max-h-[316px] overflow-auto">
              {cart.map((cartItem, index) => (
                <li key={cartItem.id}>
                  <CheckoutItem
                    id={cartItem.id}
                    name={cartItem.name}
                    image={cartItem.image}
                    price={cartItem.price}
                    amount={cartItem.amount}
                  />
                  {index + 1 !== cart.length && (
                    <hr className="h-[1px] w-full bg-accent-button border-none my-6" />
                  )}
                </li>
              ))}
            </ul>

            <hr className="h-[1px] w-full bg-accent-button border-none my-6" />

            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="text-sm">Total items</span>
                <span>{priceTotalAmountFormatted}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Delivery</span>
                <span>{deliveryPriceFormatted}</span>
              </div>
              <div className="flex items-center justify-between">
                <strong className="text-xl text-accent-subtitle font-bold">
                  Total
                </strong>
                <strong className="text-xl text-accent-subtitle font-bold">
                  {priceTotalAmountWithDeliveryFormatted}
                </strong>
              </div>
            </div>

            <button
              className="w-full bg-yellow hover:bg-yellow-dark duration-200 rounded-md uppercase text-sm text-white font-bold py-3 mt-6"
              onClick={handleConfirmOrder}
            >
              Confirm order
            </button>
          </>
        )}
      </Card>
    </aside>
  );
};
