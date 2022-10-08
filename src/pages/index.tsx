import Image from "next/future/image";

import { ShoppingCart, Package, Coffee, Timer } from "phosphor-react";

import { CoffeeCard } from "@/components/coffee-card";
import { HeroItem } from "@/components/hero-item";

import coffees from "../data/coffees.json";

const Home = () => {
  return (
    <main>
      <section className="py-24 bg-[url('/images/hero-background.png')] bg-no-repeat bg-center bg-cover">
        <div className="container flex align-center justify-between gap-14">
          <div>
            <h1 className="font-heading text-5xl text-accent-title">
              Encontre o café perfeito para qualquer hora do dia
            </h1>
            <p className="text-xl text-accent-subtitle mt-4">
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
            <div className="mt-16 grid grid-cols-2 gap-y-5">
              <HeroItem
                icon={<ShoppingCart weight="fill" />}
                color="bg-yellow-dark"
              >
                Compra simples e segura
              </HeroItem>
              <HeroItem icon={<Package weight="fill" />} color="bg-accent-text">
                Embalagem mantém o café intacto
              </HeroItem>
              <HeroItem icon={<Timer weight="fill" />} color="bg-yellow">
                Entrega rápida e rastreada
              </HeroItem>
              <HeroItem icon={<Coffee weight="fill" />} color="bg-purple">
                O café chega fresquinho até você
              </HeroItem>
            </div>
          </div>
          <div className="flex-shrink-0">
            <Image
              src="/images/hero-image.png"
              width={476}
              height={360}
              alt=""
              quality={100}
            />
          </div>
        </div>
      </section>
      <section className="container mt-8 pb-40">
        <h2 className="font-heading text-[32px] text-accent-title">
          Nossos cafés
        </h2>
        <div className="mt-14 grid grid-cols-4 gap-x-8 gap-y-10">
          {coffees.map((coffee) => (
            <CoffeeCard
              key={coffee.id}
              id={coffee.id}
              name={coffee.name}
              description={coffee.description}
              tags={coffee.tags}
              image={coffee.image}
              price={coffee.price}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;
