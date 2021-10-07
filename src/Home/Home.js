import React from "react";
import About from "../About/About";
import Services from "../Services/Services";
import Header from "../Header/Header";
import OurExpertices from "../OurExpertises/OurExpertices";
import StuedentPerception from "../StudentPerception/StuedentPerception";

const Home = () => {
  return (
    <div>
      <Header> </Header>
      <OurExpertices></OurExpertices>
      <About></About>
      <Services> </Services>
      <StuedentPerception></StuedentPerception>

    </div>
  );
};

export default Home;
