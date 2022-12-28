import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import "./Social.css";

const Social = () => {
  const [signInWithGoogle, user1] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  if (user1) {
    navigate("/");
  }
  return (
    <Container>
      <Row>
        <div className="or-border">
          <div>
            <hr />
          </div>
          <div className="mx-3">Or</div>
          <div>
            <hr />
          </div>
        </div>

        <Col md={6} className="mx-auto">
          <div className="social-button">
            <button>Sign Up With Facebook</button>
            <button onClick={() => signInWithGoogle()} className="google">
              Sign Up With Google
            </button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Social;
