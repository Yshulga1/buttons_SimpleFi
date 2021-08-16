import "./App.css";
import { useState } from "react";
import Button from "./components/Button";
import styled from "styled-components";

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
  const [buttonType, setButtonType] = useState("...");
  return (
    <Container>
      <Header>Hi, SimpleFi team!</Header>
      <p>
        These buttons were made by <b>Yana Shulga</b> for <b>SimpleFi</b>{" "}
        challenge
      </p>
      <p>
        You've clicked <b>{buttonType}</b> button
      </p>
      <ButtonContainer>
        <Button onClick={() => setButtonType("Primary")}>Primary</Button>
        <Button
          buttonType="secondary"
          onClick={() => setButtonType("Secondary")}
        >
          Secondary
        </Button>
        <Button buttonType="danger" onClick={() => setButtonType("Danger")}>
          Danger
        </Button>
        <Button
          buttonType="secondary"
          disabled
          onClick={() => setButtonType("Secondary")}
        >
          Disabled
        </Button>
      </ButtonContainer>
    </Container>
  );
}

export default App;
