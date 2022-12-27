import React from "react";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";
import Doctors from "../Doctors/Doctors";
import Insurance from "../Insurance/Insurance";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <Doctors></Doctors>
      <Insurance></Insurance>
    </div>
  );
};

export default Home;
