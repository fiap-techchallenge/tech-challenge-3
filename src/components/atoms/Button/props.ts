import { MouseEvent, ReactNode } from "react";

export default interface ButtonProps {
  type?: "button" | "submit" | "reset";
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  children: ReactNode | string;
  disabled?: boolean;
}
