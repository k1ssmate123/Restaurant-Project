import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import useRegister from "../Hooks/useRegister";
import "./Style/Register.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import RegisterImg from "../img/regbg.jpg";
import Stack from "react-bootstrap/Stack";
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
    <Container className="register__container">
      <Row>
        <Col></Col>
        <Col className="register__formCol">
          <Stack>
            <Image src={RegisterImg} fluid /> <h1>Regisztráció</h1>
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
                <Form.Label htmlFor="passwordAgain">
                  Jelszó ismétlése
                </Form.Label>
                <Form.Control
                  id="passwordAgain"
                  name="passwordAgain"
                  type="password"
                />
              </Form.Group>
              <Button
                variant="light"
                as="input"
                type="submit"
                value="Regisztrálás"
              />
              {error && <p>{error}</p>}
            </Form>
          </Stack>
        </Col>

        <Col></Col>
      </Row>
    </Container>
  );
}

export default Register;
