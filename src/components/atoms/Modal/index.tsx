import React, { FC, useEffect } from "react";
import ModalProps from "./props";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { cn } from "@/utils/cn";
import * as S from "./styles";

const Modal: FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  title,
  classNameModal,
  classNameHeader,
  classNameCloseButton,
  classNameTitle,
  classNameContent,
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <div data-open={isOpen} className={S.Container}>
      <div onClick={onClose} className={S.HitBoxClose}></div>
      <div data-open={isOpen} className={cn(S.Modal, classNameModal)}>
        <div data-open={isOpen} className={cn(S.Header, classNameHeader)}>
          <h1 data-open={isOpen} className={cn(S.Title, classNameTitle)}>
            {title}
          </h1>
          <button
            type="button"
            data-open={isOpen}
            onClick={onClose}
            className={cn(S.ButtonClose, classNameCloseButton)}
          >
            <XMarkIcon className={S.ButtonCloseIcon} />
          </button>
        </div>
        <div data-open={isOpen} className={cn(S.Content, classNameContent)}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
