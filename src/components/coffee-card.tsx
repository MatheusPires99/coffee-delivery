import Image from "next/future/image";
import { useState } from "react";

import { ShoppingCart } from "phosphor-react";

import { Card } from "@/components/card";
import { Counter } from "@/components/counter";
import { useCart } from "@/contexts/cart-context";
import { formatPrice } from "@/utils/price";

type CoffeeCardProps = {
  id: string;
  name: string;
  description: string;
  tags: string[];
  image: string;
  price: number;
};

export const CoffeeCard = ({
  id,
  name,
  description,
  tags,
  image,
  price,
}: CoffeeCardProps) => {
  const { onAddItemToCart } = useCart();
  const [amount, setAmount] = useState(1);

  const handleAddItemToCart = () => {
    onAddItemToCart({ id, name, image, price, amount });
    setAmount(1);
  };

  const formattedPrice = formatPrice({ price, removeCurrencySign: true });

  return (
    <Card withCustomRadius size="sm">
      <div className="flex flex-col items-center">
        <div className="-mt-12">
          <Image src={image} alt={name} width={120} height={120} />
        </div>

        <div className="flex items-center flex-wrap gap-1 mt-3">
          {tags.map((tag) => (
            <span
              key={tag}
              className="font-bold text-[10px] text-yellow-dark bg-yellow-light py-1 px-2 rounded-full uppercase"
            >
              {tag}
            </span>
          ))}
        </div>
        <strong className="font-bold font-heading text-accent-title text-xl mt-4">
          {name}
        </strong>
        <span className="text-sm text-accent-label text-center mt-2">
          {description}
        </span>
        <footer className="mt-8 w-full flex-1 flex items-center justify-between">
          <div>
            <span className="text-sm">R$</span>
            <strong className="font-extrabold font-heading text-2xl">
              {formattedPrice}
            </strong>
          </div>
          <div className="flex items-center gap-2">
            <Counter
              value={amount}
              onIncrement={() => setAmount((state) => state + 1)}
              onDecrement={() => setAmount((state) => state - 1)}
            />
            <button
              className="bg-purple-dark hover:bg-purple duration-200 rounded-md p-2 flex items-center justify-center text-accent-card disabled:cursor-not-allowed"
              onClick={handleAddItemToCart}
              disabled={amount === 0}
            >
              <ShoppingCart weight="fill" size={22} />
            </button>
          </div>
        </footer>
      </div>
    </Card>
  );
};
