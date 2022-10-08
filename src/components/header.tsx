import Link from "next/link";

import { MapPin, ShoppingCart } from "phosphor-react";

import { useCart } from "@/contexts/cart-context";

import { Logo } from "./logo";

export const Header = () => {
  const { cart } = useCart();

  return (
    <header className="container py-8 flex items-center justify-between">
      <Link href="/">
        <Logo />
      </Link>

      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1 rounded-md p-2 bg-purple-light text-purple text-sm">
          <MapPin weight="fill" size={22} />
          <span className="text-purple-dark">Pará de Minas, MG</span>
        </div>
        <Link
          href="/checkout"
          className="p-2 bg-yellow-light text-yellow-dark rounded-md relative"
        >
          <ShoppingCart weight="fill" size={22} />

          {cart.length > 0 && (
            <div className="absolute -top-2 -right-2 bg-yellow-dark rounded-full text-white text-xs font-bold w-5 h-5 flex items-center justify-center">
              {cart.length}
            </div>
          )}
        </Link>
      </div>
    </header>
  );
};
