import  { useEffect, useState } from "react";

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