import React from "react";
import "./Doctor.css";

const Doctor = (props) => {
  const { name, position, picture } = props.doctor;
  return (
    <div className="doctor-container">
      <img src={picture} alt="" />
      <h3>{name}</h3>
      <p>
        <small>{position}</small>{" "}
      </p>
    </div>
  );
};

export default Doctor;
