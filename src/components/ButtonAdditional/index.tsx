import { Types } from "./types";

const ButtonDefault = ({
  onClick,
  children,
  ...otherProps
}: Types.ButtonProps) => {
  return (
    <button onClick={onClick} {...otherProps}>
      {children}
    </button>
  );
};
export default ButtonDefault;
