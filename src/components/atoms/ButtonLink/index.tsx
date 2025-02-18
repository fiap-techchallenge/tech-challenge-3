import React, { FC } from "react";
import ButtonLinkProps from "./props";
import { cn } from "@/utils/cn";
import * as S from "./styles";

const ButtonLink: FC<ButtonLinkProps> = ({
  text,
  type = "button",
  className,
  disabled,
  onClick,
}) => {
  return (
    <button
      type={type}
      className={cn(S.ButtonLink, className)}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default ButtonLink;
