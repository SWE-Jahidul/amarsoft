import React from "react";
import About from "../About/About";
import Header from "../Header/Header";
import OurExpertices from "../OurExpertises/OurExpertices";
import StuedentPerception from "../StudentPerception/StuedentPerception";
import HomeCourse from "../HomeCourse/HomeCourse";
import ReadtoStaerted from "../ReadytoStarted/ReadtoStaerted";

const Home = () => {
  return (
    <div>
      <Header> </Header>
      <OurExpertices></OurExpertices>
      <About></About>
      <HomeCourse> </HomeCourse>
      <StuedentPerception></StuedentPerception>
      <ReadtoStaerted></ReadtoStaerted>
    </div>
  );
};

export default Home;
