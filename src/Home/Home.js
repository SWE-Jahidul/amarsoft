import React from "react";
import About from "../About/About";
import Contactus from "../Contactus/Contactus";
import Services from "../Services/Services";
import Header from "../Header/Header";
import OurExpertices from "../OurExpertises/OurExpertices";

const Home = () => {
  return (
    <div>
      <Header> </Header>
      <OurExpertices></OurExpertices>
      <About></About>
      <Services> </Services>
      <Contactus></Contactus>
    </div>
  );
};

export default Home;
