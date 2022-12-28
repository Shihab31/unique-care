import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Social from "../../shared/Social/Social";
import "./Register.css";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Register = () => {
  const [agree, setAgree] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [createUserWithEmailAndPassword, user] =
    useCreateUserWithEmailAndPassword(auth);

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  if (user) {
    navigate("/");
  }
  const handleFormSubmit = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(email, password);
  };
  return (
    <Container>
      <Row>
        <Col md={6} className="mx-auto my-5">
          <h1>Sign up with your email address</h1>
          <div className="mt-5">
            <Form onSubmit={handleFormSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>What's Name</Form.Label>
                <Form.Control type="text" placeholder="Your Name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>What's Your Email</Form.Label>
                <Form.Control
                  onBlur={handleEmail}
                  type="email"
                  placeholder="Enter email"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Create a password</Form.Label>
                <Form.Control
                  onBlur={handlePassword}
                  type="password"
                  placeholder="Password"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check
                  type="checkbox"
                  label="Are you agrre with unique care terms & condition?"
                  onClick={() => setAgree(!agree)}
                />
              </Form.Group>
              <Button disabled={!agree} variant="primary" type="submit">
                Sign Up
              </Button>
            </Form>
            <p>
              Already Sign up{" "}
              <span>
                <Link className="text-decoration-none" to="/login">
                  Login
                </Link>
              </span>{" "}
            </p>
          </div>
        </Col>
        <Social></Social>
      </Row>
    </Container>
  );
};

export default Register;
