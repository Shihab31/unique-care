import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Service from "../Service/Service";
import "./Services.css";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <Container className="services-container" id="services">
      <Row>
        <h6>Care You Can Trust</h6>
        <h2>
          Family Of Doctors <br /> Caring About Your Family
        </h2>
        {services.map((service) => (
          <Col md={4}>
            <Service service={service}></Service>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Services;
