import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import useRegister from "../Hooks/useRegister";

function Register() {
  //const [error, setError] = useState("");
  const { register, error } = useRegister();
  const SignUp = async (e) => {
    e.preventDefault();
    const form = e.target;
    await register(
      form.email.value,
      form.name.value,
      form.password.value,
      form.passwordAgain.value
    );
  };

  return (
    <Form onSubmit={SignUp}>
      <Form.Group className="mb-3">
        <Form.Label htmlFor="name">Név</Form.Label>
        <Form.Control
          id="name"
          name="name"
          type="text"
          placeholder="Kiss János"
        />
      </Form.Group>
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
      <Form.Group className="mb-3">
        <Form.Label htmlFor="passwordAgain">Jelszó ismétlése</Form.Label>
        <Form.Control id="passwordAgain" name="passwordAgain" type="password" />
      </Form.Group>
      <button type="submit">Regisztrálás</button>
      {error && <p>{error}</p>}
    </Form>
  );
}

export default Register;
