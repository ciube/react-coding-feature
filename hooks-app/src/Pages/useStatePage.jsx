import { useState } from "react";

import { Row, Col, Button } from "react-bootstrap";

export default function UseStatePage() {
  const [count, setCount] = useState(0);

  function IncrementCount() {
    setCount(count + 1);
  }

  function DecrementCount() {
    setCount(count - 1);
  }

  return (
    <Row id="useStateExample">
      <Row>
        <Col>
          <h2>React.useState</h2>
        </Col>
      </Row>
      <Row>
        <Col md={"auto"}>
          <Button variant="success" onClick={IncrementCount}>
            Increment Count
          </Button>
        </Col>
        <Col md={"auto"}>
          <Button variant="danger" onClick={DecrementCount}>
            Decrement Count
          </Button>
        </Col>
        <Col md={"auto"}>
          <p>Count is {count}</p>
        </Col>
      </Row>
    </Row>
  );
}
