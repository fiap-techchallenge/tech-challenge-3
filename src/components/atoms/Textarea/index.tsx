import React, { FC } from "react";
import TextareaProps from "./props";
import { cn } from "@/utils/cn";
import * as S from "./styles";

const Textarea: FC<TextareaProps> = ({
  label,
  onChange,
  value,
  className,
  classNameInput,
  classNameLabel,
  disabled,
  errorMessage,
  maxLength,
  resize = true,
}) => {
  return (
    <div className={S.Container}>
      <div className={cn(S.Content, className)}>
        <textarea
          className={cn(S.TextArea, classNameInput)}
          placeholder=" "
          value={value}
          onChange={onChange}
          title={label}
          maxLength={maxLength}
          disabled={disabled}
          data-resize={resize}
        />
        <label className={cn(S.Label, classNameLabel)}>{label}</label>
      </div>
      {errorMessage && <p className={S.ErrorMessage}>{errorMessage}</p>}
    </div>
  );
};

export default Textarea;
