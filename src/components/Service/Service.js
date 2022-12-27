import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Service.css";

const Service = (props) => {
  const { title, des, picture, id } = props.service;
  const navigate = useNavigate();
  const handeleDetail = (id) => {
    navigate(`/details/${id}`);
  };
  return (
    <div className="service-area">
      <img src={picture} alt="" />
      <h3>{title}</h3>
      <p>{des}</p>
      <Button onClick={() => handeleDetail(id)}>Find Out More</Button>
    </div>
  );
};

export default Service;
