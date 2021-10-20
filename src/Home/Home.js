import React from "react";
import Header from "../Header/Header";
import OurExpertices from "../OurExpertises/OurExpertices";
import StuedentPerception from "../StudentPerception/StuedentPerception";
import HomeCourse from "../HomeCourse/HomeCourse";
import AboutusHeader from "../AboutusHeader/AboutusHeader";

const Home = () => {
  return (
    <div>
      <Header> </Header>
      <OurExpertices></OurExpertices>

      <AboutusHeader></AboutusHeader>

      <HomeCourse> </HomeCourse>
      <StuedentPerception></StuedentPerception>
    </div>
  );
};

export default Home;
