import React, { FC, MouseEventHandler, ReactElement } from "react";
import { cn } from "@/lib/utils";

interface ButtonIconProps {
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  className?: string;
  icon: ReactElement;
}

const ButtonIcon: FC<ButtonIconProps> = ({ className, onClick, icon }) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex items-center justify-center rounded-full shadow-md bg-white border p-2 hover:scale-110 transition",
        className
      )}
    >
      {icon}
    </button>
  );
};

export default ButtonIcon;
