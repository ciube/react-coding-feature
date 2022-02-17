import React from "react";
import "./App.css";

import { Container } from "react-bootstrap";

import UseStatePage from './Pages/UseState/useStatePage'

function App() {
  return (
    <Container>
      <h1>Hooks App</h1>
      <UseStatePage />
    </Container>
  );
}

export default App;
