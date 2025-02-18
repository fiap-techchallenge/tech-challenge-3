export default interface ButtonLinkProps {
  text: string;
  type: "button" | "submit" | "reset";
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}
