import styled from "styled-components";
import { ButtonProps } from "./types";

const primaryColor = "#9880ff";
const secondaryColor = "#57c3e1";
const dangerColor = "#f22";

const primaryProps = `
   color: ${primaryColor};
    border-color:  ${primaryColor};
    :hover,:active {
        background: ${primaryColor};
      }
`;
const secondaryProps = `
    color: ${secondaryColor};
    border-color: ${secondaryColor};
    :hover,:active {
        background: ${secondaryColor};
      }
`;

const dangerProps = `
    color:  ${dangerColor};
    border-color: ${dangerColor};
    :hover,:active {
        background: ${dangerColor};
      }  
`;

export const ButtonDefault = styled.button<ButtonProps>`
  position: relative;
  cursor: pointer;
  font-family: inherit;
  font-size: 1rem;
  background: none;
  cursor: pointer;
  padding: 0.5rem 1rem;
  display: inline-block;
  margin: 0.5rem 2rem;
  letter-spacing: 1px;
  outline: none;
  transition: all 0.3s;
  border: 2px solid;
  ${({ buttonType }) => buttonType === "primary" && primaryProps}
  ${({ buttonType }) => buttonType === "secondary" && secondaryProps}
  ${({ buttonType }) => buttonType === "danger" && dangerProps}
  :after {
    width: 100%;
    height: 0;
    top: 0;
    left: 0;
  }
  :hover,
  :active {
    color: white;
  }
  :disabled {
    pointer-events: none;
    background-color: transparent;
    color: grey;
    opacity: 0.4;
    transition: none;
    border-color: grey;
  }
`;
