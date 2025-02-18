export interface SnackbarProps {
  message: string;
  isOpen: boolean;
  handleClose: () => void;
  timeout?: number;
  status: "success" | "error" | "warning" | "info";
  className?: string;
}
