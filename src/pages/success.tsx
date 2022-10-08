import Image from "next/future/image";

import { MapPin, Money, Timer } from "phosphor-react";

import { Card } from "@/components/card";
import { HeroItem } from "@/components/hero-item";

const Success = () => {
  return (
    <main className="container mt-10 flex items-center justify-between gap-24">
      <div className="flex-1">
        <div>
          <h1 className="font-heading text-[32px] font-extrabold text-yellow-dark">
            Wow! confirmed order
          </h1>
          <p className="mt-1 text-xl text-accent-subtitle">
            Now all you have to do is wait for the coffee to come to you soon
          </p>
        </div>

        <Card withCustomRadius className="mt-10 flex flex-col gap-8">
          <HeroItem icon={<MapPin weight="fill" />} color="bg-purple">
            Delivery in Rua João Daniel Martinelli, 102 Farrapos - Porto Alegre,
            RS
          </HeroItem>
          <HeroItem icon={<Timer weight="fill" />} color="bg-yellow">
            <span>Delivery forecast</span>
            <strong>20 min - 30 min</strong>
          </HeroItem>
          <HeroItem icon={<Money />} color="bg-yellow-dark">
            <span>Payment on delivery</span>
            <strong>Credit Card</strong>
          </HeroItem>
        </Card>
      </div>

      <div>
        <Image src="/images/success.svg" alt="" width={492} height={292} />
      </div>
    </main>
  );
};

export default Success;
