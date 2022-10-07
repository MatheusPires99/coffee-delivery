import Link from "next/link";

import { MapPin, ShoppingCart } from "phosphor-react";

import { Logo } from "./logo";

export const Header = () => {
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
          href="/cart"
          className="p-2 bg-yellow-light text-yellow-dark rounded-md"
        >
          <ShoppingCart weight="fill" size={22} />
        </Link>
      </div>
    </header>
  );
};
