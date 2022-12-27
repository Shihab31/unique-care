import React from "react";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <div className="text-center p-3">
      <p>&copy; Alright Reserved by Unique Care {date}</p>
    </div>
  );
};

export default Footer;
