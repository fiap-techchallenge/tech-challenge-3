import { ReactNode } from "react";

export default interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: string | ReactNode;
  title?: ReactNode | string;
  classNameModal?: string;
  classNameHeader?: string;
  classNameTitle?: string;
  classNameCloseButton?: string;
  classNameContent?: string;
  isVisibleCloseButton?: boolean;
}
