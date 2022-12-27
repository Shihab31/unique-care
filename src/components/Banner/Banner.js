import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./Banner.css";
import banner from "../../assets/images/banner_doctor.png";

const Banner = () => {
  return (
    <div className="banner-area">
      <Container>
        <Row className="d-flex justify-content-start">
          <Col md={6}>
            <div className="banner-info">
              <h6>Always Caring, Always Here</h6>
              <h2>
                A Legacy <br /> of Excellence
              </h2>
              <p>
                Capitalize on low hanging fruit to identify a ballpark value
                added activity to beta test. Override the digital divide with
                additional clickthroughs from DevOps focusing solely on the
                bottom line.
              </p>
              <Button>Book Now</Button>
            </div>
          </Col>
          <Col md={6}>
            <div>
              <img src={banner} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;
