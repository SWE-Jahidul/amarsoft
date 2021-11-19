import React, { useEffect } from "react";
import Header from "../Header/Header";
import OurExpertices from "../OurExpertises/OurExpertices";
import StuedentPerception from "../StudentPerception/StuedentPerception";
import HomeCourse from "../HomeCourse/HomeCourse";
import AboutusHeader from "../AboutusHeader/AboutusHeader";
import Teachers from "../Teachers/Teachers";

import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {



  return (
    <div>
      <Header> </Header>
      <OurExpertices></OurExpertices>

      <AboutusHeader ></AboutusHeader>

      <HomeCourse> </HomeCourse>



      <StuedentPerception></StuedentPerception>

      <Teachers></Teachers>

    </div>
  );
};

export default Home;
