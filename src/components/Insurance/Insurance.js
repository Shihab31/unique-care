import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import insurance from "../../assets/images/insurance.png";
import insurance1 from "../../assets/images/insurance1.png";
import insurance2 from "../../assets/images/insurance2.png";
import insurance3 from "../../assets/images/insurance3.png";
import "./Insurance.css";

const Insurance = () => {
  return (
    <div className="insurance-container">
      <Container>
        <Row>
          <Col>
            <img src={insurance} alt="" />
          </Col>
          <Col>
            <img src={insurance1} alt="" />
          </Col>
          <Col>
            <img src={insurance2} alt="" />
          </Col>
          <Col>
            <img src={insurance3} alt="" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Insurance;
