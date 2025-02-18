import { ChangeEvent } from "react";

export default interface SelectProps {
  label: string;
  value: string;
  defaultValue?: string;
  options: { value: string; label: string }[];
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  classNameLabel?: string;
  classNameInput?: string;
  errorMessage?: string;
  disabled?: boolean;
}
