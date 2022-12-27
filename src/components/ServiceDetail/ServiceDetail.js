import React from "react";

const ServiceDetail = (props) => {
  const { title, picture, des } = props.serviceDetail;
  return (
    <div className="my-3">
      <img src={picture} alt="" />
      <h3>{title}</h3>
      <p>{des}</p>
    </div>
  );
};

export default ServiceDetail;
