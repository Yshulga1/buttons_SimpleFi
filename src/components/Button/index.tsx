import { ButtonDefault } from "./styles";
import { ButtonProps } from "./types";

const Button = ({
  onClick,
  children,
  buttonType,
  ...otherProps
}: ButtonProps) => {
  return (
    <ButtonDefault onClick={onClick} buttonType={buttonType} {...otherProps}>
      {children}
    </ButtonDefault>
  );
};

export default Button;

Button.defaultProps = {
  buttonType: "primary",
};
