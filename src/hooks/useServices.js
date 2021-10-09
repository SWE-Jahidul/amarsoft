import React, { useEffect, useState } from "react";
import Course from "../Course/Course";

const useServices = () => {
  const [courses, setCources] = useState([]);
  useEffect(() => {
    fetch("./course.json")
    
      .then((res) => res.json())
      .then((data) => {
        console.log("I have called! from userServic")
        setCources(data)
      });
  }, []);
  return [courses];
};
export default useServices;