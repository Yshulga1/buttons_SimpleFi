import styled from "styled-components";
import { Types } from "./types";
import ButtonDefault from "./index";

export const ButtonPrimary = styled(ButtonDefault)<Types.ButtonProps>`
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
color: ${({ theme }) => theme.primary};
border-color: ${({ theme }) => theme.primary};
:hover,:active {
    background: ${({ theme }) => theme.primary};
  }
  
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
`;

export const ButtonSecondary = styled(ButtonPrimary)<Types.ButtonProps>`
color: ${({ theme }) => theme.secondary};
border-color: ${({ theme }) => theme.secondary};
:hover,:active {
    background: ${({ theme }) => theme.secondary};
  }
  }
`;

export const ButtonDanger = styled(ButtonPrimary)<Types.ButtonProps>`
  color: ${({ theme }) => theme.danger};
  border-color: ${({ theme }) => theme.danger};
  :hover,
  :active {
    background: ${({ theme }) => theme.danger};
  }
`;
