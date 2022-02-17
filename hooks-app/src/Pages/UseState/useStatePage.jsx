import { useState } from "react";

import { Row, Col } from "react-bootstrap";

export default function UseStatePage() {
  const [count, setCount] = useState(0);

  function IncrementCount() {
    setCount(count + 1);
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
          <button type="button" onClick={IncrementCount}>
            Increment Count
          </button>
        </Col>
        <Col md={"auto"}>
          <p>Count is {count}</p>
        </Col>
      </Row>
    </Row>
  );
}
