import Image from "next/future/image";

import { MapPin, Money, Timer } from "phosphor-react";

import succesImage from "@/assets/success.svg";
import { Card } from "@/components/card";
import { HeroItem } from "@/components/hero-item";

const Success = () => {
  return (
    <main className="container mt-10 flex items-center justify-between gap-24">
      <div className="flex-1">
        <div>
          <h1 className="font-heading text-[32px] font-extrabold text-yellow-dark">
            Uhu! Pedido confirmado
          </h1>
          <p className="mt-1 text-xl text-accent-subtitle">
            Agora é só aguardar que logo o café chegará até você
          </p>
        </div>

        <Card withCustomRadius className="mt-10 flex flex-col gap-8">
          <HeroItem icon={<MapPin weight="fill" />} color="bg-purple">
            Entrega em Rua João Daniel Martinelli, 102 Farrapos - Porto Alegre,
            RS
          </HeroItem>
          <HeroItem icon={<Timer weight="fill" />} color="bg-yellow">
            <span>Previsão de entrega</span>
            <strong>20 min - 30 min</strong>
          </HeroItem>
          <HeroItem icon={<Money />} color="bg-yellow-dark">
            <span>Pagamento na entrega</span>
            <strong>Cartão de Crédito</strong>
          </HeroItem>
        </Card>
      </div>

      <div>
        <Image src={succesImage} alt="" width={492} height={292} />
      </div>
    </main>
  );
};

export default Success;
