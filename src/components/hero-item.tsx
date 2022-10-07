import { ReactNode } from "react";

type HeroItemProps = {
  icon: ReactNode;
  content: string;
  color: string;
};

export const HeroItem = ({ icon, content, color }: HeroItemProps) => {
  return (
    <div className="flex items-center gap-3">
      <div className={`rounded-full p-2 ${color} text-accent-background`}>
        {icon}
      </div>
      <span>{content}</span>
    </div>
  );
};
