import React from "react";

import { Alert } from "react-bootstrap";

export default function Login({ setToken }) {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState(false);

  function handleSubmit(e) {
    e.preventDefault()
    if (username === "admin" && password === "password") { 
        setToken("token");
        window.location.assign('/');
    }
    else setError("error");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Username"
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      ></input>
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      ></input>
      <button type="submit">Submit</button>
      {error && (
        <Alert variant={"error"}>Wrong Username or Password. Retry.</Alert>
      )}
    </form>
  );
}
