import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./Pages/Dashboard";
import Preferences from "./Pages/Preferences";
import Login from "./Pages/Login";
import Home from "./Pages/Home";

import { Dropdown, Row, Col } from "react-bootstrap";

function setToken(userToken) {
  console.log(userToken)
  sessionStorage.setItem('token', userToken);
}

function getToken() {
  const tokenString = sessionStorage.getItem('token');
  return tokenString;
}

function App() {

  const token = getToken();

  return (
    <div className="wrapper">
      <Row>
        <Col>
          <h1>Application</h1>
        </Col>
        <Col md={"auto"}>
          {token ? (
            <Dropdown>
              <Dropdown.Toggle variant="info" id="dropdown-basic">
                Profile
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="/dashboard">Dashboard</Dropdown.Item>
                <Dropdown.Item href="/preferences">Preferences</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          ) : (
            <a className="btn btn-primary" href="/login">
              Login
            </a>
          )}
        </Col>
      </Row>
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={token ? <Dashboard /> : <Home />} />
          <Route
            path="/preferences"
            element={token ? <Preferences /> : <Home />}
          />
          <Route path="/login" element={<Login setToken={setToken} />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
