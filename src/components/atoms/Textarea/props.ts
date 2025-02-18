import { ChangeEvent } from "react";

export default interface TextareaProps {
  label: string;
  value: string | number;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  className?: string;
  classNameLabel?: string;
  classNameInput?: string;
  errorMessage?: string;
  maxLength?: number;
  disabled?: boolean;
  resize?: boolean;
}
