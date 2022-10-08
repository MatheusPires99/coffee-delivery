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
              Find the perfect coffee for every time
            </h1>
            <p className="text-xl text-accent-subtitle mt-4">
              With Coffee Delivery you receive your coffee wherever you are, any
              time
            </p>
            <div className="mt-16 grid grid-cols-2 gap-y-5">
              <HeroItem
                icon={<ShoppingCart weight="fill" />}
                color="bg-yellow-dark"
              >
                Simple and secure purchase
              </HeroItem>
              <HeroItem icon={<Package weight="fill" />} color="bg-accent-text">
                Packaging keeps the coffee intact
              </HeroItem>
              <HeroItem icon={<Timer weight="fill" />} color="bg-yellow">
                Fast and tracked delivery
              </HeroItem>
              <HeroItem icon={<Coffee weight="fill" />} color="bg-purple">
                Coffee arrives fresh to you
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
          Our coffees
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
