import Image from "next/future/image";

import { Trash } from "phosphor-react";

import { Counter } from "@/components/counter";
import { useCart } from "@/contexts/cart-context";
import { formatPrice } from "@/utils/price";

type CheckoutItemProps = {
  id: string;
  name: string;
  image: string;
  price: number;
  amount: number;
};

export const CheckoutItem = ({
  id,
  name,
  image,
  price,
  amount,
}: CheckoutItemProps) => {
  const {
    onIncrementCartItemAmount,
    onDecrementCartItemAmount,
    onRemoveItemFromCart,
  } = useCart();

  const formattedPrice = formatPrice({ price });

  return (
    <div className="flex items-center">
      <Image src={image} alt={name} width={64} height={64} />

      <div className="ml-5 flex flex-col gap-2 flex-1">
        <span className="text-accent-subtitle">{name}</span>
        <div className="flex items-center gap-2">
          <Counter
            value={amount}
            onIncrement={() => onIncrementCartItemAmount(id)}
            onDecrement={() => onDecrementCartItemAmount(id)}
          />
          <button
            className="bg-accent-button hover:bg-accent-button-hover duration-200 rounded-md px-2 h-[38px] uppercase text-xs flex items-center gap-1"
            onClick={() => onRemoveItemFromCart(id)}
          >
            <Trash className="text-purple" size={16} />
            Remover
          </button>
        </div>
      </div>

      <strong className="self-start">{formattedPrice}</strong>
    </div>
  );
};
