import { useState, useEffect } from "react";

import { Row, Col, InputGroup, FormControl } from "react-bootstrap";

export default function UseEffectPage() {
  const [name, setName] = useState("Matteo");
  const [title, setTitle] = useState("");

  useEffect(() => {
    setTitle(`Hi, ${name}!`);
  }, [name]);

  return (
    <Row id="useEffectExample">
      <Row>
        <h2>React.useEffect</h2>
      </Row>
      <Col>
        <h4>{title}</h4>
      </Col>
      <Col>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
          <FormControl
            placeholder="Name"
            aria-label="Name"
            aria-describedby="basic-addon1"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </InputGroup>
      </Col>
    </Row>
  );
}
