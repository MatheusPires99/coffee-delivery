import { ReactNode } from "react";

type HeroItemProps = {
  icon: ReactNode;
  color: string;
  children: ReactNode;
};

export const HeroItem = ({ icon, color, children }: HeroItemProps) => {
  return (
    <div className="flex items-center gap-3">
      <div className={`rounded-full p-2 ${color} text-accent-background`}>
        {icon}
      </div>
      <div className="flex flex-col">{children}</div>
    </div>
  );
};
