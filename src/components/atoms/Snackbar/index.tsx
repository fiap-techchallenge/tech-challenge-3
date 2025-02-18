import React, { FC } from "react";
import { SnackbarProps } from "./props";
import { XMarkIcon } from "@heroicons/react/24/solid";
import useAnimation from "./animation";
import { cn } from "@/utils/cn";
import * as S from "./styles";

const Snackbar: FC<SnackbarProps> = ({
  message,
  isOpen,
  handleClose,
  timeout = 5,
  status = "info",
  className,
}) => {
  const { snackRef, counterBarRef, handleSatusIcons } = useAnimation(
    isOpen,
    status,
    timeout,
    handleClose,
  );

  return (
    <div
      ref={snackRef}
      data-status={status}
      className={cn(S.ContainerStatus, className)}
    >
      <div ref={counterBarRef} className={S.BarTime} />
      <div className={S.Content}>
        <p className={S.Text}>
          {handleSatusIcons()}
          <span className={S.Message}>{message}</span>
        </p>
        <XMarkIcon
          data-status={status}
          onClick={handleClose}
          className={S.CloseIcon}
        />
      </div>
    </div>
  );
};

export default Snackbar;
