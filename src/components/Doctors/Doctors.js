import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Doctor from "../Doctor/Doctor";
import "./Doctors.css";

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    fetch("doctors.json")
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, []);
  return (
    <div className="doctors-container" id="doctors">
      <Container>
        <Row>
          <div className="text-center">
            <h6>Better Doctors, Better Care</h6>
            <h2>Meet Our Medical Staff</h2>
          </div>

          {doctors.map((doctor) => (
            <Col md={3}>
              <Doctor doctor={doctor}></Doctor>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Doctors;
