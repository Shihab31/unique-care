import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import ServiceDetail from "../ServiceDetail/ServiceDetail";

const ServiceDetails = () => {
  const { serviceId } = useParams();
  const [servicedetails, setServiceDetails] = useState([]);

  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => {
        const newData = data.filter((book) => book.id == serviceId);
        setServiceDetails(newData);
      });
  }, [serviceId]);
  return (
    <Container>
      <Row>
        {servicedetails.map((serviceDetail) => (
          <Col>
            <ServiceDetail serviceDetail={serviceDetail}></ServiceDetail>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ServiceDetails;
