import React from "react";
import Header from "../Header/Header";
import OurExpertices from "../OurExpertises/OurExpertices";
import StuedentPerception from "../StudentPerception/StuedentPerception";
import HomeCourse from "../HomeCourse/HomeCourse";
import ReadtoStaerted from "../ReadytoStarted/ReadtoStaerted";
import AboutusHeader from "../AboutusHeader/AboutusHeader";

const Home = () => {
  return (
    <div>
      <Header> </Header>
      <OurExpertices></OurExpertices>

      <AboutusHeader></AboutusHeader>


      <HomeCourse> </HomeCourse>
      <StuedentPerception></StuedentPerception>
      <ReadtoStaerted></ReadtoStaerted>
    </div>
  );
};

export default Home;
