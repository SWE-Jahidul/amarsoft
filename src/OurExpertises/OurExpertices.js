import React, { useEffect, useState } from "react";
import OurExpertice from "../OurExpertice/OurExpertice";


import './OurExpertices.css'
const OurExpertices = () => {
  const [ourexpertices, setExpertices] = useState([]);
  useEffect(() => {
    fetch("./ourexpertice.json")
      .then((res) => res.json())
      .then((data) => setExpertices(data));
  }, []);
  return (
    <div className="container mt-5 mb-5">
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
