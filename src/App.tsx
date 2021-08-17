import "./App.css";
import { useState } from "react";
import Button from "./components/Button";
import styled from "styled-components";

import {
  ButtonPrimary,
  ButtonSecondary,
  ButtonDanger,
} from "./components/ButtonAdditional/styles";

export const Container = styled.div`
  padding-left: 1rem;
  min-height: 100vh;
  margin-left: 1rem;
  line-height: 2em;
`;
export const Header = styled.h1`
  font-size: 1.8em;
  line-height: 2em;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

function App() {
  const [buttonClicked, setButtonClicked] = useState("...");
  return (
    <Container>
      <Header>Hi, SimpleFi team!</Header>
      <p>
        These buttons were made by <b>Yana Shulga</b> for <b>SimpleFi</b>{" "}
        challenge
      </p>
      <p>
        You've clicked <b>{buttonClicked}</b> button
      </p>
      <ButtonContainer>
        <Button onClick={() => setButtonClicked("Primary")}>Primary</Button>

        <Button
          buttonType="secondary"
          onClick={() => setButtonClicked("Secondary")}
        >
          Secondary
        </Button>
        <Button buttonType="danger" onClick={() => setButtonClicked("Danger")}>
          Danger
        </Button>
        <Button disabled onClick={() => setButtonClicked("Secondary")}>
          Disabled
        </Button>
      </ButtonContainer>

      <p>Alternative</p>
      <ButtonContainer>
        <ButtonPrimary onClick={() => setButtonClicked("Primary")}>
          Primary
        </ButtonPrimary>
        <ButtonSecondary onClick={() => setButtonClicked("Secondary")}>
          Secondary
        </ButtonSecondary>
        <ButtonDanger onClick={() => setButtonClicked("Danger")}>
          Danger
        </ButtonDanger>
        <ButtonDanger disabled onClick={() => setButtonClicked("Secondary")}>
          Disabled
        </ButtonDanger>
      </ButtonContainer>
    </Container>
  );
}

export default App;
