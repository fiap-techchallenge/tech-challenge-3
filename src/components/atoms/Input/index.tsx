// File: Input.tsx
import React, { FC } from "react";
import InputsProps from "./props";
import { cn } from "@/utils/cn";
import * as S from "./styles";

const Input: FC<InputsProps> = ({
  label = "user",
  value = "",
  onChange,
  type = "text",
  classNameLabel,
  classNameInput,
  errorMessage,
  maxLength,
  disabled,
  autoComplete,
  name,
}) => {
  const hasValue = typeof value === "string" && value.trim() !== "";

  return (
    <div className={S.Container}>
      <div className={S.Content}>
        <input
          data-has-value={hasValue}
          className={cn(S.Input, classNameInput)}
          placeholder=" "
          value={value}
          onChange={onChange}
          type={type}
          title={label}
          maxLength={maxLength}
          disabled={disabled}
          autoComplete={autoComplete}
          name={name}
          aria-invalid={!!errorMessage}
          aria-describedby={errorMessage ? `${name}-error` : undefined}
        />
        <label htmlFor={name} className={cn(S.Label, classNameLabel)}>
          {label}
        </label>
      </div>
      {errorMessage && (
        <p id={`${name}-error`} className={S.ErrorMessage}>
          {errorMessage}
        </p>
      )}
    </div>
  );
};

export default Input;
