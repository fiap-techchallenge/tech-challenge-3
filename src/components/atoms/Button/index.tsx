import React, { FC } from "react";
import ButtonProps from "./props";
import { cn } from "@/utils/cn";
import * as S from "./styles";

const Button: FC<ButtonProps> = ({
  type = "button",
  onClick,
  className,
  children,
  disabled,
}) => {
  return (
    <button
      className={cn(S.Button, className)}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
