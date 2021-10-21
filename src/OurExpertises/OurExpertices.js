import React, { useEffect, useState } from "react";
import OurExpertice from "../OurExpertice/OurExpertice";
import './OurExpertices.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

const OurExpertices = () => {


  const [ourexpertices, setExpertices] = useState([]);
  useEffect(() => {
    fetch("./ourexpertice.json")
      .then((res) => res.json())
      .then((data) => setExpertices(data));
  }, []);

  useEffect(() =>{
    AOS.init({duration:2000});
  
  },[]);
  
  return (
    <div className="container mt-5 mb-5" data-aos="fade-right">
      <h1 className="text-center">OUR EXPERTICES</h1>
      <div className="row mt-2 mb-4">
        {ourexpertices.map((ourexpertice) => (
          <OurExpertice
            key={ourexpertice.id}
            ourexpertice={ourexpertice}
          ></OurExpertice>
        ))}
      </div>
    </div>
  );
};

export default OurExpertices;
