import React from "react";
import "./App.css";

import { Container } from "react-bootstrap";

import UseStatePage from './Pages/useStatePage'
import UseEffectPage from "./Pages/useEffectPage";

function App() {
  return (
    <Container>
      <h1>Hooks App</h1>
      <UseStatePage />
      <UseEffectPage />
    </Container>
  );
}

export default App;
