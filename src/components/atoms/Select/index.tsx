import React, { FC, useMemo, useCallback, FocusEvent } from "react";
import SelectProps from "./props";
import { cn } from "@/utils/cn";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import useAnimation from "./animation";
import * as S from "./styles";

const Select: FC<SelectProps> = ({
  label = "user",
  value,
  defaultValue,
  options = [],
  onChange,
  classNameLabel,
  classNameInput,
  errorMessage,
  disabled,
}) => {
  const { arrowRef, hasValue, setHasValue, setIsFocused } = useAnimation(
    value,
    defaultValue,
  );

  const renderOptions = useMemo(
    (): JSX.Element[] =>
      options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      )),
    [options],
  );

  const handleFocus = useCallback((): void => {
    setHasValue(true);
    setIsFocused(true);
  }, [setHasValue, setIsFocused]);

  const handleBlur = useCallback(
    (e: FocusEvent<HTMLSelectElement>): void => {
      if (!e.target.value) {
        setHasValue(false);
      }
      setIsFocused(false);
    },
    [setHasValue, setIsFocused],
  );

  return (
    <div className={S.Container}>
      <div className={S.Content}>
        <select
          data-has-value={hasValue}
          className={cn(S.Select, classNameInput)}
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          title={label}
          value={value || ""}
          disabled={disabled}
          aria-invalid={!!errorMessage}
          aria-labelledby={`${label}-label`}
        >
          {!value && <option value="" disabled hidden></option>}
          {renderOptions}
        </select>
        <label
          id={`${label}-label`}
          data-has-value={hasValue}
          className={cn(S.Label, classNameLabel)}
        >
          {label}
        </label>
        <ChevronDownIcon className={S.ArrowIcon} ref={arrowRef} />
      </div>
      {errorMessage && (
        <p id={`${label}-error`} className={S.ErrorMessage}>
          {errorMessage}
        </p>
      )}
    </div>
  );
};

export default Select;
