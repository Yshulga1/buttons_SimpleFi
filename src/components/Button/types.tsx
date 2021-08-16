export interface ButtonProps {
  buttonType: "primary" | "secondary" | "danger";
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
}
