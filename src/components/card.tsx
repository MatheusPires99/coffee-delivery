import { ReactNode } from "react";

import classNames from "classnames";

type CardProps = {
  withCustomRadius?: boolean;
  size?: "sm" | "lg";
  className?: string;
  children: ReactNode;
};

export const Card = ({
  withCustomRadius = false,
  size = "lg",
  className,
  children,
}: CardProps) => {
  return (
    <div
      className={classNames("bg-accent-card rounded-md", {
        "rounded-tl-md rounded-br-md rounded-tr-[36px] rounded-bl-[36px]":
          withCustomRadius,
        "px-6 py-5": size === "sm",
        "p-10": size === "lg",
        [`${className}`]: !!className,
      })}
    >
      {children}
    </div>
  );
};
