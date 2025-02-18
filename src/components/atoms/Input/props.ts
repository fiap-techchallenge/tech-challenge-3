import { ChangeEvent } from "react";

export default interface InputsProps {
  label: string;
  value: string | number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?:
    | "text"
    | "number"
    | "email"
    | "tel"
    | "password"
    | "search"
    | "url"
    | "date"
    | "time"
    | "datetime-local"
    | "month"
    | "week";
  classNameLabel?: string;
  classNameInput?: string;
  errorMessage?: string;
  maxLength?: number;
  disabled?: boolean;
  autoComplete?: string;
  name?: string;
}
