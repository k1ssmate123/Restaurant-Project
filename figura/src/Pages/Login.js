import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import useLogin from "../Hooks/useLogin.js";
import { useAuth } from "../Contexts/authContext.js";
function Login() {
  const { login, error } = useLogin();

  const { login: authLogin } = useAuth();

  const SignIn = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const result = await login(email, password);
    if (result.success) {
      const user = {
        name: result.data.name,
        email: result.data.email,
        id: result.data.id,
      };
      authLogin(user);
    }
  };
  return (
    <Form onSubmit={SignIn}>
      <Form.Group className="mb-3">
        <Form.Label htmlFor="email">Email cím</Form.Label>
        <Form.Control
          id="email"
          name="email"
          type="email"
          placeholder="nev@email.com"
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label htmlFor="password">Jelszó</Form.Label>
        <Form.Control id="password" name="password" type="password" />
      </Form.Group>
      <button type="submit">Bejelentkezés</button>
      {error && <p>{error}</p>}
    </Form>
  );
}

export default Login;
